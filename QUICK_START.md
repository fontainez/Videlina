# VIDELINA - Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd Videlina
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Your Browser
Navigate to: [http://localhost:3000](http://localhost:3000)

## 📱 What You'll See

### Home Page Features:
- **Hero Section**: Photo placeholder with daily quote
- **Biography**: About Omraam Mikhaël Aïvanhov  
- **Library Access**: Large button to enter the library
- **Daily Inspiration**: Random quote generator
- **Responsive Design**: Works on desktop and mobile

### Library Page Features:
- **Book Grid**: 6 sample books with mock data
- **Search & Filter**: By title, author, or category
- **Book Cards**: Cover placeholders, descriptions, and action buttons

## 🎨 Customization Guide

### Replace Placeholder Content:

1. **Add Real Books** - Edit `app/library/page.tsx`:
   ```typescript
   const mockBooks = [
     {
       id: 1,
       title: "Your Book Title",
       author: "Omraam Mikhaël Aïvanhov", 
       description: "Book description...",
       category: "Spiritual Science",
       cover: "/real-cover.jpg", // Add to public folder
       pdfUrl: "/pdfs/real-book.pdf", // Add PDF to public/pdfs
       year: "1978"
     }
   ]
   ```

2. **Update Biography** - Edit biography section in `app/page.tsx`

3. **Add Real Quotes** - Update `dailyQuotes` array in `app/page.tsx`

4. **Add Real Images** - Place in `public/` folder and update references

## 🛠️ Available Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # Code linting
```

## 📁 Key Files to Customize

- `app/page.tsx` - Home page content
- `app/library/page.tsx` - Library books and layout  
- `components/Header.tsx` - Navigation
- `tailwind.config.js` - Colors and styling
- `app/globals.css` - Global styles and fonts

## 🎯 Next Steps

1. **Add Real PDFs**: Place in `public/pdfs/` folder
2. **Add Book Covers**: Place in `public/` folder  
3. **Update Content**: Replace all placeholder text
4. **Customize Colors**: Edit `tailwind.config.js`
5. **Add Features**: User accounts, search, bookmarks

## ❓ Need Help?

- Check the full documentation in `README.md`
- Review the project structure
- Test the responsive design on different devices

---

*"Let light, peace, and wisdom guide your every thought."*  
*- Omraam Mikhaël Aïvanhov*