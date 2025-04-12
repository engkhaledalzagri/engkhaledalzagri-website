// Language Switching Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get language elements
    const languageSwitchers = document.querySelectorAll('.language-switcher button');
    const htmlElement = document.documentElement;
    
    // Set initial language based on HTML lang attribute
    const currentLang = htmlElement.lang || 'ar';
    updateLanguageContent(currentLang);
    
    // Add event listeners to language switchers
    languageSwitchers.forEach(switcher => {
        switcher.addEventListener('click', function() {
            const newLang = currentLang === 'ar' ? 'en' : 'ar';
            switchLanguage(newLang);
        });
    });
    
    // Function to switch language
    function switchLanguage(lang) {
        // Update HTML lang attribute and dir attribute
        htmlElement.lang = lang;
        htmlElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // Add/remove RTL class from body
        if (lang === 'ar') {
            document.body.classList.add('rtl');
            document.body.classList.remove('ltr');
        } else {
            document.body.classList.add('ltr');
            document.body.classList.remove('rtl');
        }
        
        // Update content
        updateLanguageContent(lang);
        
        // Save language preference in localStorage
        localStorage.setItem('preferredLanguage', lang);
    }
    
    // Function to update content based on language
    function updateLanguageContent(lang) {
        // Update all elements with data-lang-ar and data-lang-en attributes
        const elementsWithLangData = document.querySelectorAll('[data-lang-ar], [data-lang-en]');
        
        elementsWithLangData.forEach(element => {
            const arText = element.getAttribute('data-lang-ar');
            const enText = element.getAttribute('data-lang-en');
            
            if (lang === 'ar' && arText) {
                element.textContent = arText;
            } else if (lang === 'en' && enText) {
                element.textContent = enText;
            }
        });
        
        // Update language switcher text
        languageSwitchers.forEach(switcher => {
            if (lang === 'ar') {
                switcher.textContent = switcher.getAttribute('data-lang-ar') || 'English';
            } else {
                switcher.textContent = switcher.getAttribute('data-lang-en') || 'العربية';
            }
        });
    }
    
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && savedLang !== currentLang) {
        switchLanguage(savedLang);
    }
});

// Responsive Navigation
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenuButton = document.querySelector('.close-menu');
    
    if (mobileMenuToggle && mobileMenu && closeMenuButton) {
        // Open mobile menu
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.style.display = 'block';
            setTimeout(() => {
                mobileMenu.style.opacity = '1';
                mobileMenu.style.transform = 'translateX(0)';
            }, 10);
        });
        
        // Close mobile menu
        closeMenuButton.addEventListener('click', function() {
            mobileMenu.style.opacity = '0';
            mobileMenu.style.transform = document.documentElement.dir === 'rtl' ? 'translateX(-100%)' : 'translateX(100%)';
            setTimeout(() => {
                mobileMenu.style.display = 'none';
            }, 300);
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (mobileMenu.style.display === 'block' && 
                !mobileMenu.contains(event.target) && 
                !mobileMenuToggle.contains(event.target)) {
                closeMenuButton.click();
            }
        });
        
        // Close mobile menu when window is resized to desktop size
        window.addEventListener('resize', function() {
            if (window.innerWidth > 992 && mobileMenu.style.display === 'block') {
                mobileMenu.style.display = 'none';
                mobileMenu.style.opacity = '0';
                mobileMenu.style.transform = document.documentElement.dir === 'rtl' ? 'translateX(-100%)' : 'translateX(100%)';
            }
        });
    }
});
