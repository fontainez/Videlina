import { supabase } from './supabase';
import { Book, Category, Quote, User, ReadingProgress, Bookmark, ApiResponse, PaginatedResponse, SearchFilters } from './types';

// Books API
export const booksApi = {
  // Get all books with pagination
  async getBooks(page: number = 1, pageSize: number = 12): Promise<PaginatedResponse<Book>> {
    try {
      const from = (page - 1) * pageSize;
      const to = from + pageSize - 1;

      const { data, count, error } = await supabase
        .from('books')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(from, to);

      if (error) throw error;

      return {
        data: data || [],
        total: count || 0,
        page,
        page_size: pageSize,
        total_pages: Math.ceil((count || 0) / pageSize),
      };
    } catch (error) {
      console.error('Error fetching books:', error);
      return {
        data: [],
        total: 0,
        page,
        page_size: pageSize,
        total_pages: 0,
      };
    }
  },

  // Get featured books
  async getFeaturedBooks(limit: number = 6): Promise<ApiResponse<Book[]>> {
    try {
      const { data, error } = await supabase
        .from('books')
        .select('*')
        .eq('is_featured', true)
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) throw error;

      return {
        data: data || [],
        error: null,
        success: true,
      };
    } catch (error) {
      console.error('Error fetching featured books:', error);
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Failed to fetch featured books',
        success: false,
      };
    }
  },

  // Get book by ID
  async getBookById(id: string): Promise<ApiResponse<Book>> {
    try {
      const { data, error } = await supabase
        .from('books')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      return {
        data,
        error: null,
        success: true,
      };
    } catch (error) {
      console.error('Error fetching book:', error);
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Failed to fetch book',
        success: false,
      };
    }
  },

  // Search books
  async searchBooks(filters: SearchFilters): Promise<PaginatedResponse<Book>> {
    try {
      let query = supabase
        .from('books')
        .select('*', { count: 'exact' });

      // Apply search query
      if (filters.query) {
        query = query.or(`title.ilike.%${filters.query}%,description.ilike.%${filters.query}%,author.ilike.%${filters.query}%`);
      }

      // Apply category filter
      if (filters.category && filters.category !== 'All') {
        query = query.eq('category', filters.category);
      }

      // Apply year range filter
      if (filters.year_from) {
        query = query.gte('year', filters.year_from);
      }
      if (filters.year_to) {
        query = query.lte('year', filters.year_to);
      }

      // Apply language filter
      if (filters.language) {
        query = query.eq('language', filters.language);
      }

      // Apply sorting
      query = query.order(filters.sort_by, { ascending: filters.sort_order === 'asc' });

      const { data, count, error } = await query;

      if (error) throw error;

      return {
        data: data || [],
        total: count || 0,
        page: 1,
        page_size: data?.length || 0,
        total_pages: 1,
      };
    } catch (error) {
      console.error('Error searching books:', error);
      return {
        data: [],
        total: 0,
        page: 1,
        page_size: 0,
        total_pages: 0,
      };
    }
  },

  // Get books by category
  async getBooksByCategory(category: string, limit: number = 12): Promise<ApiResponse<Book[]>> {
    try {
      const { data, error } = await supabase
        .from('books')
        .select('*')
        .eq('category', category)
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) throw error;

      return {
        data: data || [],
        error: null,
        success: true,
      };
    } catch (error) {
      console.error('Error fetching books by category:', error);
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Failed to fetch books by category',
        success: false,
      };
    }
  },
};

// Categories API
export const categoriesApi = {
  // Get all categories
  async getCategories(): Promise<ApiResponse<Category[]>> {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');

      if (error) throw error;

      return {
        data: data || [],
        error: null,
        success: true,
      };
    } catch (error) {
      console.error('Error fetching categories:', error);
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Failed to fetch categories',
        success: false,
      };
    }
  },
};

