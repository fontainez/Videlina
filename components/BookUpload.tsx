"use client";

import { useState } from "react";
import { booksApi, categoriesApi } from "../lib/api";
import { Book, Category } from "../lib/types";

interface BookUploadProps {
  onUploadSuccess?: (book: Book) => void;
  onCancel?: () => void;
}

export default function BookUpload({
  onUploadSuccess,
  onCancel,
}: BookUploadProps) {
  const [formData, setFormData] = useState({
    title: "",
    author: "Omraam Mikhaël Aïvanhov",
    description: "",
    category: "",
    year: new Date().getFullYear(),
    pages: 0,
    language: "English",
  });
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Load categories on component mount
  useState(() => {
    const loadCategories = async () => {
      const response = await categoriesApi.getCategories();
      if (response.success && response.data && response.data.length > 0) {
        setCategories(response.data);
        setFormData((prev) => ({ ...prev, category: response.data![0].name }));
      }
    };
    loadCategories();
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "year" || name === "pages" ? parseInt(value) || 0 : value,
    }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "cover" | "pdf",
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      if (type === "cover") {
        // Validate image file
        if (!file.type.startsWith("image/")) {
          setError("Please select a valid image file for the cover");
          return;
        }
        if (file.size > 5 * 1024 * 1024) {
          // 5MB limit
          setError("Cover image must be smaller than 5MB");
          return;
        }
        setCoverFile(file);
      } else {
        // Validate PDF file
        if (file.type !== "application/pdf") {
          setError("Please select a valid PDF file");
          return;
        }
        if (file.size > 50 * 1024 * 1024) {
          // 50MB limit
          setError("PDF file must be smaller than 50MB");
          return;
        }
        setPdfFile(file);
      }
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Basic validation
      if (!formData.title.trim()) {
        throw new Error("Book title is required");
      }
      if (!formData.category) {
        throw new Error("Category is required");
      }
      if (!pdfFile) {
        throw new Error("PDF file is required");
      }

      const response = await booksApi.uploadBook(
        {
          title: formData.title.trim(),
          author: formData.author.trim(),
          description: formData.description.trim(),
          category: formData.category,
          year: formData.year,
          pages: formData.pages,
          language: formData.language,
          cover_url: null,
          pdf_url: null,
          is_featured: false,
        },
        coverFile || undefined,
        pdfFile || undefined,
      );

      if (response.success && response.data) {
        setSuccess(true);
        onUploadSuccess?.(response.data);

        // Reset form after successful upload
        setTimeout(() => {
          setFormData({
            title: "",
            author: "Omraam Mikhaël Aïvanhov",
            description: "",
            category: categories[0]?.name || "",
            year: new Date().getFullYear(),
            pages: 0,
            language: "English",
          });
          setCoverFile(null);
          setPdfFile(null);
          setSuccess(false);
        }, 2000);
      } else {
        throw new Error(response.error || "Failed to upload book");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred",
      );
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = formData.title.trim() && formData.category && pdfFile;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
      <h2 className="font-serif text-2xl text-primary mb-6 text-center">
        Upload New Book
      </h2>

      {success && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm">✓</span>
            </div>
            <p className="text-green-800 font-medium">
              Book uploaded successfully!
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm">!</span>
            </div>
            <p className="text-red-800 font-medium">{error}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Book Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Book Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Enter book title"
            required
          />
        </div>

        {/* Author */}
        <div>
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Enter author name"
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
            placeholder="Enter book description"
          />
        </div>

        {/* Category and Language */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Category *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="language"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Language
            </label>
            <select
              id="language"
              name="language"
              value={formData.language}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Spanish">Spanish</option>
              <option value="German">German</option>
              <option value="Italian">Italian</option>
              <option value="Bulgarian">Bulgarian</option>
            </select>
          </div>
        </div>

        {/* Year and Pages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="year"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Publication Year
            </label>
            <input
              type="number"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              min="1900"
              max={new Date().getFullYear()}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="pages"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Number of Pages
            </label>
            <input
              type="number"
              id="pages"
              name="pages"
              value={formData.pages}
              onChange={handleInputChange}
              min="1"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* File Uploads */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Cover Image Upload */}
          <div>
            <label
              htmlFor="cover"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Cover Image
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-primary transition-colors">
              <input
                type="file"
                id="cover"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "cover")}
                className="hidden"
              />
              <label htmlFor="cover" className="cursor-pointer">
                <div className="text-gray-500">
                  {coverFile ? (
                    <div className="text-primary font-medium">
                      ✓ {coverFile.name}
                    </div>
                  ) : (
                    <>
                      <div className="text-2xl mb-2">📷</div>
                      <div>Click to upload cover</div>
                      <div className="text-xs text-gray-400 mt-1">
                        PNG, JPG, WEBP (max 5MB)
                      </div>
                    </>
                  )}
                </div>
              </label>
            </div>
          </div>

          {/* PDF Upload */}
          <div>
            <label
              htmlFor="pdf"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              PDF File *
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-primary transition-colors">
              <input
                type="file"
                id="pdf"
                accept=".pdf"
                onChange={(e) => handleFileChange(e, "pdf")}
                className="hidden"
                required
              />
              <label htmlFor="pdf" className="cursor-pointer">
                <div className="text-gray-500">
                  {pdfFile ? (
                    <div className="text-primary font-medium">
                      ✓ {pdfFile.name}
                    </div>
                  ) : (
                    <>
                      <div className="text-2xl mb-2">📄</div>
                      <div>Click to upload PDF</div>
                      <div className="text-xs text-gray-400 mt-1">
                        PDF (max 50MB)
                      </div>
                    </>
                  )}
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 pt-4">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              disabled={loading}
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            disabled={!isFormValid || loading}
            className="flex-1 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Uploading...
              </div>
            ) : (
              "Upload Book"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
