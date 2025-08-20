# AIRET - Built-in Luxury Shoe Care System

## Overview

AIRET is a luxury built-in shoe care system that combines museum-grade display technology with AI-powered maintenance. The project is a premium product website designed for CES 2025, featuring a sophisticated black and white aesthetic that emphasizes luxury and minimalism. The system showcases shoes while providing automated care through UV-C sanitization, climate control, and intelligent scheduling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript running in a Vite development environment
- **Routing**: Wouter for client-side routing with scroll-to-top functionality
- **Styling**: TailwindCSS with custom design system strictly enforcing black/white/gray palette
- **Animation**: Framer Motion for premium interactions and scroll-driven effects
- **Component Library**: Radix UI primitives with shadcn/ui components for consistent design

### Design System
- **Color Palette**: Strictly monochrome - pure black (#000000), white (#FFFFFF), and grayscale variants
- **Typography**: Google Fonts - Playfair Display for headlines, Noto Sans for body text
- **Layout**: Container-based with max-width constraints and generous whitespace
- **Animations**: Luxury-focused with cinematic hero sequences, door-opening effects, and scroll-driven reveals

### Data Layer
- **State Management**: TanStack Query for server state and React hooks for local state
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: User management system with extensible structure for future features

### Performance Optimizations
- **Image Optimization**: WebP format with PNG fallbacks for product imagery
- **Code Splitting**: Route-based code splitting with React.lazy
- **Animation Performance**: requestAnimationFrame for smooth 60fps animations with reduced-motion support
- **SEO**: Open Graph meta tags, Twitter cards, and JSON-LD structured data

### Route Structure
- `/` - Landing page with hero, innovation, product showcase, team, and contact sections
- `/about` - Company vision, mission, and timeline
- `/product` - Detailed product specifications and features
- `/patent` - Patent portfolio and intellectual property
- `/media` - Press coverage and media resources

### Accessibility Features
- **Motion Preferences**: Respects `prefers-reduced-motion` with fallback animations
- **Semantic HTML**: Proper heading hierarchy and ARIA labels
- **Color Contrast**: High contrast black/white design exceeds WCAG standards
- **Keyboard Navigation**: Full keyboard support for all interactive elements

## External Dependencies

### Third-Party Services
- **Analytics**: Plausible Analytics for privacy-focused tracking
- **Forms**: Formspree for contact form handling without backend requirements
- **Fonts**: Google Fonts API for typography (Playfair Display, Noto Sans)

### Development Tools
- **Build System**: Vite for fast development and optimized production builds
- **Database**: Neon PostgreSQL for cloud database hosting
- **ORM**: Drizzle for type-safe database operations with migration support
- **Deployment**: Replit deployment with custom domain support (airet.io)

### UI Libraries
- **Component Framework**: Radix UI primitives for accessible base components
- **Styling**: TailwindCSS with custom configuration for luxury aesthetics
- **Icons**: Lucide React for consistent iconography
- **Animation**: Framer Motion for advanced animations and gesture handling

### Asset Management
- **Images**: Local asset storage with WebP conversion for performance
- **Product Images**: Three primary product photos (IMG_6076, IMG_6077, IMG_6078) showcasing different views
- **Optimization**: Built-in image optimization through Vite's asset pipeline