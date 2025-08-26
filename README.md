# Solar Investment – Thank You Page

A modern, responsive thank you page for Proper Solar's investment confirmation, built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Modern UI**: Clean, professional design with gold accent colors
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **Performance**: Optimized with Next.js App Router
- **TypeScript**: Full type safety throughout the application

## 🎨 Design Specifications

- **Background**: Black (#0B0B0B)
- **Accent Color**: Gold (#D4AF37)
- **Typography**: System font stack with bold headers
- **Layout**: Responsive grid (1 column mobile, 2 tablet, 4 desktop)

## 📱 Sections

1. **Headline**: "CONGRATULATIONS!" with subheadline
2. **Video Placeholder**: 16:9 aspect ratio placeholder for future video embed
3. **Stats Grid**: Investment statistics in responsive cards
4. **Contact Strip**: Contact information and welcome message
5. **Footer**: Company information and copyright

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel-ready

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd solar-investment-thank-you
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

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx           # Main thank you page
│   └── globals.css        # Global styles
├── components/
│   └── StatCard.tsx       # Statistics card component
├── tailwind.config.ts     # Tailwind configuration
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

## 🎯 Customization

### Colors
Update the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  gold: '#D4AF37',
  coal: '#0B0B0B',
  charcoal: '#1A1A1A',
}
```

### Content
- Update contact information in `app/page.tsx`
- Modify statistics in the StatCard components
- Change company details in the footer

### Styling
- Custom styles are in `app/globals.css`
- Component-specific styles use Tailwind classes
- Responsive breakpoints: mobile (default), md (768px), lg (1024px)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
Build the project:
```bash
npm run build
npm start
```

## 📄 License

Copyright 2025 by Proper Solar, LLC

## 📞 Contact

- **Email**: info@properesolar.com
- **Phone**: +1 (818) 445-0316
- **Address**: 800 SE 4TH AVE, HALLANDALE BEACH, FLORIDA, 33009
