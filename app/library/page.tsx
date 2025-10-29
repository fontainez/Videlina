'use client'

import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// Mock data for books - replace with real data and PDF links
const mockBooks = [
  {
    id: 1,
    title: "The Second Birth",
    author: "Omraam Mikhaël Aïvanhov",
    description: "A profound exploration of spiritual rebirth and the transformation of human consciousness through divine light.",
    category: "Spiritual Science",
    cover: "/placeholder-book-1.jpg",
    pdfUrl: "/pdfs/second-birth.pdf",
    year: "1978"
  },
  {
    id: 2,
    title: "Love and Sexuality",
    author: "Omraam Mikhaël Aïvanhov",
    description: "Understanding the sacred nature of love and sexuality as expressions of divine energy in human relationships.",
    category: "Relationships",
    cover: "/placeholder-book-2.jpg",
    pdfUrl: "/pdfs/love-sexuality.pdf",
    year: "1982"
  },
  {
    id: 3,
    title: "The Yoga of Nutrition",
    author: "Omraam Mikhaël Aïvanhov",
    description: "Discover how nutrition can become a spiritual practice that nourishes both body and soul.",
    category: "Health & Nutrition",
    cover: "/placeholder-book-3.jpg",
    pdfUrl: "/pdfs/yoga-nutrition.pdf",
    year: "1975"
  },
  {
    id: 4,
    title: "The Powers of Thought",
    author: "Omraam Mikhaël Aïvanhov",
    description: "Learn to harness the creative power of thought to transform your reality and manifest your highest potential.",
    category: "Mind & Consciousness",
    cover: "/placeholder-book-4.jpg",
    pdfUrl: "/pdfs/powers-thought.pdf",
    year: "1980"
  },
  {
    id: 5,
    title: "The Fruits of the Tree of Life",
    author: "Omraam Mikhaël Aïvanhov",
    description: "The symbolism of the Tree of Life and its application to spiritual development and self-realization.",
    category: "Symbolism",
    cover: "/placeholder-book-5.jpg",
    pdfUrl: "/pdfs/fruits-tree-life.pdf",
    year: "1972"
  },
  {
    id: 6,
    title: "The Splendour of Tiphareth",
    author: "Omraam Mikhaël Aïvanhov",
    description: "Exploring the central sephirah of the Tree of Life and its significance in spiritual evolution.",
    category: "Kabbalah",
    cover: "/placeholder-book-6.jpg",
    pdfUrl: "/pdfs/splendour-tiphareth.pdf",
    year: "1984"
  }
]

// Categories for filtering
const categories = ["All", "Spiritual Science", "Relationships", "Health & Nutrition", "Mind & Consciousness", "Symbolism", "Kabbalah"]

export default function Library() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Library Header */}
      <section className="bg-primary-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-5xl text-primary text-center mb-6">
            Library of Light
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Explore the complete works of Omraam Mikhaël Aïvanhov. Each book contains profound wisdom
            and practical guidance for spiritual development.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Box */}
            <div className="w-full md:w-auto flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search books by title, author, or keyword..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary">
                  🔍
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="w-full md:w-auto">
              <select className="w-full md:w-48 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-12 px-4 bg-gray-50 flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockBooks.map((book) => (
              <div key={book.id} className="card p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
                {/* Book Cover */}
                <div className="mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-20 bg-white rounded shadow-md mx-auto mb-2 flex items-center justify-center">
                        <span className="text-primary font-serif font-bold text-sm">V</span>
                      </div>
                      <span className="text-primary-600 text-sm font-medium">Book Cover</span>
                    </div>
                  </div>
                </div>

                {/* Book Info */}
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif text-xl font-semibold text-gray-900 flex-1 pr-2">
                      {book.title}
                    </h3>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {book.year}
                    </span>
                  </div>

                  <p className="text-primary-600 font-medium text-sm">
                    {book.author}
                  </p>

                  <span className="inline-block bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded">
                    {book.category}
                  </span>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {book.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-2">
                    <button className="btn-primary flex-1 text-sm py-2">
                      Read Book
                    </button>
                    <button className="border border-primary text-primary hover:bg-primary-50 font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Load More Books
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
