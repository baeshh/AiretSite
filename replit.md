# AIRET - Luxury Shoe Care System Website

## Overview

AIRET is a premium black and white minimalist website showcasing a built-in luxury shoe care system for CES 2025. The website combines museum-quality display technology with AI-powered maintenance systems, targeting luxury retailers, collectors, and high-end consumers. The project emphasizes performance, accessibility, and a strict monochrome aesthetic inspired by Apple and Louis Vuitton design principles.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React + TypeScript**: Single-page application with component-based architecture using functional components and hooks
- **Routing**: Client-side routing implemented with Wouter for lightweight navigation
- **Styling**: Tailwind CSS with custom black and white color palette, using CSS variables for theming
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessibility compliance
- **Build System**: Vite for fast development and optimized production builds
- **Typography**: Google Fonts integration (Playfair Display for headlines, Noto Sans for body text)

### Backend Architecture
- **Express.js Server**: Minimal backend primarily serving static files and handling development middleware
- **Database Integration**: Drizzle ORM configured for PostgreSQL with schema definitions for potential user management
- **Static File Serving**: Development and production static asset serving through Express middleware
- **Session Management**: Connect-pg-simple for PostgreSQL session storage (prepared but not actively used)

### Design System
- **Strict Monochrome Palette**: Pure black (#000000), white (#FFFFFF), and grayscale variants only
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Animation Strategy**: Subtle fade and slide transitions, avoiding heavy animations for performance
- **Accessibility**: WCAG AA compliance with high contrast ratios and semantic HTML structure
- **Typography Hierarchy**: Playfair Display for luxury serif headlines, Noto Sans for clean body text

### Component Architecture
- **Page Components**: Home, About, Product, Patent, Media with dedicated route handling
- **Feature Components**: Hero, Innovation, ProductShowcase, Team, Contact as reusable sections
- **UI Components**: Complete Shadcn/ui component library with custom theming
- **Layout Components**: Navbar with scroll-based styling, Footer with structured information
- **SEO Component**: Dynamic meta tag management for optimal search engine optimization

### Performance Optimizations
- **Image Optimization**: WebP format support with fallback strategies
- **Lazy Loading**: Implemented for images and non-critical components
- **Code Splitting**: Vite's automatic chunking for optimal bundle sizes
- **CSS Optimization**: Tailwind CSS purging for minimal stylesheet size
- **Font Loading**: Preconnect to Google Fonts with optimal loading strategy

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18+, React DOM, React Hook Form for form management
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Radix UI primitives for accessible component foundations
- **Styling**: Tailwind CSS with PostCSS for processing
- **Build Tools**: Vite with TypeScript support and React plugin

### Database & ORM
- **Drizzle ORM**: Type-safe database queries with PostgreSQL dialect
- **Neon Database**: Serverless PostgreSQL provider (@neondatabase/serverless)
- **Database Migrations**: Drizzle Kit for schema management and migrations

### Form & Data Management
- **React Hook Form**: Form state management with validation
- **Zod**: Schema validation integrated with Drizzle ORM
- **TanStack Query**: Server state management for API interactions
- **Formspree**: External form handling service for contact forms (referenced but not implemented)

### Analytics & SEO
- **Plausible Analytics**: Privacy-focused website analytics
- **Open Graph**: Social media sharing optimization
- **JSON-LD**: Structured data for search engines
- **Meta Tags**: Dynamic SEO meta tag management

### Development Tools
- **TypeScript**: Static type checking across the entire codebase
- **ESBuild**: Fast JavaScript bundling for production builds
- **Replit Integration**: Custom plugins for Replit environment compatibility
- **Error Handling**: Runtime error overlay for development debugging

### Production Services
- **Static Hosting**: Prepared for Replit Deploy with static file serving
- **Custom Domain**: Configured for airet.io domain integration
- **CDN Support**: Image optimization and delivery through external CDN services
- **Performance Monitoring**: Integrated analytics for user experience tracking