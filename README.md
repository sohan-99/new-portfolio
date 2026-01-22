# Sohanur Rahman - Portfolio Website

A modern, production-ready personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](public/og-image.jpg)

## ✨ Features

- 🎨 **Modern Design** - Clean, minimal UI with gradient accents and glassmorphism
- 🌓 **Dark/Light Mode** - Seamless theme switching with system preference detection
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Performance Optimized** - Fast load times with Next.js optimizations
- 🔍 **SEO Ready** - Complete meta tags, Open Graph, and structured data
- 🎭 **Smooth Animations** - Beautiful transitions with Framer Motion
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 📧 **Contact Form** - Working contact form with validation
- 🔧 **Type-Safe** - Full TypeScript implementation

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Theme:** next-themes
- **Deployment:** Vercel

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── contact/           # Contact page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── loading.tsx        # Loading state
│   ├── error.tsx          # Error boundary
│   └── not-found.tsx      # 404 page
├── components/            # React components
│   ├── providers/         # Context providers
│   ├── sections/          # Page sections
│   ├── ui/                # UI components
│   └── ...                # Other components
├── data/                  # Static data
│   ├── experience.ts      # Work experience data
│   ├── personal.ts        # Personal information
│   ├── projects.ts        # Projects data
│   └── skills.ts          # Skills data
├── lib/                   # Utility functions
│   ├── seo.ts             # SEO configuration
│   └── utils.ts           # Helper functions
└── styles/               
    └── globals.css        # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sohanurrahman/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Update environment variables in `.env.local`:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   CONTACT_EMAIL=your-email@example.com
   ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Edit `src/data/personal.ts` to update:
- Name and role
- Bio and tagline
- Contact information
- Social links
- Resume URL

### Projects

Edit `src/data/projects.ts` to add/modify projects:
- Project title and description
- Tech stack
- GitHub and live demo links
- Category and featured status

### Skills

Edit `src/data/skills.ts` to update:
- Skill names and icons
- Proficiency levels
- Categories

### Experience

Edit `src/data/experience.ts` to update:
- Work history
- Education
- Certifications

### Styling

- **Colors:** Edit `tailwind.config.ts` to change the color palette
- **Fonts:** Edit `src/app/layout.tsx` to change fonts
- **Global Styles:** Edit `src/styles/globals.css`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Other Platforms

Build the production version:
```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Md. Sohanur Rahman Jahin**

- GitHub: [@sohanurrahman](https://github.com/sohanurrahman)
- LinkedIn: [Sohanur Rahman](https://linkedin.com/in/sohanurrahman)
- Email: sohanurrahmans68@gmail.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [next-themes](https://github.com/pacocoursey/next-themes)

---

⭐ If you found this helpful, please give it a star!
