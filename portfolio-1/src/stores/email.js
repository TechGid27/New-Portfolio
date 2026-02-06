
import { defineStore } from 'pinia'
import emailjs from '@emailjs/browser'

export const useEmailStore = defineStore('email', {
  state: () => ({
    name: '',
    email: '',
    message: ''
  }),

 actions: {
  async sendEmail() {
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

      alert('Email Sent!')
      this.name = ''
      this.email = ''
      this.message = ''
    } catch (error) {
      console.log(error)
      alert('Failed to send email. Check console.')
    }
  }
}

})
