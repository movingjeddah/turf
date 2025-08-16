'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { submitContactForm } from '@/app/actions/contact'

export default function ContactForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [honeypot, setHoneypot] = useState('')

  async function handleSubmit(formData: FormData) {
    // Check honeypot field
    if (honeypot) {
      return
    }

    setIsSubmitting(true)

    try {
      const result = await submitContactForm(formData)
      
      if (result.success) {
        router.push('/thank-you')
      } else {
        alert(result.error || 'حدث خطأ، يرجى المحاولة مرة أخرى')
      }
    } catch (error) {
      alert('حدث خطأ، يرجى المحاولة مرة أخرى')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            الاسم الكامل *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            placeholder="أدخل اسمك الكامل"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            رقم الجوال *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            dir="ltr"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            placeholder="05xxxxxxxx"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          البريد الإلكتروني
        </label>
        <input
          type="email"
          id="email"
          name="email"
          dir="ltr"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          placeholder="example@email.com"
        />
      </div>
      
      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-2">
          الخدمة المطلوبة
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
        >
          <option value="">اختر الخدمة</option>
          <option value="landscaping">تنسيق حدائق</option>
          <option value="artificial-grass">عشب صناعي</option>
          <option value="green-wall">عشب جداري</option>
          <option value="natural-turf">ثيل طبيعي</option>
          <option value="pergolas-shades">مظلات وبرجولات</option>
          <option value="water-features">شلالات ونوافير</option>
          <option value="irrigation">شبكات ري</option>
          <option value="maintenance">صيانة حدائق</option>
          <option value="other">أخرى</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          الرسالة *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          placeholder="اكتب رسالتك هنا..."
        />
      </div>
      
      {/* Honeypot field - hidden from users */}
      <div className="hidden">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      
      <div className="flex items-center gap-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="px-8"
        >
          {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
        </Button>
        
        <p className="text-sm text-gray-500">
          * حقول مطلوبة
        </p>
      </div>
      
      <p className="text-xs text-gray-500">
        بإرسال هذا النموذج، فإنك توافق على معالجة بياناتك وفقاً لسياسة الخصوصية الخاصة بنا.
      </p>
    </form>
  )
} 