'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center">
                <span className="text-white font-serif font-bold text-sm">V</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">VIDELINA</h3>
            </div>
            <p className="text-primary-200 text-sm leading-relaxed">
              A digital library dedicated to the works of Omraam Mikhaël Aïvanhov,
              bringing light and wisdom to spiritual seekers worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/library" className="text-primary-200 hover:text-white transition-colors">
                  Library
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-200 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Info */}
          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg font-semibold mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/legal" className="text-primary-200 hover:text-white transition-colors">
                  Legal Notice
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-primary-200 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-primary-200 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-700 mt-8 pt-8 text-center">
          <p className="text-primary-300 text-sm">
            Created with light and love by students of wisdom.
          </p>
          <p className="text-primary-400 text-xs mt-2">
            © {new Date().getFullYear()} VIDELINA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
