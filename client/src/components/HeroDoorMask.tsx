import { useEffect, useRef, useState } from 'react';
import heroImage from "@assets/IMG_6076_1755522864402.png";

interface HeroDoorMaskProps {
  className?: string;
}

export default function HeroDoorMask({ className = "" }: HeroDoorMaskProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [doorProgress, setDoorProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const frameRef = useRef<number>();

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDoorProgress(1); // Fully open for reduced motion users
      return;
    }

    const handleScroll = () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const maxScroll = windowHeight * 0.4; // 40vh
        
        // Calculate progress from 0 to 1
        const progress = Math.min(scrollY / maxScroll, 1);
        setDoorProgress(progress);
      });
    };

    // Initial calculation
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [prefersReducedMotion]);

  const maskStyle = prefersReducedMotion 
    ? { opacity: 1 } 
    : {
        maskImage: `linear-gradient(90deg, 
          transparent 0%, 
          transparent ${50 - (doorProgress * 50)}%, 
          black ${50 - (doorProgress * 50)}%, 
          black ${50 + (doorProgress * 50)}%, 
          transparent ${50 + (doorProgress * 50)}%, 
          transparent 100%)`,
        WebkitMaskImage: `linear-gradient(90deg, 
          transparent 0%, 
          transparent ${50 - (doorProgress * 50)}%, 
          black ${50 - (doorProgress * 50)}%, 
          black ${50 + (doorProgress * 50)}%, 
          transparent ${50 + (doorProgress * 50)}%, 
          transparent 100%)`
      };

  return (
    <div className={`relative ${className}`}>
      <img
        ref={imageRef}
        src={heroImage}
        alt="Front view of AIRET built-in luxury shoe care system"
        className="w-full h-auto shadow-[0_20px_80px_rgba(0,0,0,0.12)] product-hover-zoom"
        style={maskStyle}
        loading="eager"
        data-testid="img-hero-door-mask"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000";
        }}
      />
      
      {/* Debug indicator (remove in production) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 left-4 bg-black/80 text-white px-2 py-1 text-xs font-mono">
          Door: {Math.round(doorProgress * 100)}%
        </div>
      )}
    </div>
  );
}