'use client'

import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Contact Header */}
      <section className="bg-primary-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl text-primary mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We'd love to hear from you. Reach out with questions, suggestions, or to get involved with the Videlina project.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl text-primary mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="volunteer">Volunteer Opportunity</option>
                    <option value="content">Content Suggestion</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl text-primary mb-6">
                Get in Touch
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-xl text-primary mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Videlina is maintained by volunteers dedicated to preserving and sharing
                    the teachings of Omraam Mikhaël Aïvanhov. We welcome your questions,
                    suggestions, and offers to help with this important work.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-xl text-primary mb-4">Ways to Connect</h3>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary">📧</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <p className="text-gray-600">contact@videlina.org</p>
                      <p className="text-sm text-gray-500">We typically respond within 2-3 days</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent">🌐</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Volunteer Opportunities</h4>
                      <p className="text-gray-600">Join our team of dedicated volunteers</p>
                      <p className="text-sm text-gray-500">Help with translation, editing, or technical development</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary">💡</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Content Suggestions</h4>
                      <p className="text-gray-600">Help us improve the library</p>
                      <p className="text-sm text-gray-500">Suggest books, corrections, or new features</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-serif text-lg text-primary mb-3">Before Contacting Us</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Check our <Link href="/library" className="text-primary hover:underline">Library</Link> for available books</li>
                    <li>• Read our <Link href="/about" className="text-primary hover:underline">About page</Link> for project information</li>
                    <li>• Browse the <Link href="/" className="text-primary hover:underline">Home page</Link> for general information</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
