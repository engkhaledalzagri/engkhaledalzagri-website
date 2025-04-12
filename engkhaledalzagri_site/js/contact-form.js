// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formDataObj = {};
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });
            
            // Validate form data
            const errors = validateForm(formDataObj);
            
            if (Object.keys(errors).length > 0) {
                // Display errors
                showFormErrors(errors);
                return;
            }
            
            // Simulate form submission (in a real implementation, this would send data to a server)
            submitForm(formDataObj);
        });
    }
    
    // Form validation function
    function validateForm(data) {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Check required fields
        if (!data.name || data.name.trim() === '') {
            errors.name = document.documentElement.lang === 'ar' ? 'الاسم مطلوب' : 'Name is required';
        }
        
        if (!data.email || data.email.trim() === '') {
            errors.email = document.documentElement.lang === 'ar' ? 'البريد الإلكتروني مطلوب' : 'Email is required';
        } else if (!emailRegex.test(data.email)) {
            errors.email = document.documentElement.lang === 'ar' ? 'البريد الإلكتروني غير صالح' : 'Invalid email format';
        }
        
        if (!data.subject || data.subject.trim() === '') {
            errors.subject = document.documentElement.lang === 'ar' ? 'الموضوع مطلوب' : 'Subject is required';
        }
        
        if (!data.message || data.message.trim() === '') {
            errors.message = document.documentElement.lang === 'ar' ? 'الرسالة مطلوبة' : 'Message is required';
        }
        
        return errors;
    }
    
    // Display form errors
    function showFormErrors(errors) {
        // Remove any existing error messages
        const existingErrors = document.querySelectorAll('.form-error');
        existingErrors.forEach(error => error.remove());
        
        // Add new error messages
        for (const field in errors) {
            const input = document.getElementById(field);
            const errorMessage = document.createElement('div');
            errorMessage.className = 'form-error';
            errorMessage.style.color = 'red';
            errorMessage.style.fontSize = '0.8rem';
            errorMessage.style.marginTop = '0.25rem';
            errorMessage.textContent = errors[field];
            
            input.parentNode.insertBefore(errorMessage, input.nextSibling);
            input.style.borderColor = 'red';
            
            // Reset border color when user starts typing
            input.addEventListener('input', function() {
                this.style.borderColor = '';
                const nextError = this.nextSibling;
                if (nextError && nextError.className === 'form-error') {
                    nextError.remove();
                }
            }, { once: true });
        }
    }
    
    // Form submission function (simulation)
    function submitForm(data) {
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = document.documentElement.lang === 'ar' ? 'جاري الإرسال...' : 'Sending...';
        
        // Simulate server request with timeout
        setTimeout(() => {
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'alert-success';
            successMessage.style.backgroundColor = '#d4edda';
            successMessage.style.color = '#155724';
            successMessage.style.padding = '1rem';
            successMessage.style.borderRadius = '4px';
            successMessage.style.marginBottom = '1rem';
            successMessage.textContent = document.documentElement.lang === 'ar' 
                ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.' 
                : 'Your message has been sent successfully! We will contact you soon.';
            
            contactForm.parentNode.insertBefore(successMessage, contactForm);
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitButton.disabled = false;
            submitButton.textContent = originalText;
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        }, 1500);
    }
});
