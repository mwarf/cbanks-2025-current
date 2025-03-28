# Coalbanks Creative Inc. - Next.js Project Knowledge Transfer

## 1. Project Overview

This project is a website for Coalbanks Creative Inc., a video production company that specializes in documentary films, brand films, event coverage, VFX, animation, and corporate videos. The website showcases their services and portfolio using modern web design techniques and animations.

The site features:
- Animated hero section with spotlight effects
- Services presentation with interactive hover effects
- Portfolio gallery of past work
- Behind-the-scenes image grid with lazy loading animations
- 3D interactive elements using Spline
- Responsive design for all screen sizes

## 2. Technology Stack

The project is built with:

- **Framework**: Next.js 15.2.4 (App Router)
- **Language**: TypeScript
- **UI Library**: React 19.0.0
- **Styling**: Tailwind CSS 4.x
- **Animations**: Framer Motion 12.6.0
- **Icons**: React Icons 5.5.0, Lucide React, Tabler Icons
- **UI Components**: Custom components with some Radix UI primitives
- **Carousel**: Embla Carousel
- **3D Elements**: Spline Tool

## 3. Project Structure

The project follows the Next.js App Router structure:

```
/
├── public/               # Static assets
│   ├── images/           # Image assets
│   │   ├── bts/          # Behind-the-scenes photos
│   │   ├── brands/       # Brand logos
│   │   └── logos/        # Coalbanks logos
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── page.tsx      # Homepage
│   │   ├── layout.tsx    # Root layout
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── blocks/       # Composite components (page sections)
│   │   ├── ui/           # Reusable UI components
│   │   └── site-footer.tsx  # Site footer component
│   └── lib/              # Utility functions and helpers
```

### Component Organization

The components are organized into two main categories:

1. **UI Components** (`src/components/ui/`): Reusable, atomic components that serve as building blocks
2. **Block Components** (`src/components/blocks/`): Larger, composite components that represent entire sections of a page

## 4. Component Architecture

### UI Components

UI components are the foundational building blocks. They are:
- Reusable across the application
- Primarily focused on a single responsibility
- Often accept props for customization
- Examples: `Spotlight`, `InView`, `Card`, `Carousel`

### Block Components

Block components compose multiple UI components to create complete sections:
- Often represent entire sections of a page
- May have demo versions that show example usage
- Examples: `Gallery4`, `InViewImagesGrid`, `SplineSceneBasic`

### Key Patterns

1. **"use client" Directive**: Components using client-side features (like React hooks or browser APIs) are marked with `"use client"` at the top.

2. **Props Interfaces**: TypeScript interfaces are defined for component props to ensure type safety.

3. **Default Exports vs. Named Exports**: 
   - Named exports are used for UI components that might be imported alongside others
   - Default exports are used for block components that are typically imported individually

4. **Animation Techniques**: The project uses Framer Motion for animations, particularly with the `InView` component for scroll-triggered animations.

## 5. Design Patterns

### 1. Component Composition

Components are designed to be composable. Smaller UI components are combined to create larger block components, which are then assembled into pages.

### 2. Responsive Design

The project uses Tailwind's responsive utilities (e.g., `md:`, `sm:` prefixes) to ensure the site looks good on all device sizes.

### 3. Animation on Scroll

The `InView` component is used to trigger animations when elements come into the viewport, creating an engaging scrolling experience.

### 4. Dark Mode Support

Some components include dark mode variants with `dark:` Tailwind prefixes for better user experience in different lighting conditions.

### 5. Type Safety

TypeScript interfaces and types are used throughout the project to ensure type safety and provide better developer experience.

## 6. Key Features

### Spotlight Effect

The `Spotlight` component creates an animated gradient effect that moves across the hero section, creating a dynamic visual interest.

### Animated Image Grid

The `InViewImagesGrid` component displays images in a responsive grid with staggered fade-in animations as the user scrolls.

### Interactive Gallery

The `Gallery4` component showcases the company's work with a grid layout and hover effects.

### Feature Section with Hover Effects

The `FeaturesSectionWithHoverEffects` component presents the company's services with interactive hover effects.

### 3D Elements

The project incorporates Spline for 3D interactive elements via the `SplineSceneBasic` component.

### Floating Navigation

The `FloatingNav` component provides a sticky navigation bar that appears as users scroll.

## 7. Development Workflow

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) to see the site

### Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run start`: Start the production server
- `npm run lint`: Run ESLint to check for code issues

## 8. Deployment Process

The project follows standard Next.js deployment practices:

1. Build the application:
   ```bash
   npm run build
   ```

2. The application can be deployed to:
   - Vercel (recommended for Next.js projects)
   - Netlify
   - AWS Amplify
   - Any platform supporting Node.js applications

## 9. Common Tasks for New Developers

### Adding a New Page

1. Create a new directory in `src/app/` for the page
2. Add a `page.tsx` file with the page content
3. Update navigation links in `FloatingNav` component if needed

### Creating a New Component

1. Decide if it's a UI component or a block component
2. Create a new file in the appropriate directory
3. If it uses client-side features, add the `"use client"` directive
4. Define TypeScript interfaces for props
5. Implement the component
6. Import and use in pages or other components

### Adding New Images

1. Place images in the appropriate directory in `public/images/`
2. Use the Next.js `Image` component to display them:
   ```tsx
   import Image from "next/image";
   
   <Image
     src="/images/path/to/image.jpg"
     alt="Description of image"
     width={800}
     height={600}
     // Or use fill with a parent container:
     // fill
     // className="object-cover"
   />
   ```

### Modifying the Navigation

Edit the `navItems` array in `src/app/layout.tsx` to add, remove, or modify navigation items.

### Working with Animations

1. Import components from Framer Motion:
   ```tsx
   import { motion } from "framer-motion";
   ```

2. Use the `InView` component for scroll-triggered animations:
   ```tsx
   import { InView } from "@/components/ui/in-view";
   
   <InView>
     <YourComponentHere />
   </InView>
   ```

3. Define custom animation variants if needed:
   ```tsx
   const variants = {
     hidden: { opacity: 0 },
     visible: { opacity: 1, transition: { duration: 0.5 } },
   };
   
   <InView variants={variants}>
     <YourComponentHere />
   </InView>
   ```

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
