import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from 'react';
import heroImage from "@assets/IMG_6076_1755522864402.png";

export default function Hero() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [copyRevealed, setCopyRevealed] = useState(false);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

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

  // Intersection Observer for trigger
  useEffect(() => {
    if (!sectionRef.current || hasAnimated) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          if (prefersReducedMotion) {
            // Skip animations, show everything immediately
            setCopyRevealed(true);
          } else {
            // Start copy reveal after 900ms
            setTimeout(() => setCopyRevealed(true), 900);
          }
        }
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(sectionRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasAnimated, prefersReducedMotion]);

  // Scroll progress tracking for pinning
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const maxScroll = windowHeight * 0.65; // Pin for 65vh
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isPinned = scrollProgress < 1;

  return (
    <section 
      ref={sectionRef}
      className={`relative h-screen w-full overflow-hidden ${
        isPinned ? 'fixed top-0 left-0 z-10' : ''
      } ${prefersReducedMotion ? 'hero-reduced-motion' : ''}`}
    >
      {/* Cinematic Ken Burns Background */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${
          hasAnimated && !prefersReducedMotion ? 'ken-burns-active' : 'ken-burns-static'
        }`}
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      />

      {/* Copy Overlay */}
      <div className="absolute inset-0 z-20 flex items-center" style={{ paddingTop: '120px' }}>
        <div className="max-w-[1120px] mx-auto px-6 md:px-8 w-full">
          <div className="max-w-2xl space-y-8 lg:space-y-12">
            
            {/* Main Headline with Kinetic Reveal */}
            <div className={`space-y-8 ${copyRevealed ? 'copy-revealed' : 'copy-hidden'}`}>
              <div className="relative">
                <h1 className="font-playfair text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-tight text-white drop-shadow-lg">
                  <span className="kinetic-word-cinema" style={{ animationDelay: '0ms' }}>
                    Built-in
                  </span>{' '}
                  <span className="kinetic-word-cinema" style={{ animationDelay: '60ms' }}>
                    Luxury
                  </span>
                  <br />
                  <span className="kinetic-word-cinema" style={{ animationDelay: '120ms' }}>
                    Shoe
                  </span>{' '}
                  <span className="kinetic-word-cinema" style={{ animationDelay: '180ms' }}>
                    Care
                  </span>{' '}
                  <span className="kinetic-word-cinema" style={{ animationDelay: '240ms' }}>
                    System
                  </span>
                </h1>
                
                {/* Specular Sweep */}
                {copyRevealed && !prefersReducedMotion && (
                  <div className="specular-sweep-horizontal absolute top-0 left-0 w-full h-full pointer-events-none" />
                )}
              </div>
              
              {/* Editorial Subtext */}
              <p 
                className="text-gray-200 text-xl lg:text-2xl leading-relaxed font-light max-w-lg drop-shadow-md kinetic-text-cinema"
                style={{ animationDelay: '360ms' }}
              >
                Museum-quality display meets AI-powered maintenance for the modern luxury home.
              </p>
            </div>
            
            {/* Call-to-Action Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-6 kinetic-buttons-cinema ${copyRevealed ? 'revealed' : ''}`}
              style={{ animationDelay: '480ms' }}
            >
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 px-10 py-5 text-lg font-medium transition-all duration-300 shadow-lg"
                data-testid="button-cta-primary"
              >
                View Product Details
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-10 py-5 text-lg font-medium transition-all duration-300"
                data-testid="button-cta-secondary"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>



      {/* Clean divider for next section */}
      {!isPinned && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white z-10" />
      )}
    </section>
  );
}


