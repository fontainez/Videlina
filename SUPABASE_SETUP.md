# Videlina - Supabase Backend Setup Guide

## Overview

This guide will help you set up the Supabase backend for your Videlina spiritual reading app. Supabase provides a complete backend solution including database, authentication, and file storage.

## 🚀 Quick Setup

### 1. Environment Variables

The Supabase configuration is already set up in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xiuufqijulhlfmzcivzv.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpdXVmcWlqdWxobGZtemNpdnp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2OTk5MDIsImV4cCI6MjA3NzI3NTkwMn0.bHphYsk1ZNLFYarZ2BJVLhnV4NSL2uF8hDUadgwu7z0
```

### 2. Database Schema Setup

Run the SQL schema from `lib/supabase-schema.sql` in your Supabase dashboard:

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy and paste the entire content of `lib/supabase-schema.sql`
4. Run the query to create all tables and sample data

### 3. Install Dependencies

```bash
cd Videlina
npm install
```

## 📊 Database Structure

### Tables Created:

- **books** - Spiritual books and their metadata
- **categories** - Book categories with colors
- **quotes** - Daily inspirational quotes
- **profiles** - User profiles (extends Supabase auth)
- **reading_progress** - Track user reading progress
- **bookmarks** - User bookmarks and notes
- **contact_submissions** - Contact form submissions

### Sample Data Included:

- 6 sample books across different categories
- 5 inspirational quotes
- 8 default categories with colors

## 🔧 API Integration

### Available API Functions:

```typescript
// Books
booksApi.getBooks(page, pageSize)
booksApi.getFeaturedBooks(limit)
booksApi.getBookById(id)
booksApi.searchBooks(filters)
booksApi.getBooksByCategory(category, limit)

// Categories
categoriesApi.getCategories()

// Quotes
quotesApi.getDailyQuote()
quotesApi.getRandomQuote()
quotesApi.getQuotesByBook(bookId)

// User Progress (requires auth)
progressApi.getReadingProgress(userId, bookId?)
progressApi.updateReadingProgress(userId, bookId, currentPage, totalPages)

// Bookmarks (requires auth)
bookmarksApi.getBookmarks(userId, bookId?)
bookmarksApi.createBookmark(userId, bookId, pageNumber, note?)
bookmarksApi.deleteBookmark(bookmarkId)

// Contact
contactApi.submitContactForm(formData)
```

## 🔐 Authentication Setup

### 1. Enable Authentication in Supabase

1. Go to **Authentication** → **Settings** in your Supabase dashboard
2. Configure your preferred auth providers (Email, Google, etc.)
3. Set up site URL and redirect URLs

### 2. Update Environment Variables

Add these to your `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## 📁 File Storage Setup

### 1. Create Storage Buckets

In Supabase dashboard, go to **Storage** and create these buckets:

- `book-covers` - For book cover images
- `pdfs` - For book PDF files

### 2. Configure Storage Policies

Run these SQL policies in the SQL Editor:

```sql
-- Allow public read access to book covers
CREATE POLICY "Book covers are publicly accessible" ON storage.objects
FOR SELECT USING (bucket_id = 'book-covers');

-- Allow authenticated users to upload book covers
CREATE POLICY "Authenticated users can upload book covers" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'book-covers' AND auth.role() = 'authenticated');

-- Allow public read access to PDFs
CREATE POLICY "PDFs are publicly accessible" ON storage.objects
FOR SELECT USING (bucket_id = 'pdfs');

-- Allow authenticated users to upload PDFs
CREATE POLICY "Authenticated users can upload PDFs" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'pdfs' AND auth.role() = 'authenticated');
```

## 🎯 Features Implemented

### ✅ Currently Working:
- Book listing with pagination
- Search and filter functionality
- Category-based organization
- Daily inspirational quotes
- Responsive book grid
- Contact form handling

### 🔄 Ready for Implementation:
- User authentication
- Reading progress tracking
- Bookmarking system
- PDF viewer integration
- User profiles

## 🛠️ Development Notes

### Type Safety
All database types are defined in `lib/types.ts` for full TypeScript support.

### Error Handling
All API functions return standardized response objects with error handling.

### Performance
- Pagination for large book collections
- Efficient database queries with indexes
- Cached category data

## 🔍 Testing the Integration

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Visit the Library page:**
   - Navigate to `/library`
   - You should see books loaded from Supabase
   - Test search and filter functionality

3. **Check the Home page:**
   - Daily quotes should load from Supabase
   - Fallback quotes are available if Supabase is unavailable

## 🚨 Troubleshooting

### Common Issues:

1. **"Cannot fetch books" error**
   - Check Supabase URL and API key in environment variables
   - Verify database tables are created
   - Check network connectivity

2. **Authentication errors**
   - Verify Supabase project is properly configured
   - Check redirect URLs in auth settings
   - Ensure environment variables are set

3. **Storage upload failures**
   - Verify storage buckets exist
   - Check storage policies are configured
   - Ensure proper file permissions

### Debugging Tips:

- Check browser console for detailed error messages
- Use Supabase dashboard to monitor API requests
- Test API endpoints directly in Supabase SQL Editor

## 📈 Next Steps

1. **Add Real Content**
   - Upload actual book PDFs to Supabase Storage
   - Add book cover images
   - Populate with authentic spiritual content

2. **Enable Authentication**
   - Set up user registration and login
   - Implement reading progress tracking
   - Add bookmark functionality

3. **Advanced Features**
   - PDF viewer integration
   - Reading analytics
   - Social sharing
   - Multi-language support

## 🔗 Useful Links

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js with Supabase Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)

---

*"The true spiritual teaching is one that gives you methods to work on yourself, to transform yourself."*  
*- Omraam Mikhaël Aïvanhov*