// إضافة دعم تحميل الفيديوهات والملفات
const mediaLibrary = window.CMS.getWidgetValueFormat('file');

// تكوين مخصص للـ CMS
window.CMS.registerPreviewStyle('/css/style.css');

// تخصيص واجهة المستخدم
window.CMS.registerLocale('ar', {
  app: {
    header: {
      content: 'المحتويات',
      workflow: 'سير العمل',
      media: 'الوسائط',
      quickAdd: 'إضافة سريعة',
    },
    app: {
      errorHeader: 'خطأ في تحميل تكوين CMS',
      configErrors: 'أخطاء في التكوين',
      checkConfigYml: 'تحقق من ملف config.yml الخاص بك.',
      loadingConfig: 'تحميل التكوين...',
      waitingBackend: 'في انتظار الخادم...',
    },
    notFoundPage: {
      header: 'غير موجود',
    },
  },
  collection: {
    sidebar: {
      collections: 'المجموعات',
      searchAll: 'بحث في الكل',
    },
    collectionTop: {
      viewAs: 'عرض كـ',
      newButton: 'جديد %{collectionLabel}',
    },
    entries: {
      loadingEntries: 'تحميل المدخلات',
      cachingEntries: 'تخزين المدخلات',
      longerLoading: 'قد يستغرق هذا عدة دقائق',
    },
  },
  editor: {
    editorControl: {
      field: {
        optional: 'اختياري',
      },
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} مطلوب.',
        regexPattern: '%{fieldLabel} لا يتطابق مع النمط: %{pattern}.',
        processing: '%{fieldLabel} قيد المعالجة.',
        range: '%{fieldLabel} يجب أن يكون بين %{minValue} و %{maxValue}.',
        min: '%{fieldLabel} يجب أن يكون على الأقل %{minValue}.',
        max: '%{fieldLabel} يجب أن يكون %{maxValue} أو أقل.',
      },
    },
    editor: {
      onLeavePage: 'هل أنت متأكد أنك تريد ترك هذه الصفحة؟',
      onUpdatingWithUnsavedChanges: 'لديك تغييرات غير محفوظة، يرجى الحفظ قبل تحديث الحالة.',
      onPublishingNotReady: 'يرجى تحديث الحالة إلى "جاهز" قبل النشر.',
      onPublishingWithUnsavedChanges: 'لديك تغييرات غير محفوظة، يرجى الحفظ قبل النشر.',
      onPublishing: 'هل أنت متأكد أنك تريد نشر هذا الإدخال؟',
      onDeleteWithUnsavedChanges: 'هل أنت متأكد أنك تريد حذف هذا الإدخال المنشور، بالإضافة إلى التغييرات غير المحفوظة من الجلسة الحالية؟',
      onDeletePublishedEntry: 'هل أنت متأكد أنك تريد حذف هذا الإدخال المنشور؟',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'سيؤدي هذا إلى حذف جميع التغييرات غير المنشورة لهذا الإدخال، بالإضافة إلى التغييرات غير المحفوظة من الجلسة الحالية. هل ما زلت تريد الحذف؟',
      onDeleteUnpublishedChanges: 'سيتم حذف جميع التغييرات غير المنشورة لهذا الإدخال. هل ما زلت تريد الحذف؟',
      loadingEntry: 'تحميل الإدخال...',
      confirmLoadBackup: 'تم استرداد نسخة احتياطية محلية لهذا الإدخال، هل ترغب في استخدامها؟',
    },
    editorToolbar: {
      publishing: 'نشر...',
      publish: 'نشر',
      published: 'منشور',
      publishAndCreateNew: 'نشر وإنشاء جديد',
      deleteUnpublishedChanges: 'حذف التغييرات غير المنشورة',
      deleteUnpublishedEntry: 'حذف إدخال غير منشور',
      deletePublishedEntry: 'حذف إدخال منشور',
      deleteEntry: 'حذف إدخال',
      saving: 'حفظ...',
      save: 'حفظ',
      deleting: 'حذف...',
      updating: 'تحديث...',
      status: 'الحالة: %{status}',
      backCollection: ' كتابة في مجموعة %{collectionLabel}',
      unsavedChanges: 'تغييرات غير محفوظة',
      changesSaved: 'تم حفظ التغييرات',
      draft: 'مسودة',
      inReview: 'قيد المراجعة',
      ready: 'جاهز',
      publishNow: 'نشر الآن',
      deployPreviewPendingButtonLabel: 'فحص المعاينة',
      deployPreviewButtonLabel: 'عرض المعاينة',
      deployButtonLabel: 'عرض المنشور',
    },
    editorWidgets: {
      image: {
        choose: 'اختر صورة',
        chooseDifferent: 'اختر صورة مختلفة',
        remove: 'إزالة الصورة',
      },
      file: {
        choose: 'اختر ملف',
        chooseDifferent: 'اختر ملف مختلف',
        remove: 'إزالة الملف',
      },
      unknownControl: {
        noControl: 'لا يوجد تحكم للـ widget \'%{widget}\'.',
      },
      unknownPreview: {
        noPreview: 'لا توجد معاينة للـ widget \'%{widget}\'.',
      },
      headingOptions: {
        headingOne: 'عنوان 1',
        headingTwo: 'عنوان 2',
        headingThree: 'عنوان 3',
        headingFour: 'عنوان 4',
        headingFive: 'عنوان 5',
        headingSix: 'عنوان 6',
      },
    },
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'مسودة',
    },
    mediaLibrary: {
      onDelete: 'هل أنت متأكد أنك تريد حذف الوسائط المحددة؟',
      fileTooLarge: 'الملف كبير جدًا.\nتم تكوين المكتبة للسماح بملفات حتى %{size} kB.',
    },
    mediaLibraryModal: {
      loading: 'تحميل...',
      noResults: 'لا توجد نتائج.',
      noAssetsFound: 'لم يتم العثور على أصول.',
      noImagesFound: 'لم يتم العثور على صور.',
      private: 'خاص ',
      images: 'صور',
      mediaAssets: 'أصول الوسائط',
      search: 'بحث...',
      uploading: 'تحميل...',
      upload: 'تحميل جديد',
      download: 'تنزيل',
      deleting: 'حذف...',
      deleteSelected: 'حذف المحدد',
      chooseSelected: 'اختيار المحدد',
    },
  },
  ui: {
    errorBoundary: {
      title: 'خطأ',
      details: 'حدث خطأ - يرجى ',
      reportIt: 'الإبلاغ عنه.',
      detailsHeading: 'تفاصيل',
      recoveredEntry: {
        heading: 'المستند المستعاد',
        warning: 'يرجى نسخ/لصق هذا في مكان ما قبل الانتقال!',
        copyButtonLabel: 'نسخ إلى الحافظة',
      },
    },
    settingsDropdown: {
      logOut: 'تسجيل الخروج',
    },
    toast: {
      onFailToLoadEntries: 'فشل في تحميل الإدخال: %{details}',
      onFailToLoadDeployPreview: 'فشل في تحميل المعاينة: %{details}',
      onFailToPersist: 'فشل في الاحتفاظ بالإدخال: %{details}',
      onFailToDelete: 'فشل في حذف الإدخال: %{details}',
      onFailToUpdateStatus: 'فشل في تحديث الحالة: %{details}',
      missingRequiredField: 'عفوًا، أنت تفتقد حقلًا مطلوبًا. يرجى التصحيح قبل الحفظ.',
      entrySaved: 'تم حفظ الإدخال',
      entryPublished: 'تم نشر الإدخال',
      entryUnpublished: 'تم إلغاء نشر الإدخال',
      onFailToPublishEntry: 'فشل في نشر الإدخال: %{details}',
      onFailToUnpublishEntry: 'فشل في إلغاء نشر الإدخال: %{details}',
      entryUpdated: 'تم تحديث حالة الإدخال',
      onDeleteUnpublishedChanges: 'تم حذف التغييرات غير المنشورة',
      onFailToAuth: '%{details}',
    },
  },
  workflow: {
    workflow: {
      loading: 'جارٍ تحميل مدخلات سير العمل التحريري',
      workflowHeading: 'سير العمل التحريري',
      newPost: 'منشور جديد',
      description: '%{smart_count} إدخال ينتظر المراجعة، %{readyCount} جاهز للنشر. |||| %{smart_count} إدخالات تنتظر المراجعة، %{readyCount} جاهز للنشر. ',
      dateFormat: 'MMMM D',
    },
    workflowCard: {
      lastChange: '%{date} بواسطة %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'بواسطة %{author}',
      deleteChanges: 'حذف التغييرات',
      deleteNewEntry: 'حذف إدخال جديد',
      publishChanges: 'نشر التغييرات',
      publishNewEntry: 'نشر إدخال جديد',
    },
    workflowList: {
      onDeleteEntry: 'هل أنت متأكد أنك تريد حذف هذا الإدخال؟',
      onPublishEntry: 'هل أنت متأكد أنك تريد نشر هذا الإدخال؟',
      draftHeader: 'مسودات',
      inReviewHeader: 'قيد المراجعة',
      readyHeader: 'جاهز',
      currentEntries: '%{smart_count} إدخال |||| %{smart_count} إدخالات',
    },
  },
});
