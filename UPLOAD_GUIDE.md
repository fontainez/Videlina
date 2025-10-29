# Videlina - Book Upload Guide

## Overview

The Videlina app now includes a complete book upload system that allows users to contribute spiritual books to the digital library. This guide explains how the upload system works and how to use it effectively.

## 🚀 Upload Flow

### 1. **Access Upload Page**
- Navigate to the "Upload" page from the main navigation
- Users can access: `/upload`

### 2. **Fill Book Information**
- **Title** (Required): The name of the book
- **Author**: Defaults to "Omraam Mikhaël Aïvanhov"
- **Description**: Brief overview of the book's content
- **Category** (Required): Spiritual category from dropdown
- **Language**: Book language (default: English)
- **Publication Year**: Year the book was published
- **Number of Pages**: Total pages in the book

### 3. **Upload Files**
- **Cover Image** (Optional): Book cover (max 5MB, image files only)
- **PDF File** (Required): The actual book content (max 50MB, PDF only)

### 4. **Submit & Process**
- Form validation ensures all required fields are filled
- Files are uploaded to Supabase Storage
- Book metadata is saved to the database
- Success confirmation with book preview

## 📁 File Storage

### Storage Buckets
- **`book-covers`**: Stores book cover images
- **`pdfs`**: Stores PDF book files

### File Naming
- Covers: `cover_{timestamp}.{extension}`
- PDFs: `book_{timestamp}.pdf`

### Security
- Public read access for all files
- Authenticated users can upload files
- File type and size validation

## 🔧 Technical Implementation

### API Endpoint
```typescript
booksApi.uploadBook(
  bookData: BookData,
  coverFile?: File,
  pdfFile?: File
): Promise<ApiResponse<Book>>
```

### Book Data Structure
```typescript
interface BookData {
  title: string;
  author: string;
  description: string;
  category: string;
  year: number;
  pages: number;
  language: string;
  cover_url: string | null;
  pdf_url: string | null;
  is_featured: boolean;
}
```

### Upload Process
1. **File Validation**: Check file types and sizes
2. **Storage Upload**: Upload files to Supabase Storage
3. **URL Generation**: Get public URLs for uploaded files
4. **Database Insert**: Create book record with file URLs
5. **Success Response**: Return created book data

## 🎯 User Experience Features

### Real-time Validation
- Required field indicators
- File type validation
- Size limit warnings
- Form completeness check

### Visual Feedback
- Loading states during upload
- Success/error messages
- File preview after selection
- Progress indicators

### Error Handling
- Network failure recovery
- File upload retry logic
- User-friendly error messages
- Form state preservation

## 🔒 Security & Validation

### File Restrictions
- **Cover Images**: PNG, JPG, WEBP (≤5MB)
- **PDF Files**: PDF only (≤50MB)
- **File Type Detection**: MIME type validation

### Data Validation
- Required fields enforcement
- Year range validation (1900-current year)
- Category selection from predefined list
- Input sanitization

### Access Control
- Public read access to uploaded content
- Authenticated upload requirements
- Row Level Security (RLS) policies
- Storage bucket permissions

## 📊 Database Schema

### Books Table
```sql
CREATE TABLE books (
    id UUID PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) DEFAULT 'Omraam Mikhaël Aïvanhov',
    description TEXT,
    category VARCHAR(100) NOT NULL,
    cover_url TEXT,
    pdf_url TEXT,
    year INTEGER NOT NULL,
    pages INTEGER,
    language VARCHAR(50) DEFAULT 'English',
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
```

### Categories Table
```sql
CREATE TABLE categories (
    id UUID PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    color VARCHAR(7) DEFAULT '#6A0DAD',
    created_at TIMESTAMP DEFAULT NOW()
);
```

## 🛠️ Setup Requirements

### Prerequisites
1. Supabase project with storage enabled
2. Storage buckets created: `book-covers` and `pdfs`
3. Database schema applied (see `supabase-schema.sql`)
4. Storage policies configured

### Environment Variables
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

## 🎨 Component Architecture

### BookUpload Component
- **Location**: `components/BookUpload.tsx`
- **Props**: `onUploadSuccess`, `onCancel`
- **State**: Form data, file states, loading, errors
- **Features**: Form validation, file handling, API integration

### Upload Page
- **Location**: `app/upload/page.tsx`
- **Layout**: Two-column design with guidelines
- **Features**: Success messaging, recent upload preview

## 🔄 Integration Points

### With Library
- New books appear in library after upload
- Search and filter work with uploaded books
- Category filtering includes new categories

### With Home Page
- Featured books can include uploaded content
- Daily quotes can reference uploaded books

### Future Enhancements
- User authentication for upload tracking
- Book approval workflow
- Upload analytics
- Bulk upload capabilities

## 📈 Performance Considerations

### File Upload Optimization
- Chunked upload for large files
- Progress tracking
- Background processing
- Error recovery

### Database Optimization
- Indexed search fields
- Efficient pagination
- Cached category data
- Optimized file URL generation

## 🚨 Troubleshooting

### Common Issues
1. **Upload Fails**
   - Check file size limits
   - Verify internet connection
   - Ensure Supabase storage is configured

2. **File Not Appearing**
   - Check storage bucket permissions
   - Verify file upload success
   - Confirm database insertion

3. **Form Validation Errors**
   - Ensure all required fields are filled
   - Check file type compatibility
   - Verify year and page number formats

### Debugging Tips
- Check browser console for error messages
- Verify Supabase storage bucket configuration
- Test API endpoints directly
- Monitor network requests

## 🌟 Best Practices

### For Uploaders
- Use descriptive, accurate book titles
- Provide meaningful descriptions
- Choose appropriate categories
- Ensure file quality and readability

### For Developers
- Implement proper error handling
- Provide clear user feedback
- Optimize file compression
- Maintain security standards

---

*"Sharing spiritual knowledge is an act of love that illuminates the path for others."*  
*- Inspired by the teachings of Omraam Mikhaël Aïvanhov*

---
**Last Updated**: System Implementation Complete  
**Status**: ✅ Production Ready