// Quotes API
export const quotesApi = {
  // Get daily quote
  async getDailyQuote(): Promise<ApiResponse<Quote>> {
    try {
      const { data, error } = await supabase
        .from('quotes')
        .select('*')
        .eq('is_daily', true)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error) throw error;

      return {
        data,
        error: null,
        success: true,
      };
    } catch (error) {
      console.error('Error fetching daily quote:', error);
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Failed to fetch daily quote',
        success: false,
      };
    }
  },

  // Get random quote
  async getRandomQuote(): Promise<ApiResponse<Quote>> {
    try {
      const { data, error } = await supabase
        .from('quotes')
        .select('*')
        .order('random()')
        .limit(1)
        .single();

      if (error) throw error;

      return {
        data,
        error: null,
        success: true,
      };
    } catch (error) {
      console.error('Error fetching random quote:', error);
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Failed to fetch random quote',
        success: false,
      };
    }
  },

  // Get quotes by book
  async getQuotesByBook(bookId: string): Promise<ApiResponse<Quote[]>> {
    try {
      const { data, error } = await supabase
        .from('quotes')
        .select('*')
        .eq('book_id', bookId)
        .order('created_at', { ascending: false });

      if (error) throw error;

      return {
        data: data || [],
        error: null,
        success: true,
      };
    } catch (error) {
      console.error('Error fetching quotes by book:', error);
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Failed to fetch quotes by book',
        success: false,
      };
    }
  },
};

// User progress API (requires authentication)
export const progressApi = {
  // Get reading progress for a user
  async getReadingProgress(userId: string, bookId?: string): Promise<ApiResponse<ReadingProgress[]>> {
    try {
      let query = supabase
        .from('reading_progress')
        .select('*')
        .eq('user_id', userId);

      if (bookId) {
        query = query.eq('book_id', bookId);
      }

      const { data, error } = await query;

      if (error) throw error;

      return {
        data: data || [],
        error: null,
        success: true,
      };
    } catch (error) {
      console.error('Error fetching reading progress:', error);
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Failed to fetch reading progress',
        success: false,
      };
    }
  },

  // Update reading progress
  async updateReadingProgress(
    userId: string,
    bookId: string,
    currentPage: number,
    totalPages: number
  ): Promise<ApiResponse<ReadingProgress>> {
    try {
      const percentageComplete = Math.round((currentPage / totalPages) * 100);

      const { data, error } = await supabase
        .from('reading_progress')
        .upsert({
          user_id: userId,
          book_id: bookId,
          current_page: currentPage,
          total_pages: totalPages,
          percentage_complete: percentageComplete,
          last_read_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (error) throw error;

      return {
        data,
        error: null,
        success: true,
      };
    } catch (error) {
      console.error('Error updating reading progress:', error);
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Failed to update reading progress',
        success: false,
      };
    }
  },
};

// Bookmarks API (requires authentication)
export const bookmarksApi = {
  // Get bookmarks for a user
  async getBookmarks(userId: string, bookId?: string): Promise<ApiResponse<Bookmark[]>> {
    try {
      let query = supabase
        .from('bookmarks')
        .select('*')
        .eq('user_id', userId);

      if (bookId) {
        query = query.eq('book_id', bookId);
      }

      const { data, error } = await query.order('created_at', { ascending: false });

      if (error) throw error;

      return {
        data: data || [],
        error: null,
        success: true,
      };
    } catch (error) {
      console.error('Error fetching bookmarks:', error);
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Failed to fetch bookmarks',
        success: false,
      };
    }
  },

  // Create bookmark
  async createBookmark(
    userId: string,
    bookId: string,
    pageNumber: number,
    note?: string
  ): Promise<ApiResponse<Bookmark>> {
    try {
      const { data, error } = await supabase
        .from('bookmarks')
        .insert({
          user_id: userId,
          book_id: bookId,
          page_number: pageNumber,
          note: note || null,
        })
        .select()
        .single();

      if (error) throw error;

      return {
        data,
        error: null,
        success: true,
      };
    } catch (error) {
      console.error('Error creating bookmark:', error);
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Failed to create bookmark',
        success: false,
      };
    }
  },

  // Delete bookmark
  async deleteBookmark(bookmarkId: string): Promise<ApiResponse<boolean>> {
    try {
      const { error } = await supabase
        .from('bookmarks')
        .delete()
        .eq('id', bookmarkId);

      if (error) throw error;

      return {
        data: true,
        error: null,
        success: true,
      };
    } catch (error) {
      console.error('Error deleting bookmark:', error);
      return {
        data: false,
        error: error instanceof Error ? error.message : 'Failed to delete bookmark',
        success: false,
      };
    }
  },
};

// Contact form API
export const contactApi = {
  // Submit contact form
  async submitContactForm(formData: {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<ApiResponse<boolean>> {
    try {
      // In a real implementation, you might:
      // 1. Send email via your backend
      // 2. Store in database
      // 3. Integrate with a service like SendGrid

      // For now, we'll simulate success
      console.log('Contact form submitted:', formData);

      return {
        data: true,
        error: null,
        success: true,
      };
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return {
        data: false,
        error: error instanceof Error ? error.message : 'Failed to submit contact form',
        success: false,
      };
    }
  },
};
