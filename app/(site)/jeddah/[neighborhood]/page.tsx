import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { neighborhoods } from '@/content/neighborhoods'
import { services } from '@/content/services'
import { routes } from '@/lib/routes'
import { generateMetaTags } from '@/lib/seo'
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/ldjson'
import { 
  MapPin, 
  Phone, 
  Clock, 
  Star,
  Users,
  Award,
  CheckCircle,
  ArrowLeft,
  Home,
  Truck,
  Wrench,
  Leaf
} from 'lucide-react'

interface NeighborhoodPageProps {
  params: {
    neighborhood: string
  }
}

// Generate static params for all neighborhoods
export async function generateStaticParams() {
  return neighborhoods.map((neighborhood) => ({
    neighborhood: neighborhood.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: NeighborhoodPageProps): Promise<Metadata> {
  const neighborhood = neighborhoods.find(n => n.slug === params.neighborhood)
  
  if (!neighborhood) {
    return {
      title: '404 - الحي غير موجود',
    }
  }

  return generateMetaTags({
    title: `خدمات تنسيق الحدائق في ${neighborhood.arabicName} - جدة`,
    description: `أفضل خدمات تنسيق الحدائق والمناظر الطبيعية في ${neighborhood.arabicName}، جدة. تصميم وتنفيذ الحدائق، عشب صناعي، أنظمة ري، وصيانة شاملة.`,
    canonical: routes.jeddah.neighborhood(neighborhood.slug),
    ogImage: '/images/landscaping-jeddah-neighborhood.webp',
  })
}

export default function NeighborhoodPage({ params }: NeighborhoodPageProps) {
  const neighborhood = neighborhoods.find(n => n.slug === params.neighborhood)

  if (!neighborhood) {
    notFound()
  }

  // Define neighborhood-specific content
  const getNeighborhoodContent = (slug: string) => {
    const contentMap: Record<string, {
      heroImage: string
      featuresImage: string
      features: string[]
      expertise: string[]
      whyUs: string[]
      localInsights: string
      stats: { label: string; value: string }[]
      gallery: string[]
    }> = {
      'obhur-north': {
        heroImage: '/images/neighborhoods/obhur-north-hero.webp',
        featuresImage: '/images/neighborhoods/obhur-north-features.webp',
        features: ['فلل وقصور فاخرة', 'حدائق واسعة ومميزة', 'تصاميم حصرية', 'مساحات خضراء كبيرة'],
        expertise: ['تصميم حدائق القصور', 'تنسيق المداخل الفخمة', 'أنظمة إضاءة متطورة', 'نوافير وشلالات فاخرة'],
        whyUs: ['خبرة في الفلل الراقية', 'تصاميم حصرية', 'فريق متخصص', 'ضمان الجودة'],
        localInsights: 'نفهم متطلبات سكان أبحر الشمالية من الفلل والقصور الفاخرة، ونقدم تصاميم حدائق حصرية تليق بمستوى المنطقة الراقي.',
        stats: [
          { label: 'فلل تم تنسيقها', value: '150+' },
          { label: 'مشاريع فاخرة', value: '80+' },
          { label: 'عملاء راضين', value: '100%' },
          { label: 'سنوات خبرة', value: '15+' }
        ],
        gallery: [
          '/images/outdoor-wall-fountains-that-add-luxury-to-your-landscaping.webp',
          '/images/landscape-design-build.webp',
          '/images/before-after-outdoor.webp',
          '/images/small-arizona-backyard-with-lawn-planters-and-custom-pergola-by-straight-line-landscape.webp'
        ]
      },
      'al-hamdania': {
        heroImage: '/images/neighborhoods/al-hamdania-hero.webp',
        featuresImage: '/images/neighborhoods/al-hamdania-features.webp',
        features: ['منازل وفلل متنوعة', 'أحياء سكنية حديثة', 'مساحات عائلية', 'بيئة آمنة للأطفال'],
        expertise: ['تنسيق الحدائق السكنية', 'مناطق لعب آمنة', 'حدائق عائلية', 'صيانة دورية'],
        whyUs: ['خدمات متكاملة', 'أسعار مناسبة', 'فريق محلي', 'استجابة سريعة'],
        localInsights: 'نخدم مجتمع الحمدانية بحلول تنسيق حدائق تناسب جميع أنواع المنازل والفلل في المنطقة.',
        stats: [
          { label: 'منازل تم تنسيقها', value: '300+' },
          { label: 'مشاريع عائلية', value: '200+' },
          { label: 'رضا العملاء', value: '98%' },
          { label: 'فرق العمل', value: '5' }
        ],
        gallery: [
          '/images/landscape-design-build.webp',
          '/images/landscape-design-build-1.webp',
          '/images/green-wall-and-landscape.webp',
          '/images/shade-planting-scheme-garden-plan-under-shade-tree-tree-base-landscape-yard-and-curb-appeal.webp'
        ]
      },
      'al-rawdah': {
        heroImage: '/images/neighborhoods/al-rawdah-hero.webp',
        featuresImage: '/images/neighborhoods/al-rawdah-features.webp',
        features: ['حي هادئ ومريح', 'منازل عائلية', 'بيئة سكنية آمنة', 'مساحات خضراء جميلة'],
        expertise: ['حدائق منزلية هادئة', 'مناطق استرخاء', 'نباتات مهدئة', 'تصاميم بسيطة وأنيقة'],
        whyUs: ['تصاميم هادئة', 'نباتات محلية', 'صيانة مستمرة', 'أسعار عادلة'],
        localInsights: 'نصمم حدائق هادئة ومريحة تتناسب مع طبيعة حي الروضة السكني الهادئ.',
        stats: [
          { label: 'منازل تم تنسيقها', value: '180+' },
          { label: 'مشاريع هادئة', value: '120+' },
          { label: 'رضا العملاء', value: '97%' },
          { label: 'سنوات خبرة', value: '12+' }
        ],
        gallery: [
          '/images/beautiful-pergola-ideas-to-finally-upgrade-your-yard-grow-your-yard.webp',
          '/images/landscape-design-build.webp',
          '/images/landscape-design-build-1.webp',
          '/images/shade-planting-scheme-garden-plan-under-shade-tree-tree-base-landscape-yard-and-curb-appeal.webp'
        ]
      },
      'as-salamah': {
        heroImage: '/images/neighborhoods/as-salamah-hero.webp',
        featuresImage: '/images/neighborhoods/as-salamah-features.webp',
        features: ['منطقة حيوية ونشطة', 'منازل وفلل حديثة', 'قرب من الخدمات', 'حركة تجارية نشطة'],
        expertise: ['تنسيق احترافي سريع', 'حدائق مقاومة للحرارة', 'أنظمة ري ذكية', 'صيانة منتظمة'],
        whyUs: ['خدمة سريعة', 'تقنيات حديثة', 'فريق محترف', 'متابعة مستمرة'],
        localInsights: 'نقدم حلول تنسيق عملية وسريعة تناسب نمط الحياة النشط في منطقة السلامة.',
        stats: [
          { label: 'مشاريع سريعة', value: '250+' },
          { label: 'خدمات متنوعة', value: '180+' },
          { label: 'استجابة سريعة', value: '24/7' },
          { label: 'رضا العملاء', value: '96%' }
        ],
        gallery: [
          '/images/turf-grass.webp',
          '/images/landscape-design-build-1.webp',
          '/images/artificial-grass-range.webp',
          '/images/green-wall-and-landscape.webp'
        ]
      },
      'az-zahra': {
        heroImage: '/images/neighborhoods/az-zahra-hero.webp',
        featuresImage: '/images/neighborhoods/az-zahra-features.webp',
        features: ['حي عائلي آمن', 'مساحات للأطفال', 'بيئة صحية', 'مجتمع متماسك'],
        expertise: ['حدائق آمنة للأطفال', 'نباتات غير سامة', 'مناطق لعب طبيعية', 'أرضيات آمنة'],
        whyUs: ['تركيز على الأمان', 'خبرة مع العائلات', 'نباتات صديقة للأطفال', 'تصاميم تفاعلية'],
        localInsights: 'نصمم حدائق آمنة وجميلة خصيصاً للعائلات وأطفال حي الزهراء.',
        stats: [
          { label: 'حدائق عائلية', value: '200+' },
          { label: 'مساحات آمنة', value: '150+' },
          { label: 'رضا الأطفال', value: '100%' },
          { label: 'ضمان الأمان', value: '5 سنوات' }
        ],
        gallery: [
          '/images/artificial-grass-range.webp',
          '/images/landscape-design-build.webp',
          '/images/turf-before-after.webp',
          '/images/hego-miracle-artificial-grass-range.webp'
        ]
      },
      'an-naeem': {
        heroImage: '/images/neighborhoods/an-naeem-hero.webp',
        featuresImage: '/images/neighborhoods/an-naeem-features.webp',
        features: ['مساحات خضراء واسعة', 'منطقة متطورة', 'فلل حديثة', 'بنية تحتية متقدمة'],
        expertise: ['تنسيق المساحات الكبيرة', 'حدائق متقدمة', 'أنظمة ري تلقائية', 'إضاءة ذكية'],
        whyUs: ['تقنيات متطورة', 'خبرة في المشاريع الكبيرة', 'فريق تقني', 'ضمان شامل'],
        localInsights: 'نستغل المساحات الخضراء الواسعة في النعيم لإنشاء حدائق متطورة ومبتكرة.',
        stats: [
          { label: 'مساحات كبيرة', value: '300+' },
          { label: 'تقنيات متطورة', value: '50+' },
          { label: 'فرق متخصصة', value: '8' },
          { label: 'رضا العملاء', value: '99%' }
        ],
        gallery: [
          '/images/unique-concrete-backyard-ideas-for-a-creative-outdoor-space.webp',
          '/images/landscape-design-build-1.webp',
          '/images/outdoor-wall-fountains-that-add-luxury-to-your-landscaping.webp',
          '/images/small-arizona-backyard-with-lawn-planters-and-custom-pergola-by-straight-line-landscape.webp'
        ]
      },
      'al-mohammedia': {
        heroImage: '/images/neighborhoods/al-mohammedia-hero.webp',
        featuresImage: '/images/neighborhoods/al-mohammedia-features.webp',
        features: ['فلل فخمة وحديثة', 'تصاميم معمارية مميزة', 'مساحات واسعة', 'حي راقي'],
        expertise: ['تصاميم حدائق مبتكرة', 'تنسيق فني راقي', 'نباتات نادرة', 'عناصر مائية فاخرة'],
        whyUs: ['إبداع في التصميم', 'خامات فاخرة', 'فريق فني متقدم', 'خدمة VIP'],
        localInsights: 'نبدع في تصميم حدائق فنية مبتكرة تتناسب مع الفلل الفخمة في المحمدية.',
        stats: [
          { label: 'مشاريع فاخرة', value: '120+' },
          { label: 'تصاميم مبتكرة', value: '90+' },
          { label: 'عملاء VIP', value: '100%' },
          { label: 'جوائز تصميم', value: '15+' }
        ],
        gallery: [
          '/images/before-after-outdoor.webp',
          '/images/outdoor-wall-fountains-that-add-luxury-to-your-landscaping.webp',
          '/images/landscape-design-build.webp',
          '/images/small-arizona-backyard-with-lawn-planters-and-custom-pergola-by-straight-line-landscape.webp'
        ]
      },
      'al-basateen': {
        heroImage: '/images/neighborhoods/al-basateen-hero.webp',
        featuresImage: '/images/neighborhoods/al-basateen-features.webp',
        features: ['منطقة خضراء طبيعية', 'حدائق تراثية', 'بيئة زراعية', 'مناخ مناسب للنباتات'],
        expertise: ['الحدائق التراثية', 'النباتات المحلية', 'الزراعة العضوية', 'حفظ التراث النباتي'],
        whyUs: ['خبرة في النباتات المحلية', 'حفظ التراث', 'زراعة مستدامة', 'معرفة عميقة بالمنطقة'],
        localInsights: 'نحافظ على تراث البساتين الأخضر ونطوره بتقنيات حديثة مع الحفاظ على الطابع التراثي.',
        stats: [
          { label: 'حدائق تراثية', value: '160+' },
          { label: 'نباتات محلية', value: '200+' },
          { label: 'زراعة عضوية', value: '100%' },
          { label: 'حفظ التراث', value: '30 عام' }
        ],
        gallery: [
          '/images/green-wall-and-landscape.webp',
          '/images/shade-planting-scheme-garden-plan-under-shade-tree-tree-base-landscape-yard-and-curb-appeal.webp',
          '/images/green-wall-variations.webp',
          '/images/landscape-design-build-1.webp'
        ]
      },
      'al-khalidiyyah': {
        heroImage: '/images/neighborhoods/al-khalidiyyah-hero.webp',
        featuresImage: '/images/neighborhoods/al-khalidiyyah-features.webp',
        features: ['منطقة تجارية وسكنية', 'كثافة سكانية عالية', 'خدمات متنوعة', 'حركة نشطة'],
        expertise: ['تنسيق سريع وعملي', 'حدائق مقاومة للازدحام', 'صيانة مكثفة', 'تصاميم متعددة الأغراض'],
        whyUs: ['حلول عملية', 'خدمة سريعة', 'صيانة مكثفة', 'أسعار تنافسية'],
        localInsights: 'نقدم حلول تنسيق عملية تناسب البيئة التجارية والسكنية المزدحمة في الخالدية.',
        stats: [
          { label: 'مشاريع تجارية', value: '220+' },
          { label: 'حلول عملية', value: '150+' },
          { label: 'صيانة شهرية', value: '80+' },
          { label: 'عملاء تجاريين', value: '95%' }
        ],
        gallery: [
          '/images/before-after.webp',
          '/images/artificial-grass-range.webp',
          '/images/landscape-design-build.webp',
          '/images/green-wall-and-landscape.webp'
        ]
      },
      'al-shatiea': {
        heroImage: '/images/neighborhoods/al-shatiea-hero.webp',
        featuresImage: '/images/neighborhoods/al-shatiea-features.webp',
        features: ['منطقة ساحلية خلابة', 'مناخ بحري', 'رطوبة عالية', 'تربة ملحية'],
        expertise: ['نباتات مقاومة للملوحة', 'تصاميم ساحلية', 'حماية من الرياح', 'أنظمة صرف متقدمة'],
        whyUs: ['خبرة في البيئة الساحلية', 'نباتات متخصصة', 'حماية من العوامل البحرية', 'تصاميم مقاومة'],
        localInsights: 'نختار النباتات والتصاميم المناسبة للبيئة الساحلية الفريدة في منطقة الشاطئ.',
        stats: [
          { label: 'مشاريع ساحلية', value: '140+' },
          { label: 'نباتات مقاومة', value: '60+' },
          { label: 'حماية ملحية', value: '100%' },
          { label: 'خبرة ساحلية', value: '20 عام' }
        ],
        gallery: [
          '/images/water-features.webp',
          '/images/water-features-jeddah.webp',
          '/images/landscape-design-build.webp',
          '/images/natural-grass.webp'
        ]
      },
      'al-faisaliyyah': {
        heroImage: '/images/neighborhoods/al-faisaliyyah-hero.webp',
        featuresImage: '/images/neighborhoods/al-faisaliyyah-features.webp',
        features: ['فلل ومنازل عصرية', 'تصاميم حديثة', 'تقنيات متقدمة', 'حي جديد'],
        expertise: ['تصاميم حديثة وعصرية', 'أنظمة ري ذكية', 'إضاءة LED', 'تقنيات مستدامة'],
        whyUs: ['تقنيات حديثة', 'تصاميم عصرية', 'كفاءة في الطاقة', 'ضمان تقني'],
        localInsights: 'نصمم حدائق عصرية تتماشى مع الطابع الحديث للفلل والمنازل في الفيصلية.',
        stats: [
          { label: 'فلل عصرية', value: '190+' },
          { label: 'أنظمة ذكية', value: '120+' },
          { label: 'إضاءة LED', value: '100%' },
          { label: 'استدامة', value: '98%' }
        ],
        gallery: [
          '/images/edging-ideas-that-will-edge-out-boredom.webp',
          '/images/artificial-grass-range.webp',
          '/images/landscape-design-build-1.webp',
          '/images/green-wall.webp'
        ]
      },
      'al-marwah': {
        heroImage: '/images/neighborhoods/al-marwah-hero.webp',
        featuresImage: '/images/neighborhoods/al-marwah-features.webp',
        features: ['حي سكني هادئ', 'عائلات مستقرة', 'بيئة آمنة', 'مجتمع متماسك'],
        expertise: ['حدائق عائلية هادئة', 'مساحات للأطفال', 'نباتات آمنة', 'تصاميم مريحة'],
        whyUs: ['خبرة مع العائلات', 'تصاميم هادئة', 'أمان عالي', 'خدمة شخصية'],
        localInsights: 'نصمم حدائق عائلية هادئة ومريحة تناسب الحياة المستقرة في حي المروة.',
        stats: [
          { label: 'حدائق عائلية', value: '170+' },
          { label: 'عائلات مستقرة', value: '130+' },
          { label: 'أمان عالي', value: '100%' },
          { label: 'رضا العائلات', value: '99%' }
        ],
        gallery: [
          '/images/a-water-feature-transforms-a-family-backyard-layout.webp',
          '/images/landscape-design-build.webp',
          '/images/shade-planting-scheme-garden-plan-under-shade-tree-tree-base-landscape-yard-and-curb-appeal.webp',
          '/images/pergola-design.webp'
        ]
      },
      'al-safa': {
        heroImage: '/images/neighborhoods/al-safa-hero.webp',
        featuresImage: '/images/neighborhoods/al-safa-features.webp',
        features: ['فلل ومنازل حديثة', 'تصاميم معمارية راقية', 'مساحات واسعة للحدائق', 'بيئة مميزة وأنيقة'],
        expertise: ['تنسيق الفلل الحديثة', 'تصاميم حدائق عصرية', 'أنظمة ري متطورة', 'إضاءة ليلية مميزة'],
        whyUs: ['خبرة في الفلل الحديثة', 'تصاميم مبتكرة', 'جودة عالية', 'خدمة متميزة'],
        localInsights: 'نفهم التوجه العصري لسكان الصفا ونقدم تصاميم حدائق حديثة تتماشى مع طابع المنطقة الراقي.',
        stats: [
          { label: 'فلل حديثة', value: '120+' },
          { label: 'تصاميم عصرية', value: '90+' },
          { label: 'رضا العملاء', value: '98%' },
          { label: 'مشاريع مميزة', value: '70+' }
        ],
        gallery: [
          '/images/garden-maintenance.webp',
          '/images/green-wall-and-landscape.webp',
          '/images/landscape-design-build.webp',
          '/images/landscape-design-build-1.webp'
        ]
      },
      'al-nahdah': {
        heroImage: '/images/neighborhoods/al-nahdah-hero.webp',
        featuresImage: '/images/neighborhoods/al-nahdah-features.webp',
        features: ['مجتمعات سكنية عصرية', 'مساحات خضراء متطورة', 'بيئة حضرية متقدمة', 'مرافق حديثة متكاملة'],
        expertise: ['تنسيق المجتمعات السكنية', 'مساحات خضراء كبيرة', 'أنظمة ري ذكية', 'صيانة متخصصة'],
        whyUs: ['خبرة في المشاريع الكبيرة', 'تقنيات متطورة', 'فرق عمل متخصصة', 'ضمان شامل'],
        localInsights: 'نصمم مساحات خضراء متطورة تناسب الطابع العصري والحضري لمنطقة النهضة.',
        stats: [
          { label: 'مشاريع كبيرة', value: '85+' },
          { label: 'مساحات خضراء', value: '200+' },
          { label: 'أنظمة ذكية', value: '50+' },
          { label: 'رضا العملاء', value: '97%' }
        ],
        gallery: [
          '/images/landscape-design-build-1.webp',
          '/images/landscape-design-build.webp',
          '/images/green-wall-and-landscape.webp',
          '/images/green-wall-design.webp'
        ]
      },
      'al-wurud': {
        heroImage: '/images/neighborhoods/al-wurud-hero.webp',
        featuresImage: '/images/neighborhoods/al-wurud-features.webp',
        features: ['حدائق الورود الشهيرة', 'مناظر طبيعية خلابة', 'بيئة نباتية غنية', 'أجواء رومانسية مميزة'],
        expertise: ['زراعة الورود النادرة', 'تصميم حدائق الورود', 'نباتات زينة متخصصة', 'عناية بالنباتات الحساسة'],
        whyUs: ['خبرة في الورود', 'تشكيلة نباتات نادرة', 'تصاميم رومانسية', 'عناية فائقة'],
        localInsights: 'نختص في إنشاء حدائق الورود الجميلة التي تناسب سمعة منطقة الورود كأجمل أحياء جدة.',
        stats: [
          { label: 'حدائق ورود', value: '110+' },
          { label: 'أنواع ورود', value: '40+' },
          { label: 'تصاميم رومانسية', value: '80+' },
          { label: 'عملاء راضين', value: '99%' }
        ],
        gallery: [
          '/images/green-wall-design.webp',
          '/images/garden-maintenance.webp',
          '/images/landscape-design-build.webp',
          '/images/green-wall-and-landscape.webp'
        ]
      },
      'al-andalus': {
        heroImage: '/images/neighborhoods/al-andalus-hero.webp',
        featuresImage: '/images/neighborhoods/al-andalus-features.webp',
        features: ['تصاميم أندلسية تراثية', 'حدائق كلاسيكية فاخرة', 'عمارة إسلامية أصيلة', 'أجواء تراثية ساحرة'],
        expertise: ['الحدائق الأندلسية', 'التصاميم التراثية', 'النباتات الكلاسيكية', 'النوافير والممرات'],
        whyUs: ['خبرة في التراث', 'تصاميم أصيلة', 'مواد تراثية', 'حرفية عالية'],
        localInsights: 'نحافظ على الطابع الأندلسي الأصيل ونصمم حدائق تراثية تتماشى مع عمارة المنطقة التاريخية.',
        stats: [
          { label: 'حدائق تراثية', value: '95+' },
          { label: 'تصاميم أندلسية', value: '65+' },
          { label: 'مشاريع كلاسيكية', value: '75+' },
          { label: 'حفظ التراث', value: '100%' }
        ],
        gallery: [
          '/images/green-wall-variations.webp',
          '/images/outdoor-wall-fountains-that-add-luxury-to-your-landscaping.webp',
          '/images/landscape-design-build.webp',
          '/images/green-wall-and-landscape.webp'
        ]
      },
      'al-aziziyyah': {
        heroImage: '/images/neighborhoods/al-aziziyyah-hero.webp',
        featuresImage: '/images/neighborhoods/al-aziziyyah-features.webp',
        features: ['موقع مركزي مميز', 'كثافة تجارية عالية', 'حركة نشطة ومتنوعة', 'خدمات متكاملة'],
        expertise: ['تنسيق تجاري وسكني', 'حلول سريعة وعملية', 'صيانة مكثفة', 'تصاميم متعددة الأغراض'],
        whyUs: ['خبرة في المناطق المركزية', 'حلول عملية', 'استجابة فورية', 'أسعار منافسة'],
        localInsights: 'نقدم حلول تنسيق عملية وسريعة تناسب طبيعة المنطقة المركزية النشطة في العزيزية.',
        stats: [
          { label: 'مشاريع تجارية', value: '140+' },
          { label: 'مشاريع سكنية', value: '180+' },
          { label: 'حلول سريعة', value: '95%' },
          { label: 'رضا العملاء', value: '96%' }
        ],
        gallery: [
          '/images/green-wall.webp',
          '/images/garden-maintenance-jeddah.webp',
          '/images/landscape-design-build-1.webp',
          '/images/landscape-design-build.webp'
        ]
      },
      'al-salam': {
        heroImage: '/images/neighborhoods/al-salam-hero.webp',
        featuresImage: '/images/neighborhoods/al-salam-features.webp',
        features: ['بيئة آمنة ومأمونة', 'حدائق عائلية مثالية', 'مجتمع مترابط ومتماسك', 'أمان وسكينة تامة'],
        expertise: ['حدائق آمنة للأطفال', 'مساحات عائلية مريحة', 'نباتات غير ضارة', 'تصاميم هادئة ومطمئنة'],
        whyUs: ['تركيز على الأمان', 'خبرة عائلية', 'نباتات آمنة', 'تصاميم مطمئنة'],
        localInsights: 'نصمم حدائق آمنة تماماً تناسب العائلات وتوفر بيئة مطمئنة لجميع أفراد الأسرة في حي السلام.',
        stats: [
          { label: 'حدائق آمنة', value: '160+' },
          { label: 'عائلات راضية', value: '190+' },
          { label: 'مساحات أطفال', value: '120+' },
          { label: 'أمان عالي', value: '100%' }
        ],
        gallery: [
          '/images/garden-maintenance.webp',
          '/images/green-wall-perfect.webp',
          '/images/green-wall-design.webp',
          '/images/garden-maintenance-jeddah.webp'
        ]
      },
      'al-balad': {
        heroImage: '/images/neighborhoods/al-balad-hero.webp',
        featuresImage: '/images/neighborhoods/al-balad-features.webp',
        features: ['منطقة تاريخية عريقة', 'تراث معماري أصيل', 'طابع تقليدي مميز', 'قيمة تاريخية عالية'],
        expertise: ['الحدائق التراثية', 'النباتات التقليدية', 'التصاميم التاريخية', 'الحفاظ على التراث'],
        whyUs: ['خبرة في المواقع التراثية', 'احترام التاريخ', 'تصاميم أصيلة', 'حرفية تقليدية'],
        localInsights: 'نحافظ على التراث العريق لمنطقة البلد التاريخية ونصمم حدائق تراثية تحترم الطابع التقليدي للمنطقة.',
        stats: [
          { label: 'مواقع تراثية', value: '45+' },
          { label: 'حدائق تقليدية', value: '60+' },
          { label: 'حفظ التراث', value: '100%' },
          { label: 'تصاميم أصيلة', value: '55+' }
        ],
        gallery: [
          '/images/green-wall-1.webp',
          '/images/landscape-design-build.webp',
          '/images/garden-maintenance.webp',
          '/images/green-wall-and-landscape.webp'
        ]
      },
      'corniche': {
        heroImage: '/images/neighborhoods/corniche-hero.webp',
        featuresImage: '/images/neighborhoods/corniche-features.webp',
        features: ['واجهة بحرية خلابة', 'مناظر البحر الأحمر', 'رياح بحرية منعشة', 'أجواء ساحلية مميزة'],
        expertise: ['نباتات مقاومة للملوحة', 'تصاميم ساحلية', 'حماية من الرياح البحرية', 'أنظمة صرف متطورة'],
        whyUs: ['خبرة ساحلية متخصصة', 'نباتات بحرية مقاومة', 'تصاميم مناسبة للبيئة', 'حماية من العوامل البحرية'],
        localInsights: 'نصمم حدائق ساحلية متخصصة تتحمل البيئة البحرية وتستفيد من المناظر الخلابة للبحر الأحمر.',
        stats: [
          { label: 'مشاريع ساحلية', value: '75+' },
          { label: 'نباتات بحرية', value: '35+' },
          { label: 'حماية من الملوحة', value: '100%' },
          { label: 'مناظر بحرية', value: '85+' }
        ],
        gallery: [
          '/images/green-wall-variations.webp',
          '/images/landscape-design-build-1.webp',
          '/images/water-features.webp',
          '/images/green-wall-and-landscape.webp'
        ]
      }
    }
    
    return contentMap[slug] || {
      heroImage: '/images/neighborhoods/al-rawdah-hero.webp',
      featuresImage: '/images/neighborhoods/al-rawdah-features.webp',
      features: ['حي هادئ ومريح', 'منازل عائلية', 'بيئة سكنية آمنة', 'مساحات خضراء جميلة'],
      expertise: ['حدائق منزلية هادئة', 'مناطق استرخاء', 'نباتات مهدئة', 'تصاميم بسيطة وأنيقة'],
      whyUs: ['تصاميم هادئة', 'نباتات محلية', 'صيانة مستمرة', 'أسعار عادلة'],
      localInsights: 'نصمم حدائق هادئة ومريحة تتناسب مع طبيعة المنطقة السكنية الهادئة.',
      stats: [
        { label: 'مشاريع مكتملة', value: '100+' },
        { label: 'عملاء راضين', value: '95%' },
        { label: 'فرق العمل', value: '3' },
        { label: 'سنوات خبرة', value: '10+' }
      ],
      gallery: [
        '/images/landscape-design-build.webp',
        '/images/green-wall-and-landscape.webp',
        '/images/beautiful-pergola-ideas-to-finally-upgrade-your-yard-grow-your-yard.webp',
        '/images/turf-grass.webp'
      ]
    }
  }

  const content = getNeighborhoodContent(neighborhood.slug)

  // JSON-LD Schema
  const localBusinessSchema = generateLocalBusinessSchema({
    name: `تنسيق حدائق ${neighborhood.arabicName}`,
    description: `خدمات تنسيق الحدائق والمناظر الطبيعية في ${neighborhood.arabicName}، جدة`,
    address: `${neighborhood.arabicName}، جدة، المملكة العربية السعودية`,
    telephone: '+966-12-234-5678',
    url: routes.jeddah.neighborhood(neighborhood.slug),
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'الرئيسية', url: routes.home },
    { name: 'جدة', url: routes.jeddah.index },
    { name: neighborhood.arabicName, url: routes.jeddah.neighborhood(neighborhood.slug) },
  ])

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessSchema, breadcrumbSchema]),
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <Image
          src={content.heroImage}
          alt={`تنسيق حدائق في ${neighborhood.arabicName}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        
        <div className="relative z-10 container h-full flex items-center">
          <div className="max-w-2xl text-white">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-6 opacity-90">
              <Link href={routes.home} className="hover:text-primary-light transition-colors">
                الرئيسية
              </Link>
              <span>/</span>
              <Link href={routes.jeddah.index} className="hover:text-primary-light transition-colors">
                جدة
              </Link>
              <span>/</span>
              <span>{neighborhood.arabicName}</span>
            </nav>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-shadow-lg">
              تنسيق حدائق في
              <span className="block text-primary-light">{neighborhood.arabicName}</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 leading-relaxed opacity-95">
              {neighborhood.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`#services`}
                className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg"
              >
                اختر خدمتك
              </Link>
              <a
                href="tel:+966123456789"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all border-2 border-white/30"
              >
                اتصل الآن
              </a>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-8 left-8 right-8 z-10">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-gray-600 text-sm">مشروع مكتمل</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-gray-600 text-sm">خدمة عملاء</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-gray-600 text-sm">سنة خبرة</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-gray-600 text-sm">رضا العملاء</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="arabic-title mb-6">
              خدماتنا في {neighborhood.arabicName}
            </h2>
            <p className="arabic-body text-gray-600 max-w-3xl mx-auto text-lg">
              نقدم مجموعة شاملة من خدمات تنسيق الحدائق والمناظر الطبيعية المخصصة لاحتياجات سكان {neighborhood.arabicName}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={routes.jeddah.neighborhoodService(neighborhood.slug, service.slug)}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={service.gallery[0]?.image || '/images/default-service.webp'}
                    alt={service.arabicTitle}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">{service.arabicTitle}</h3>
                    <p className="text-white/90 text-sm">ابتداء من {service.pricingTiers[0]?.price} ريال</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.shortDescription.substring(0, 100)}...
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">اطلب الخدمة</span>
                    <ArrowLeft className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local Stats */}
      {content.stats && content.stats.length > 0 && (
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              أرقامنا في {neighborhood.arabicName}
            </h2>
            <p className="text-xl opacity-95 max-w-2xl mx-auto">
              إنجازات مميزة وثقة عملائنا في {neighborhood.arabicName}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content.stats?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl lg:text-6xl font-bold mb-2 text-secondary">
                  {stat.value}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Neighborhood Features */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="arabic-title mb-8">
                مميزات خدمتنا في {neighborhood.arabicName}
              </h2>
              
              <div className="space-y-6">
                {content.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="arabic-body text-gray-700 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">خبرتنا المحلية</h3>
                <p className="arabic-body text-gray-600 leading-relaxed">
                  {content.localInsights}
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src={content.featuresImage}
                alt={`مميزات ${neighborhood.arabicName}`}
                width={600}
                height={450}
                className="rounded-2xl shadow-xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Award className="w-8 h-8 text-primary" />
                  تخصصاتنا في {neighborhood.arabicName}
                </h3>
                <div className="space-y-4">
                  {content.expertise.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="arabic-body text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Star className="w-8 h-8 text-yellow-500" />
                  لماذا نحن الأفضل؟
                </h3>
                <div className="space-y-4">
                  {content.whyUs.map((reason, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <span className="arabic-body text-gray-700">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              جاهزون لخدمتك في {neighborhood.arabicName}
            </h2>
            <p className="text-xl lg:text-2xl opacity-95 max-w-3xl mx-auto">
              تواصل معنا الآن للحصول على استشارة مجانية وعرض أسعار خاص لسكان {neighborhood.arabicName}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">اتصل بنا</h3>
              <p className="opacity-90">+966 12 234 5678</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">ساعات العمل</h3>
              <p className="opacity-90">24/7 خدمة عملاء</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">نخدم في</h3>
              <p className="opacity-90">جميع أنحاء {neighborhood.arabicName}</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+966123456789"
                className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                اتصل الآن
              </a>
              <Link
                href="/contact"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all border-2 border-white/30"
              >
                احصل على عرض سعر
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {content.gallery && content.gallery.length > 0 && (
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="arabic-title mb-6">
              معرض أعمالنا في {neighborhood.arabicName}
            </h2>
            <p className="arabic-body text-gray-600 max-w-3xl mx-auto text-lg">
              تصفح مجموعة من أفضل مشاريعنا المنجزة في {neighborhood.arabicName}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.gallery?.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-video relative">
                  <Image
                    src={image}
                    alt={`مشروع في ${neighborhood.arabicName} - ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-semibold">مشروع {index + 1}</p>
                    <p className="text-white/80 text-sm">{neighborhood.arabicName}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={routes.portfolio}
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg"
            >
              عرض جميع الأعمال
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      )}

      {/* Quick Links */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="arabic-title text-center mb-12">
            روابط سريعة
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href={routes.home}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
            >
              <Home className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">الصفحة الرئيسية</h3>
              <p className="text-gray-600 text-sm">العودة للرئيسية</p>
            </Link>

            <Link
              href={routes.services.index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
            >
              <Leaf className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">جميع الخدمات</h3>
              <p className="text-gray-600 text-sm">تصفح كامل الخدمات</p>
            </Link>

            <Link
              href={routes.portfolio}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
            >
              <Award className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">أعمالنا</h3>
              <p className="text-gray-600 text-sm">مشاهدة المشاريع</p>
            </Link>

            <Link
              href={routes.contact}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
            >
              <Phone className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">تواصل معنا</h3>
              <p className="text-gray-600 text-sm">احصل على استشارة</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
