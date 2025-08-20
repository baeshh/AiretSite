import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * Hook to reset scroll position to top on route changes
 * Respects prefers-reduced-motion and handles edge cases
 */
export function useScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Function to scroll to top instantly
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto' // Always instant for reliability and no visual jank
      });
    };

    // Reset scroll immediately
    scrollToTop();

    // Schedule another reset on next animation frame to handle
    // any layout shifts or lazy loading content
    const rafId = requestAnimationFrame(() => {
      scrollToTop();
    });

    // Cleanup
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [location]); // Run whenever location changes

  // Also handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      // Small delay to ensure route change has processed
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto'
        });
      }, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
}

/**
 * Utility function to check if a link should trigger scroll reset
 */
export function shouldResetScroll(href: string): boolean {
  // Don't reset for hash links (anchors)
  if (href.startsWith('#')) {
    return false;
  }
  
  // Don't reset for external links
  try {
    const url = new URL(href, window.location.origin);
    if (url.origin !== window.location.origin) {
      return false;
    }
  } catch {
    // If URL parsing fails, assume it's a relative internal link
    return true;
  }
  
  // Reset for all internal route changes
  return true;
}