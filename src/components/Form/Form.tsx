import { Container } from './styles'
import { toast, ToastContainer } from 'react-toastify'
import { useState } from 'react'
import validator from 'validator'

export function Form() {
  const [validEmail, setValidEmail] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function verifyEmail(email: string) {
    setEmail(email)
    setValidEmail(validator.isEmail(email))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const mailtoLink = `mailto:rohitvijayanofficial@gmail.com?subject=New Contact Form Submission&body=From: ${email}%0D%0A%0D%0A${message}`
    window.location.href = mailtoLink

    toast.success('Opening your email app...', {
      position: toast.POSITION.BOTTOM_LEFT,
      pauseOnFocusLoss: false,
      closeOnClick: true,
      hideProgressBar: false,
      toastId: 'emailSent',
    })
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your Email"
          type="email"
          name="email"
          onChange={(e) => verifyEmail(e.target.value)}
          required
        />
        <textarea
          required
          placeholder="Send a message to get started."
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          disabled={!validEmail || !message}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}
