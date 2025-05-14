# Modern Portfolio with AI Integration

A modern, responsive portfolio website built with Next.js 14, featuring AI-powered personalized introductions, dark theme, and a sleek sidebar navigation.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with sidebar and bottom navigation
- **AI Integration**: Personalized introductions using AI
- **Dark Theme**: Modern dark theme with cyan/teal and pink accents
- **Interactive Sections**:
  - Hero Section
  - Skills Grid
  - Project Showcase
  - AI-powered Introduction Generator
  - Contact Section with LinkedIn Integration

## 🚀 Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **UI Components**: 
  - Radix UI primitives
  - Lucide icons
  - Custom components with shadcn/ui patterns
- **Fonts**: Geist Sans & Geist Mono
- **Type Safety**: TypeScript
- **Form Handling**: React Hook Form & Zod validation

## 🛠️ Getting Started

1. **Clone the repository**
```bash
git clone [repository-url]
cd My_Portfolio_Final
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── ai/
│   └── flows/          # AI integration logic
├── app/
│   └── layout.tsx      # Root layout with sidebar
│   └── page.tsx        # Main page component
├── components/
│   ├── sections/       # Page sections
│   └── ui/            # Reusable UI components
└── config/
    └── portfolio.ts    # Portfolio configuration
```

## ⚙️ Configuration

Edit `src/config/portfolio.ts` to update:
- Personal information
- Skills and categories
- Projects showcase
- Professional highlights
- Education & certifications
- Navigation items
- Social links

## 📱 Responsive Design

- **Desktop**: Full sidebar navigation with collapsible option
- **Mobile**: Bottom navigation bar with smooth scrolling
- **Tablet**: Optimized layout for medium screens

## 🎨 Customization

1. **Theme**: Modify `globals.css` to update color schemes
2. **Components**: Customize UI components in `components/ui`
3. **Content**: Update sections in `components/sections`

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [shadcn/ui](https://ui.shadcn.com/) for component patterns
- [Lucide Icons](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for styling
