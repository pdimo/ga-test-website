
import Head from 'next/head'
import { useState } from 'react'

export default function Contact() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prevData) => ({ ...prevData, [id]: value }))
  }

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1)
  }

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send formData to a backend here
    console.log('Form Submitted:', formData)
    setSubmitted(true)
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Your Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email Address</label>
              <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700">Phone Number (Optional)</label>
              <input type="tel" id="phone" className="w-full px-4 py-2 border rounded-lg" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="flex justify-end">
              <button type="button" onClick={nextStep} className="bg-green-700 text-white font-bold py-3 px-6 rounded-full hover:bg-green-800">
                Next
              </button>
            </div>
          </>
        )
      case 2:
        return (
          <>
            <div className="mb-4">
              <label htmlFor="company" className="block text-gray-700">Company Name (Optional)</label>
              <input type="text" id="company" className="w-full px-4 py-2 border rounded-lg" value={formData.company} onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label htmlFor="service" className="block text-gray-700">Interested Service</label>
              <select id="service" className="w-full px-4 py-2 border rounded-lg" value={formData.service} onChange={handleChange} required>
                <option value="">Select a service</option>
                <option value="Landscape Design">Commercial Landscape Design</option>
                <option value="Irrigation Systems">Automated Irrigation Systems</option>
                <option value="Hardscaping">Hardscaping and Outdoor Structures</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="budget" className="block text-gray-700">Project Budget</label>
              <select id="budget" className="w-full px-4 py-2 border rounded-lg" value={formData.budget} onChange={handleChange} required>
                <option value="">Select a budget range</option>
                <option value="$100 - $500">$100 - $500</option>
                <option value="$500 - $1000">$500 - $1000</option>
                <option value="$1000 - $5000">$1000 - $5000</option>
                <option value="$5000+">$5000+</option>
              </select>
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={prevStep} className="bg-gray-500 text-white font-bold py-3 px-6 rounded-full hover:bg-gray-600">
                Previous
              </button>
              <button type="button" onClick={nextStep} className="bg-green-700 text-white font-bold py-3 px-6 rounded-full hover:bg-green-800">
                Next
              </button>
            </div>
          </>
        )
      case 3:
        return (
          <>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">Your Message</label>
              <textarea id="message" rows="5" className="w-full px-4 py-2 border rounded-lg" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={prevStep} className="bg-gray-500 text-white font-bold py-3 px-6 rounded-full hover:bg-gray-600">
                Previous
              </button>
              <button type="submit" className="bg-green-700 text-white font-bold py-3 px-6 rounded-full hover:bg-green-800">
                Submit Message
              </button>
            </div>
          </>
        )
      default:
        return null
    }
  }

  return (
    <div>
      <Head>
        <title>GreenScape Solutions - Contact Us</title>
      </Head>

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        {submitted ? (
          <div className="text-center text-2xl text-green-700">Thank you for your message! We will get back to you shortly.</div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 border rounded-lg shadow-lg bg-white">
            <div className="text-center mb-6">
              <span className="text-lg font-semibold">Step {step} of 3</span>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${(step / 3) * 100}%` }}></div>
              </div>
            </div>
            {renderStep()}
          </form>
        )}

        <div className="text-center mt-12">
          <p className="text-lg">For immediate assistance, please call us at:</p>
          <a href="tel:1300123456" className="text-2xl font-bold text-green-700 hover:underline">1300 123 456</a>
        </div>
      </div>
    </div>
  )
}
