"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BookUpload from "../../components/BookUpload";
import { Book } from "../../lib/types";

export default function UploadPage() {
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [recentUpload, setRecentUpload] = useState<Book | null>(null);

  const handleUploadSuccess = (book: Book) => {
    setUploadSuccess(true);
    setRecentUpload(book);

    // Auto-hide success message after 5 seconds
    setTimeout(() => {
      setUploadSuccess(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Upload Header */}
      <section className="bg-primary-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl text-primary mb-6">
            Share Your Light
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Contribute to our growing library of spiritual wisdom by uploading books
            that inspire and enlighten. Help spread the teachings of Omraam Mikhaël Aïvanhov.
          </p>
        </div>
      </section>

      {/* Success Message */}
      {uploadSuccess && recentUpload && (
        <div className="bg-green-50 border-b border-green-200 py-4">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <p className="text-green-800 font-medium">
                    Book uploaded successfully!
                  </p>
                  <p className="text-green-700 text-sm">
                    "{recentUpload.title}" is now available in the library.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setUploadSuccess(false)}
                className="text-green-600 hover:text-green-800"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload Section */}
      <section className="py-12 px-4 bg-gray-50 flex-1">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upload Form */}
            <div className="lg:col-span-2">
              <BookUpload onUploadSuccess={handleUploadSuccess} />
            </div>

            {/* Guidelines */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-serif text-xl text-primary mb-4">
                  📚 Upload Guidelines
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Ensure you have permission to share the content
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    PDF files should be under 50MB
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Cover images should be under 5MB
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Provide accurate book information
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Choose appropriate categories
                  </li>
                </ul>
              </div>

              <div className="bg-accent-50 border border-accent-200 rounded-xl p-6">
                <h3 className="font-serif text-xl text-accent-700 mb-3">
                  💡 Spiritual Contribution
                </h3>
                <p className="text-sm text-accent-800 leading-relaxed">
                  By sharing spiritual books, you contribute to the collective
                  awakening and help others on their path to enlightenment.
                  Each book you upload becomes a beacon of light for seekers worldwide.
                </p>
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="font-serif text-xl text-primary mb-3">
                  🌟 Why Share?
                </h3>
                <ul className="space-y-2 text-sm text-primary-700">
                  <li>• Preserve precious spiritual teachings</li>
                  <li>• Make wisdom accessible to all</li>
                  <li>• Support the global spiritual community</li>
                  <li>• Continue the Master's work of illumination</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recent Uploads Preview */}
          {recentUpload && (
            <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-serif text-2xl text-primary mb-6 text-center">
                Your Recent Contribution
              </h3>
              <div className="max-w-md mx-auto">
                <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg p-6 text-center">
                  <div className="w-16 h-20 bg-white rounded shadow-md mx-auto mb-4 flex items-center justify-center">
                    <span className="text-primary font-serif font-bold text-lg">V</span>
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                    {recentUpload.title}
                  </h4>
                  <p className="text-primary-600 text-sm mb-2">
                    by {recentUpload.author}
                  </p>
                  <span className="inline-block bg-primary-200 text-primary-800 text-xs px-2 py-1 rounded">
                    {recentUpload.category}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
