// Database types for Videlina app

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  category: string;
  cover_url: string | null;
  pdf_url: string | null;
  year: number;
  pages: number;
  language: string;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  description: string | null;
  color: string;
  created_at: string;
}

export interface Quote {
  id: string;
  text: string;
  source: string;
  book_id: string | null;
  is_daily: boolean;
  created_at: string;
}

export interface User {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface ReadingProgress {
  id: string;
  user_id: string;
  book_id: string;
  current_page: number;
  total_pages: number;
  percentage_complete: number;
  last_read_at: string;
  created_at: string;
  updated_at: string;
}

export interface Bookmark {
  id: string;
  user_id: string;
  book_id: string;
  page_number: number;
  note: string | null;
  created_at: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}

// Form types
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export interface SearchFilters {
  query: string;
  category: string;
  year_from: number | null;
  year_to: number | null;
  language: string;
  sort_by: 'title' | 'year' | 'created_at';
  sort_order: 'asc' | 'desc';
}
