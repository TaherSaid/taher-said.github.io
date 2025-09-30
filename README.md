# Taher Said - Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark Mode**: Built-in dark mode support
- **Performance**: Optimized for speed and SEO
- **Accessibility**: WCAG compliant with proper semantic HTML
- **TypeScript**: Full type safety throughout the application
- **Animations**: Smooth animations using Framer Motion

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── work/              # Work experience page
│   ├── projects/          # Projects page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section
│   ├── Skills.tsx         # Skills showcase
│   ├── FeaturedProjects.tsx # Featured projects
│   ├── ContactCTA.tsx     # Contact call-to-action
│   ├── Bio.tsx            # About bio
│   ├── Education.tsx      # Education section
│   ├── Interests.tsx      # Interests section
│   ├── WorkExperience.tsx # Work experience
│   ├── ProjectsList.tsx   # Projects with filtering
│   ├── ContactForm.tsx    # Contact form
│   └── ContactInfo.tsx    # Contact information
├── data/                  # Data files
│   └── portfolio.ts       # Portfolio data
└── lib/                   # Utility functions
    └── utils.ts           # Helper functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Updating Content

All content is stored in `src/data/portfolio.ts`. Update this file to modify:

- Personal information
- Work experience
- Projects
- Skills
- Contact information
- Education
- Languages and interests

### Styling

The project uses Tailwind CSS with a custom color palette. Main colors are defined in `tailwind.config.ts`:

- Primary colors: Blue gradient
- Dark colors: Gray scale
- Custom animations and utilities

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Update the navigation in `src/components/Header.tsx`

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for any environment-specific configuration:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### SEO

Update metadata in `src/app/layout.tsx` and individual page components for better SEO.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project is compatible with any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with tree shaking
- **Images**: Next.js Image optimization
- **Fonts**: Google Fonts with display swap

## 🔒 Security

- Form validation with Zod
- XSS protection
- CSRF protection
- Secure headers
- Input sanitization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: saidtaher051@gmail.com
- **LinkedIn**: [linkedin.com/in/taher-said](https://www.linkedin.com/in/taher-said)
- **GitHub**: [github.com/TaherSaid](https://github.com/TaherSaid)

---

Built with ❤️ by Taher Said
