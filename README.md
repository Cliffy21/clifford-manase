# 🚀 Clifford Manase - Futuristic Portfolio

A stunning, futuristic portfolio website built with Next.js 14, TypeScript, and TailwindCSS. Features cyberpunk-inspired design, crazy typing animations, particle effects, and the Fira Code font throughout.

![Portfolio Preview](preview.png)

## ✨ Features

- **Futuristic Cyberpunk Design** - Neon glows, holographic cards, and grid backgrounds
- **Crazy Typing Animations** - Dynamic typewriter effect showcasing different roles
- **Interactive Particle Background** - Mouse-reactive particles with connection lines
- **Glitch Text Effects** - Eye-catching glitch animations on headings
- **Smooth Scroll Animations** - Elements animate into view as you scroll
- **Terminal-Styled Components** - Code-like aesthetics throughout
- **Fully Responsive** - Looks great on all devices
- **Fira Code Font** - Monospace typography for a developer aesthetic
- **Dark Theme** - Easy on the eyes with vibrant accent colors
- **Elegant Logo** - Professional "dev_manase" text logo

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Cyber Dark | `#0a0a0f` | Background |
| Cyber Purple | `#a855f7` | Primary accent |
| Cyber Pink | `#ec4899` | Secondary accent |
| Cyber Cyan | `#22d3ee` | Highlight/Interactive |
| Cyber Green | `#10b981` | Success/Status |
| Cyber Orange | `#f97316` | Warning/Emphasis |
| Cyber Blue | `#3b82f6` | Links |

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion + CSS Animations
- **Icons**: Lucide React
- **Font**: Fira Code (Google Fonts)

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0 or higher
- **npm** or **yarn** or **pnpm**

## 🚀 Quick Start

### Step 1: Clone or Create the Project

```bash
# Clone the repository
git clone https://github.com/Cliffy21/clifford-manase.git
cd clifford-manase

# OR create a new Next.js project
npx create-next-app@latest clifford-manase --typescript --tailwind --eslint --app
```

### Step 2: Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Step 3: Install Additional Packages

```bash
npm install framer-motion lucide-react
# or
yarn add framer-motion lucide-react
```

### Step 4: Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Step 5: Open in Browser

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 📁 Project Structure

```
clifford-manase/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles & animations
│   │   ├── layout.tsx       # Root layout with fonts
│   │   └── page.tsx         # Main page component
│   └── components/
│       ├── Navbar.tsx       # Navigation with scroll effects
│       ├── Hero.tsx         # Landing section with typing animation
│       ├── About.tsx        # About section with terminal style
│       ├── Skills.tsx       # Skills with animated progress bars
│       ├── Projects.tsx     # Projects showcase with cards
│       ├── Contact.tsx      # Contact form & info
│       ├── Footer.tsx       # Footer with links
│       ├── TypeWriter.tsx   # Typing animation component
│       └── ParticlesBackground.tsx  # Interactive particles
├── public/
│   └── (images and assets)
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

## 🎯 Customization Guide

### Updating Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update the roles array with your job titles
   - Modify the terminal code block with your details
   - Update stats (years, projects, technologies)

2. **About Section** (`src/components/About.tsx`):
   - Edit the bio paragraphs
   - Update interests tags
   - Modify highlight cards

3. **Skills Section** (`src/components/Skills.tsx`):
   - Update skill categories and percentages
   - Modify the tech stack array

4. **Projects Section** (`src/components/Projects.tsx`):
   - Replace with your actual projects
   - Update GitHub links and descriptions
   - Add live demo URLs if available

5. **Contact Section** (`src/components/Contact.tsx`):
   - Update email, phone, location
   - Add your social media links
   - Configure form submission (see below)

### Adding Form Functionality

To make the contact form functional, you can:

1. **Use Formspree**:
```tsx
// In Contact.tsx, update the form action
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

2. **Use EmailJS**:
```bash
npm install @emailjs/browser
```

3. **Create an API Route**:
```tsx
// src/app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json()
  // Handle email sending logic
}
```

### Changing Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  cyber: {
    dark: '#YOUR_COLOR',
    purple: '#YOUR_COLOR',
    pink: '#YOUR_COLOR',
    cyan: '#YOUR_COLOR',
    // ... etc
  },
},
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the .next folder
```

### Other Platforms

The project can be deployed to any platform supporting Next.js:
- Railway
- Render
- DigitalOcean App Platform
- AWS Amplify

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Tips

1. Optimize images using Next.js Image component
2. Use `next/font` for font optimization (already configured)
3. Enable static generation where possible
4. Minimize client-side JavaScript

## 🐛 Troubleshooting

**Particles not showing?**
- Check if canvas is being rendered
- Ensure `pointer-events-none` is set

**Animations laggy?**
- Reduce particle count in `ParticlesBackground.tsx`
- Use `will-change` CSS property sparingly

**Fonts not loading?**
- Check Google Fonts URL in `globals.css`
- Verify `font-fira` class in `tailwind.config.js`

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

---

**Built with 💜 by Clifford Manase**

*Ready to stand out? Let's make your portfolio unforgettable!*
