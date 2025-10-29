"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { booksApi, categoriesApi } from "../../lib/api";
import { Book, Category, SearchFilters } from "../../lib/types";

// Categories for filtering
const defaultCategories = [
  "All",
  "Spiritual Science",
  "Relationships",
  "Health & Nutrition",
  "Mind & Consciousness",
  "Symbolism",
  "Kabbalah",
];

export default function Library() {
  const [books, setBooks] = useState<Book[]>([]);
  const [categories, setCategories] = useState<string[]>(defaultCategories);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Load books and categories
  useEffect(() => {
    loadBooks();
    loadCategories();
  }, []);

  const loadBooks = async (page: number = 1, append: boolean = false) => {
    try {
      setLoading(true);
      const response = await booksApi.getBooks(page, 12);

      if (response.data) {
        if (append) {
          setBooks((prev) => [...prev, ...response.data]);
        } else {
          setBooks(response.data);
        }
        setHasMore(page < response.total_pages);
        setCurrentPage(page);
      }
    } catch (error) {
      console.error("Error loading books:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadCategories = async () => {
    try {
      const response = await categoriesApi.getCategories();
      if (response.data && response.data.length > 0) {
        const categoryNames = ["All", ...response.data.map((cat) => cat.name)];
        setCategories(categoryNames);
      }
    } catch (error) {
      console.error("Error loading categories:", error);
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const filters: SearchFilters = {
        query: searchQuery,
        category: selectedCategory === "All" ? "" : selectedCategory,
        year_from: null,
        year_to: null,
        language: "",
        sort_by: "title",
        sort_order: "asc",
      };

      const response = await booksApi.searchBooks(filters);
      if (response.data) {
        setBooks(response.data);
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error searching books:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    loadBooks(currentPage + 1, true);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // Reset to first page when category changes
    setCurrentPage(1);
    // You might want to trigger a search here or wait for user to click search
  };

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
            Explore the complete works of Omraam Mikhaël Aïvanhov. Each book
            contains profound wisdom and practical guidance for spiritual
            development.
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
                  onClick={handleSearch}
                >
                  🔍
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="w-full md:w-auto">
              <select
                className="w-full md:w-48 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
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
          {loading && books.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <p className="mt-4 text-gray-600">Loading books...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {books.map((book) => (
                  <div
                    key={book.id}
                    className="card p-6 hover:transform hover:-translate-y-2 transition-all duration-300"
                  >
                    {/* Book Cover */}
                    <div className="mb-4">
                      <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center">
                        {book.cover_url ? (
                          <img
                            src={book.cover_url}
                            alt={book.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <div className="text-center">
                            <div className="w-16 h-20 bg-white rounded shadow-md mx-auto mb-2 flex items-center justify-center">
                              <span className="text-primary font-serif font-bold text-sm">
                                V
                              </span>
                            </div>
                            <span className="text-primary-600 text-sm font-medium">
                              Book Cover
                            </span>
                          </div>
                        )}
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
                        <button
                          className="btn-primary flex-1 text-sm py-2"
                          onClick={() => {
                            if (book.pdf_url) {
                              window.open(book.pdf_url, "_blank");
                            } else {
                              alert("PDF not available for this book");
                            }
                          }}
                        >
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

              {books.length === 0 && !loading && (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">No books found.</p>
                  <p className="text-gray-500 mt-2">
                    Try adjusting your search criteria.
                  </p>
                </div>
              )}
            </>
          )}

          {/* Load More Button */}
          {hasMore && !loading && (
            <div className="text-center mt-12">
              <button className="btn-secondary" onClick={handleLoadMore}>
                Load More Books
              </button>
            </div>
          )}

          {loading && books.length > 0 && (
            <div className="text-center mt-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
