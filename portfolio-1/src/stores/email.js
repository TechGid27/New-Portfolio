import { defineStore } from 'pinia'
import emailjs from '@emailjs/browser'
import { useToastStore } from './toast.js'

export const useEmailStore = defineStore('email', {
  state: () => ({
    name: '',
    email: '',
    message: '',
    loading: false,
  }),

  actions: {
    async sendEmail() {
      if (this.loading) return
      this.loading = true

      const toast = useToastStore()

      try {
        await emailjs.send(
          'service_rdsoi9n',
          'template_wi4dn68',
          {
            name: this.name,
            email: this.email,
            message: this.message
          },
          '35ZJ0Mn_nDkE2AVoE'
        )

        toast.show('Email sent successfully!', 'success')

        this.name = ''
        this.email = ''
        this.message = ''
      } catch (error) {
        console.log(error)
        toast.show('Failed to send email. Check console.', 'error')
      } finally {
        this.loading = false
      }
    }
  }
})
