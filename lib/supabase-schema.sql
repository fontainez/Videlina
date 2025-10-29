-- Videlina - Supabase Database Schema
-- This schema creates the necessary tables for the spiritual reading app

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Categories table
CREATE TABLE categories (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    color VARCHAR(7) DEFAULT '#6A0DAD',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Books table
CREATE TABLE books (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL DEFAULT 'Omraam Mikhaël Aïvanhov',
    description TEXT,
    category VARCHAR(100) NOT NULL,
    cover_url TEXT,
    pdf_url TEXT,
    year INTEGER NOT NULL,
    pages INTEGER,
    language VARCHAR(50) DEFAULT 'English',
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

    -- Add foreign key constraint if categories table exists
    -- FOREIGN KEY (category) REFERENCES categories(name) ON DELETE SET NULL
);

-- Quotes table
CREATE TABLE quotes (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    text TEXT NOT NULL,
    source VARCHAR(255) DEFAULT 'Omraam Mikhaël Aïvanhov',
    book_id UUID,
    is_daily BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

    FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE SET NULL
);

-- Users table (extends Supabase auth.users)
CREATE TABLE profiles (
    id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    full_name VARCHAR(255),
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Reading progress table
CREATE TABLE reading_progress (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID NOT NULL,
    book_id UUID NOT NULL,
    current_page INTEGER NOT NULL DEFAULT 0,
    total_pages INTEGER NOT NULL,
    percentage_complete INTEGER NOT NULL DEFAULT 0,
    last_read_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

    FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE,
    FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE,
    UNIQUE(user_id, book_id)
);

-- Bookmarks table
CREATE TABLE bookmarks (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID NOT NULL,
    book_id UUID NOT NULL,
    page_number INTEGER NOT NULL,
    note TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

    FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE,
    FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE
);

-- Contact submissions table
CREATE TABLE contact_submissions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default categories
INSERT INTO categories (name, description, color) VALUES
    ('Spiritual Science', 'Teachings on spiritual laws and principles', '#6A0DAD'),
    ('Relationships', 'Guidance on love, family, and human connections', '#C21807'),
    ('Health & Nutrition', 'Spiritual approach to health and nourishment', '#2E7D32'),
    ('Mind & Consciousness', 'Exploration of thought and awareness', '#1565C0'),
    ('Symbolism', 'Interpretation of spiritual symbols', '#FF6F00'),
    ('Kabbalah', 'Mystical teachings and Tree of Life', '#6A1B9A'),
    ('Meditation', 'Techniques for inner peace and connection', '#00838F'),
    ('Nature', 'Spiritual significance of natural world', '#388E3C');

-- Insert sample books
INSERT INTO books (title, author, description, category, year, pages, is_featured) VALUES
    (
        'The Second Birth',
        'Omraam Mikhaël Aïvanhov',
        'A profound exploration of spiritual rebirth and the transformation of human consciousness through divine light.',
        'Spiritual Science',
        1978,
        240,
        TRUE
    ),
    (
        'Love and Sexuality',
        'Omraam Mikhaël Aïvanhov',
        'Understanding the sacred nature of love and sexuality as expressions of divine energy in human relationships.',
        'Relationships',
        1982,
        180,
        TRUE
    ),
    (
        'The Yoga of Nutrition',
        'Omraam Mikhaël Aïvanhov',
        'Discover how nutrition can become a spiritual practice that nourishes both body and soul.',
        'Health & Nutrition',
        1975,
        220,
        TRUE
    ),
    (
        'The Powers of Thought',
        'Omraam Mikhaël Aïvanhov',
        'Learn to harness the creative power of thought to transform your reality and manifest your highest potential.',
        'Mind & Consciousness',
        1980,
        200,
        FALSE
    ),
    (
        'The Fruits of the Tree of Life',
        'Omraam Mikhaël Aïvanhov',
        'The symbolism of the Tree of Life and its application to spiritual development and self-realization.',
        'Symbolism',
        1972,
        260,
        FALSE
    ),
    (
        'The Splendour of Tiphareth',
        'Omraam Mikhaël Aïvanhov',
        'Exploring the central sephirah of the Tree of Life and its significance in spiritual evolution.',
        'Kabbalah',
        1984,
        190,
        FALSE
    );

-- Insert sample quotes
INSERT INTO quotes (text, source, is_daily) VALUES
    (
        'Let light, peace, and wisdom guide your every thought.',
        'Omraam Mikhaël Aïvanhov',
        TRUE
    ),
    (
        'The sun is the image of the divine light that illuminates the world.',
        'Omraam Mikhaël Aïvanhov',
        FALSE
    ),
    (
        'True spirituality is not about escaping the world, but about transforming it.',
        'Omraam Mikhaël Aïvanhov',
        FALSE
    ),
    (
        'Love is the key that opens all doors.',
        'Omraam Mikhaël Aïvanhov',
        FALSE
    ),
    (
        'The mind is the gardener who cultivates the garden of the soul.',
        'Omraam Mikhaël Aïvanhov',
        FALSE
    );

-- Create indexes for better performance
CREATE INDEX idx_books_category ON books(category);
CREATE INDEX idx_books_featured ON books(is_featured);
CREATE INDEX idx_books_created ON books(created_at);
CREATE INDEX idx_quotes_daily ON quotes(is_daily);
CREATE INDEX idx_reading_progress_user ON reading_progress(user_id);
CREATE INDEX idx_bookmarks_user ON bookmarks(user_id);

-- Storage setup for file uploads
INSERT INTO storage.buckets (id, name, public) VALUES
  ('book-covers', 'book-covers', true),
  ('pdfs', 'pdfs', true);

-- Enable Row Level Security (RLS)
ALTER TABLE books ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE reading_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Books: Public read access, authenticated users can manage
CREATE POLICY "Books are viewable by everyone" ON books
    FOR SELECT USING (true);

CREATE POLICY "Authenticated users can manage books" ON books
    FOR ALL USING (auth.role() = 'authenticated');

-- Categories: Public read access
CREATE POLICY "Categories are viewable by everyone" ON categories
    FOR SELECT USING (true);

-- Quotes: Public read access
CREATE POLICY "Quotes are viewable by everyone" ON quotes
    FOR SELECT USING (true);

-- Profiles: Users can only see their own profile
CREATE POLICY "Users can view own profile" ON profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
    FOR UPDATE USING (auth.uid() = id);

-- Reading progress: Users can only access their own progress
CREATE POLICY "Users can manage own reading progress" ON reading_progress
    FOR ALL USING (auth.uid() = user_id);

-- Bookmarks: Users can only access their own bookmarks
CREATE POLICY "Users can manage own bookmarks" ON bookmarks
    FOR ALL USING (auth.uid() = user_id);

-- Contact submissions: Authenticated users can create, admins can view all
CREATE POLICY "Anyone can submit contact forms" ON contact_submissions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view all contact submissions" ON contact_submissions
    FOR SELECT USING (auth.role() = 'authenticated');

-- Storage policies for book covers
CREATE POLICY "Book covers are publicly accessible" ON storage.objects
    FOR SELECT USING (bucket_id = 'book-covers');

CREATE POLICY "Authenticated users can upload book covers" ON storage.objects
    FOR INSERT WITH CHECK (bucket_id = 'book-covers' AND auth.role() = 'authenticated');

-- Storage policies for PDFs
CREATE POLICY "PDFs are publicly accessible" ON storage.objects
    FOR SELECT USING (bucket_id = 'pdfs');

CREATE POLICY "Authenticated users can upload PDFs" ON storage.objects
    FOR INSERT WITH CHECK (bucket_id = 'pdfs' AND auth.role() = 'authenticated');

-- Create updated_at triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_books_updated_at BEFORE UPDATE ON books
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_reading_progress_updated_at BEFORE UPDATE ON reading_progress
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create function to handle user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name)
    VALUES (new.id, new.email, new.raw_user_meta_data->>'full_name');
    RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user creation
CREATE OR REPLACE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
