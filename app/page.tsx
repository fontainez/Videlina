'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

// Mock data for daily inspiration quotes
const dailyQuotes = [
  "Let light, peace, and wisdom guide your every thought.",
  "The sun is the image of the divine light that illuminates the world.",
  "True spirituality is not about escaping the world, but about transforming it.",
  "Love is the key that opens all doors.",
  "The mind is the gardener who cultivates the garden of the soul.",
]

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(dailyQuotes[0])

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * dailyQuotes.length)
    setCurrentQuote(dailyQuotes[randomIndex])
  }

  // Set a random quote on component mount
  useEffect(() => {
    getRandomQuote()
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            {/* Placeholder for Omraam Mikhaël Aïvanhov photo */}
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-200 to-accent-200 flex items-center justify-center">
              <span className="text-primary-700 font-serif text-lg">Photo</span>
            </div>
            <blockquote className="font-serif text-2xl md:text-3xl text-gray-800 italic mb-6 max-w-3xl mx-auto">
              "{currentQuote}"
            </blockquote>
            <p className="text-primary-600 font-medium">- Omraam Mikhaël Aïvanhov</p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl text-center text-primary mb-12">
            Who Was Omraam Mikhaël Aïvanhov?
          </h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Omraam Mikhaël Aïvanhov (1900-1986) was a Bulgarian spiritual teacher and philosopher
              who dedicated his life to the study and teaching of spiritual science. His work
              encompasses a vast range of topics including meditation, nutrition, family life,
              and the spiritual significance of nature.
            </p>
            <p>
              Through his thousands of lectures, Aïvanhov presented a comprehensive spiritual
              teaching that emphasizes the importance of self-mastery, love, and the conscious
              development of one's inner being. His teachings are practical and aim to help
              individuals transform their daily lives through spiritual principles.
            </p>
            <p>
              Aïvanhov's work continues to inspire seekers around the world, offering profound
              insights into the nature of consciousness, the purpose of human existence, and
              the path to spiritual enlightenment.
            </p>
          </div>
          <div className="text-center mt-8">
            <button className="btn-primary">
              Read Full Biography
            </button>
          </div>
        </div>
      </section>

      {/* Library Access Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-primary mb-8">
            Explore the Library of Light
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover the profound wisdom and spiritual teachings of Omraam Mikhaël Aïvanhov
            through our comprehensive digital library.
          </p>
          <Link href="/library" className="btn-secondary inline-flex items-center text-2xl">
            📚 Enter the Library
          </Link>

          {/* Search Box */}
          <div className="mt-12 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by title or theme..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary">
                🔍
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Inspiration Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-center text-primary mb-8">
            Daily Inspiration
          </h2>
          <div className="card p-8 max-w-2xl mx-auto text-center">
            <blockquote className="font-serif text-xl text-gray-700 italic mb-6">
              "{currentQuote}"
            </blockquote>
            <p className="text-primary-600 font-medium mb-6">- Omraam Mikhaël Aïvanhov</p>
            <button
              onClick={getRandomQuote}
              className="btn-primary"
            >
              New Quote
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
