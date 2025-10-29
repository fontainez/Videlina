# VIDELINA - Digital Library of Light

A modern web application dedicated to preserving and sharing the spiritual teachings of Omraam Mikhaël Aïvanhov. Videlina, meaning "Light" in Bulgarian, serves as a comprehensive digital library for seekers of wisdom worldwide.

## 🎯 Features

- **Digital Library**: Browse and read the complete works of Omraam Mikhaël Aïvanhov
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Clean, spiritual-themed interface with custom color palette
- **Search & Filter**: Find books by title, author, or category
- **Daily Inspiration**: Random quotes from the Master's teachings

## 🎨 Design & Branding

- **Name**: VIDELINA (meaning "Light" in Bulgarian)
- **Primary Color**: Deep Purple (#6A0DAD)
- **Accent Color**: Warm Crimson (#C21807)
- **Background**: White (#FFFFFF)
- **Fonts**: 
  - Headings: Cormorant Garamond (elegant serif)
  - Body: Open Sans (clean sans-serif)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Videlina
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
Videlina/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── library/           # Library page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Cormorant Garamond, Open Sans)
- **Icons**: Lucide React

## 📚 Content Management

### Adding New Books

To add new books to the library:

1. **Update mock data** in `app/library/page.tsx`
2. **Add PDF files** to the `public/pdfs/` directory
3. **Update book metadata** in the `mockBooks` array

### Customizing Content

- **Biography**: Edit the biography section in `app/page.tsx`
- **Quotes**: Update the `dailyQuotes` array in `app/page.tsx`
- **Categories**: Modify categories in `app/library/page.tsx`

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#6A0DAD',  // Deep Purple
    // ... gradient shades
  },
  accent: {
    DEFAULT: '#C21807',   // Warm Crimson
    // ... gradient shades
  }
}
```

### Fonts

Font families are configured in `tailwind.config.js` and imported in `app/globals.css`.

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- Use TypeScript for type safety
- Follow React best practices
- Use Tailwind CSS for styling
- Maintain consistent naming conventions

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔮 Future Enhancements

- [ ] User authentication system
- [ ] Bookmarking and favorites
- [ ] Reading progress tracking
- [ ] Advanced search with filters
- [ ] Multi-language support
- [ ] Audio book integration
- [ ] Mobile app version

## 🤝 Contributing

We welcome contributions from the spiritual community! Areas where you can help:

- **Content**: Adding new books, translations, or corrections
- **Development**: Feature development and bug fixes
- **Design**: UI/UX improvements
- **Testing**: Quality assurance and user testing

## 📄 License

This project is dedicated to the spiritual community and is maintained with love and service. All content related to Omraam Mikhaël Aïvanhov's teachings is shared for educational and spiritual purposes.

## 🙏 Acknowledgments

- Omraam Mikhaël Aïvanhov for his profound spiritual teachings
- The global community of spiritual seekers
- All volunteers and contributors who help maintain this project

---

*"Let light, peace, and wisdom guide your every thought."*  
*- Omraam Mikhaël Aïvanhov*
```

Now let me test the project to make sure everything is working correctly: