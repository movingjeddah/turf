'use server'

interface ContactFormData {
  name: string
  phone: string
  email?: string
  service?: string
  message: string
}

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const data: ContactFormData = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string || undefined,
      service: formData.get('service') as string || undefined,
      message: formData.get('message') as string,
    }

    // Validate required fields
    if (!data.name || !data.phone || !data.message) {
      return {
        success: false,
        error: 'يرجى ملء جميع الحقول المطلوبة',
      }
    }

    // Validate phone number (Saudi format)
    const phoneRegex = /^(05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/
    if (!phoneRegex.test(data.phone.replace(/\D/g, ''))) {
      return {
        success: false,
        error: 'يرجى إدخال رقم جوال صحيح',
      }
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send WhatsApp notification
    // 4. Add to CRM

    // For now, we'll simulate success
    console.log('Contact form submission:', data)

    // In production, you would send an email here using a service like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Resend

    return {
      success: true,
      data,
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return {
      success: false,
      error: 'حدث خطأ في إرسال النموذج',
    }
  }
} 