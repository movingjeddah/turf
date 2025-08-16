// قاعدة بيانات الفيديوهات مع التصنيفات والوصف

export interface Video {
  id: string
  title: string
  titleEnglish: string
  description: string
  fileName: string
  duration?: string
  size: string
  category: string
  serviceCategory: string[]
  tags: string[]
  featured?: boolean
  thumbnail?: string
}

export const videos: Video[] = [
  // فيديوهات العشب الصناعي
  {
    id: 'artificial-grass-installation',
    title: 'تركيب العشب الصناعي - تحويل الفناء الخلفي',
    titleEnglish: 'Artificial Grass Installation - Backyard Makeover',
    description: 'شاهد عملية تركيب العشب الصناعي قليل الصيانة وتحويل الفناء الخلفي إلى مساحة خضراء جميلة',
    fileName: 'low-maintenance-artificial-grass-installation-backyard-makeover.mp4',
    duration: '2:30',
    size: '3.9MB',
    category: 'عشب-صناعي',
    serviceCategory: ['artificial-grass'],
    tags: ['عشب صناعي', 'تركيب', 'فناء خلفي', 'تحويل'],
    featured: true
  },
  {
    id: 'putting-green-turf',
    title: 'ملعب جولف صغير - أفكار العشب الصناعي',
    titleEnglish: 'Putting Green - Artificial Turf Ideas',
    description: 'إنشاء ملعب جولف صغير احترافي في الحديقة باستخدام العشب الصناعي عالي الجودة',
    fileName: 'putting-green-work-in-progress-artificial-turf-ideas.mp4',
    duration: '3:15',
    size: '4.9MB',
    category: 'عشب-صناعي',
    serviceCategory: ['artificial-grass'],
    tags: ['ملعب جولف', 'عشب صناعي', 'رياضة']
  },
  {
    id: 'astroturf-installation-satisfying',
    title: 'تركيب العشب الصناعي بطريقة مرضية',
    titleEnglish: 'Satisfying Astroturf Installation',
    description: 'عملية تركيب العشب الصناعي خطوة بخطوة بطريقة احترافية ومرضية للعين',
    fileName: 'who-knew-installing-an-astroturf-would-be-so-satisfying.mp4',
    duration: '4:00',
    size: '7.0MB',
    category: 'عشب-صناعي',
    serviceCategory: ['artificial-grass'],
    tags: ['تركيب', 'عشب صناعي', 'احترافي']
  },
  {
    id: 'artificial-grass-seams',
    title: 'خياطة وصلات العشب الصناعي',
    titleEnglish: 'Stitching Artificial Grass Seams',
    description: 'تقنيات احترافية لخياطة وصلات العشب الصناعي للحصول على مظهر طبيعي متجانس',
    fileName: 'stitching-artificial-grass-seams-straight-cut.mp4',
    duration: '3:45',
    size: '6.8MB',
    category: 'عشب-صناعي',
    serviceCategory: ['artificial-grass'],
    tags: ['خياطة', 'وصلات', 'تقنيات']
  },
  {
    id: 'best-artificial-grass',
    title: 'أفضل عشب صناعي للمناظر الطبيعية',
    titleEnglish: 'Best Artificial Grass for Landscapes',
    description: 'اختيار أفضل أنواع العشب الصناعي المناسب للمناظر الطبيعية والحدائق المختلفة',
    fileName: 'best-artificial-grass-for-landscapes.mp4',
    duration: '5:30',
    size: '10MB',
    category: 'عشب-صناعي',
    serviceCategory: ['artificial-grass'],
    tags: ['أفضل عشب', 'مناظر طبيعية', 'اختيار']
  },
  {
    id: 'pavers-artificial-turf',
    title: 'الأرضيات والعشب الصناعي - إلهام الفناء',
    titleEnglish: 'Pavers and Artificial Turf Inspiration',
    description: 'دمج الأرضيات الحجرية مع العشب الصناعي لإنشاء تصميم فناء مذهل',
    fileName: 'backyard-inspiration-pavers-and-artificial-turf.mp4',
    duration: '1:45',
    size: '1.1MB',
    category: 'عشب-صناعي',
    serviceCategory: ['artificial-grass', 'flooring'],
    tags: ['أرضيات', 'عشب صناعي', 'تصميم']
  },

  // فيديوهات تنسيق الحدائق
  {
    id: 'landscape-design-build',
    title: 'تصميم وبناء المناظر الطبيعية',
    titleEnglish: 'Landscape Design & Build',
    description: 'عملية تصميم وتنفيذ المناظر الطبيعية من البداية حتى النهاية بطريقة احترافية',
    fileName: 'landscape-design-build.mp4',
    duration: '3:30',
    size: '4.1MB',
    category: 'تنسيق-حدائق',
    serviceCategory: ['landscaping'],
    tags: ['تصميم', 'تنفيذ', 'مناظر طبيعية'],
    featured: true
  },
  {
    id: 'front-yard-decoration',
    title: 'تزيين الفناء الأمامي',
    titleEnglish: 'Front Yard Decoration',
    description: 'أفكار إبداعية لتزيين وتنسيق الفناء الأمامي لإضافة جمال وجاذبية للمنزل',
    fileName: 'front-yard-decoration.mp4',
    duration: '2:45',
    size: '3.8MB',
    category: 'تنسيق-حدائق',
    serviceCategory: ['landscaping'],
    tags: ['فناء أمامي', 'تزيين', 'جاذبية']
  },
  {
    id: 'garden-valuable-space',
    title: 'الحديقة مساحة قيمة يجب الاعتناء بها',
    titleEnglish: 'Garden is Valuable Space',
    description: 'أهمية الحديقة كمساحة قيمة في المنزل وكيفية الاستفادة منها بأفضل طريقة',
    fileName: 'a-garden-is-valuable-space-and-should-be-treated.mp4',
    duration: '2:00',
    size: '2.2MB',
    category: 'تنسيق-حدائق',
    serviceCategory: ['landscaping'],
    tags: ['قيمة الحديقة', 'اهمية', 'استثمار']
  },
  {
    id: 'luxury-backyard-ideas',
    title: 'أفكار الفناء الخلفي الفاخر',
    titleEnglish: 'Luxury Backyard Lifestyle Ideas',
    description: 'أفكار إبداعية ومُلهمة لتحويل الفناء الخلفي إلى مساحة فاخرة للعيش والاستمتاع',
    fileName: 'inspirational-backyard-ideas-luxury-lifestyle.mp4',
    duration: '5:00',
    size: '8.8MB',
    category: 'تنسيق-حدائق',
    serviceCategory: ['landscaping'],
    tags: ['فناء خلفي', 'فخامة', 'أفكار'],
    featured: true
  },
  {
    id: 'terrace-garden-ideas',
    title: 'أفكار حدائق التراس المذهلة',
    titleEnglish: 'Stunning Terrace Garden Ideas',
    description: 'تصاميم رائعة لحدائق التراس والأسطح لاستغلال المساحات العلوية',
    fileName: 'stunning-terrace-garden-ideas.mp4',
    duration: '2:15',
    size: '2.1MB',
    category: 'تنسيق-حدائق',
    serviceCategory: ['landscaping'],
    tags: ['تراس', 'أسطح', 'حدائق علوية']
  },
  {
    id: 'outdoor-space-upgrade',
    title: 'ترقية المساحات الخارجية والداخلية',
    titleEnglish: 'Elevating Outdoor Space & Interior Upgrade',
    description: 'كيفية ترقية وتحسين المساحات الخارجية والداخلية لتكون أكثر جمالاً ووظيفية',
    fileName: 'elevating-your-outdoor-space-or-upgrading-interiors.mp4',
    duration: '3:20',
    size: '4.2MB',
    category: 'تنسيق-حدائق',
    serviceCategory: ['landscaping'],
    tags: ['ترقية', 'مساحات خارجية', 'تحسين']
  },

  // فيديوهات الإضاءة والأرضيات
  {
    id: 'flooring-lighting-jeddah',
    title: 'أرضيات وإضاءة جدة',
    titleEnglish: 'Flooring & Lighting Jeddah',
    description: 'أحدث تصاميم الأرضيات والإضاءة المناسبة لمناخ ومتطلبات مدينة جدة',
    fileName: 'flooring-lighting-jeddah.mp4',
    duration: '2:30',
    size: '2.2MB',
    category: 'إضاءة-أرضيات',
    serviceCategory: ['lighting', 'flooring'],
    tags: ['جدة', 'أرضيات', 'إضاءة'],
    featured: true
  },
  {
    id: 'outdoor-flooring-lighting',
    title: 'أرضيات وإضاءة خارجية',
    titleEnglish: 'Outdoor Flooring & Lighting',
    description: 'حلول الأرضيات والإضاءة المناسبة للمساحات الخارجية والحدائق',
    fileName: 'outdoor-flooring-lighting.mp4',
    duration: '2:45',
    size: '2.6MB',
    category: 'إضاءة-أرضيات',
    serviceCategory: ['lighting', 'flooring'],
    tags: ['أرضيات خارجية', 'إضاءة خارجية', 'حدائق']
  },

  // فيديوهات البرجولات والمظلات
  {
    id: 'modern-pergolas',
    title: 'البرجولات الحديثة',
    titleEnglish: 'Modern Pergolas',
    description: 'تصاميم حديثة ومبتكرة للبرجولات لإضافة الظل والجمال للحدائق',
    fileName: 'pergolas-modern.mp4',
    duration: '3:30',
    size: '4.2MB',
    category: 'برجولات-مظلات',
    serviceCategory: ['pergola'],
    tags: ['برجولات', 'حديثة', 'ظل']
  },
  {
    id: 'motorized-cover-shade',
    title: 'معايير جديدة للمظلات الآلية',
    titleEnglish: 'New Benchmarks Motorized Cover & Shade',
    description: 'أحدث تقنيات المظلات الآلية والحلول المتطورة للظل والحماية',
    fileName: 'new-benchmarks-for-motorized-cover-and-shade.mp4',
    duration: '4:15',
    size: '8.6MB',
    category: 'برجولات-مظلات',
    serviceCategory: ['pergola'],
    tags: ['مظلات آلية', 'تقنيات', 'ظل']
  },

  // فيديوهات الجدران الخضراء
  {
    id: 'indoor-green-wall',
    title: 'تصاميم الجدران الخضراء الداخلية',
    titleEnglish: 'Indoor Green Wall Designs',
    description: 'تصاميم مبتكرة للجدران الخضراء الداخلية لإضافة الطبيعة للمساحات المغلقة',
    fileName: 'indoor-green-wall-designs-1.mp4',
    duration: '6:30',
    size: '14MB',
    category: 'جدران-خضراء',
    serviceCategory: ['green-walls'],
    tags: ['جدران خضراء', 'داخلية', 'طبيعة']
  },
  {
    id: 'backyard-living-green-wall',
    title: 'أهداف الفناء الخلفي - الجدران الخضراء',
    titleEnglish: 'Backyard Goals - Living Green Wall',
    description: 'إنشاء جدران خضراء حية في الفناء الخلفي لتحقيق أهداف التصميم المثالي',
    fileName: 'backyard-goals-living-green-wall-edition.mp4',
    duration: '3:45',
    size: '5.1MB',
    category: 'جدران-خضراء',
    serviceCategory: ['green-walls'],
    tags: ['فناء خلفي', 'جدران حية', 'أهداف']
  },
  {
    id: 'tv-wall-nature',
    title: 'أفكار جدار التلفزيون - إدخال الطبيعة للمنزل',
    titleEnglish: 'TV Wall Ideas - Bring Nature to Living Room',
    description: 'دمج الطبيعة في جدار التلفزيون لإنشاء مساحة معيشة مميزة ومريحة',
    fileName: 'wall-ideas-for-your-tv-wall-bring-nature-into-your-living-room.mp4',
    duration: '7:30',
    size: '16MB',
    category: 'جدران-خضراء',
    serviceCategory: ['green-walls'],
    tags: ['جدار تلفزيون', 'طبيعة', 'غرفة معيشة']
  }
]

// تصنيف الفيديوهات حسب الفئة
export const videoCategories = {
  'عشب-صناعي': 'العشب الصناعي',
  'تنسيق-حدائق': 'تنسيق الحدائق',
  'إضاءة-أرضيات': 'الإضاءة والأرضيات',
  'برجولات-مظلات': 'البرجولات والمظلات',
  'جدران-خضراء': 'الجدران الخضراء'
}

// الحصول على الفيديوهات المميزة
export const getFeaturedVideos = () => videos.filter(video => video.featured)

// الحصول على الفيديوهات حسب الفئة
export const getVideosByCategory = (category: string) => 
  videos.filter(video => video.category === category)

// الحصول على الفيديوهات حسب الخدمة
export const getVideosByService = (service: string) => 
  videos.filter(video => video.serviceCategory.includes(service))

// الحصول على فيديو بالمعرف
export const getVideoById = (id: string) => 
  videos.find(video => video.id === id)

// الحصول على مسار الفيديو
export const getVideoPath = (fileName: string) => `/videos/${fileName}`
