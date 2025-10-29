'use client'

import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* About Header */}
      <section className="bg-primary-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl text-primary mb-6">
            About Videlina
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Videlina, meaning "Light" in Bulgarian, is a digital sanctuary dedicated to preserving
            and sharing the profound spiritual teachings of Omraam Mikhaël Aïvanhov.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl text-primary mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Videlina was created with the vision of making the complete works of
                  Omraam Mikhaël Aïvanhov accessible to spiritual seekers worldwide.
                  Our mission is to preserve these precious teachings and provide a
                  digital platform where wisdom can be freely shared and studied.
                </p>
                <p>
                  We believe that in this digital age, spiritual knowledge should be
                  readily available to all who seek it. Videlina serves as a bridge
                  between the timeless wisdom of the Master and modern seekers on
                  their spiritual journey.
                </p>
                <p>
                  Through this platform, we aim to continue the work of spreading
                  light, love, and wisdom to humanity, following in the footsteps
                  of the great spiritual traditions.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary font-serif text-2xl">💡</span>
                </div>
                <p className="font-serif text-primary-700 text-lg">
                  Spreading Light Through Wisdom
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl text-primary text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl">📚</span>
              </div>
              <h3 className="font-serif text-xl text-primary mb-3">
                Preservation
              </h3>
              <p className="text-gray-600">
                Faithfully preserving the original teachings and ensuring their
                authenticity for future generations.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-2xl">🌍</span>
              </div>
              <h3 className="font-serif text-xl text-primary mb-3">
                Accessibility
              </h3>
              <p className="text-gray-600">
                Making spiritual wisdom freely available to all seekers,
                regardless of location or background.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl">❤️</span>
              </div>
              <h3 className="font-serif text-xl text-primary mb-3">
                Service
              </h3>
              <p className="text-gray-600">
                Serving the spiritual community with love, dedication,
                and without commercial interest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-primary text-center mb-12">
            The Videlina Team
          </h2>
          <div className="text-center text-gray-700 leading-relaxed space-y-6">
            <p>
              Videlina is maintained by a dedicated group of students and practitioners
              who have been touched by the teachings of Omraam Mikhaël Aïvanhov.
              Our team includes spiritual seekers, developers, editors, and volunteers
              from around the world.
            </p>
            <p>
              We come from diverse backgrounds but share a common commitment to
              preserving and sharing these precious teachings. Each team member
              contributes their unique skills and talents to ensure that Videlina
              remains a valuable resource for the global spiritual community.
            </p>
            <p>
              Our work is driven by love for the Master's teachings and the desire
              to serve humanity by making spiritual wisdom more accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-6">
            Get Involved
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            Interested in contributing to Videlina or have questions about the project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
            <button className="border border-white text-white hover:bg-white hover:text-primary-900 font-medium py-3 px-6 rounded-lg transition-colors">
              Volunteer
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
