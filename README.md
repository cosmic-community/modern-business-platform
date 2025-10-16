# Modern Business Platform

![App Preview](https://imgix.cosmicjs.com/1e2c0680-aa51-11f0-936e-dbe343b25d95-photo-1551434678-e076c223a692-1760592579076.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A stunning, modern business platform website featuring dynamic content management through Cosmic CMS. This Next.js application showcases professional sections including hero, features, statistics, about, and contact - all powered by your Cosmic content.

## ✨ Features

- 🎨 Modern, responsive design with smooth animations
- 🚀 Server-side rendering with Next.js 15
- 📱 Mobile-first responsive layout
- 🎯 Dynamic content from Cosmic CMS
- 🖼️ Optimized images with imgix
- 📊 Statistics dashboard
- 🔗 Social media integration
- ♿ Accessible and SEO-optimized
- 🎭 Smooth scroll navigation
- 💅 Styled with Tailwind CSS

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68f082695575d95cd12bd750&clone_repository=68f08372bac19cae2305871e)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "https://templates.iqonic.design/qwilo/html/qwilo/index.html# clone this exact wesite same theme same animations but i want i in html css"

### Code Generation Prompt

> Based on the content model I created for "https://templates.iqonic.design/qwilo/html/qwilo/index.html# clone this exact wesite same theme same animations but i want i in html css", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **Imgix** - Image optimization and transformation
- **React** - UI component library

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Create a `.env.local` file with your Cosmic credentials:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Run the development server:
   ```bash
   bun run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Homepage Content

```typescript
import { cosmic } from '@/lib/cosmic'

async function getHomepage() {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'homepage',
        slug: 'homepage-content'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object
  } catch (error) {
    if (error.status === 404) {
      return null
    }
    throw error
  }
}
```

### Fetching Features with Sorting

```typescript
async function getFeatures() {
  try {
    const response = await cosmic.objects
      .find({ type: 'features' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    // Manual sorting by order field
    return response.objects.sort((a, b) => {
      const orderA = a.metadata?.order || 0
      const orderB = b.metadata?.order || 0
      return orderA - orderB
    })
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    throw error
  }
}
```

## 🌐 Cosmic CMS Integration

This application uses Cosmic CMS to manage all content. The content model includes:

- **Homepage** (singleton): Hero section, about section, features section, and statistics
- **Features**: Individual feature items with icons, titles, descriptions, and display order
- **Contact Info** (singleton): Email, phone, address, social links, and footer text

All content is fetched server-side for optimal performance and SEO.

## 🚢 Deployment Options

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository in Netlify
3. Add environment variables in Netlify dashboard
4. Set build command: `bun run build`
5. Set publish directory: `.next`
6. Deploy

## 📝 License

MIT License - feel free to use this project for your own purposes.

<!-- README_END -->