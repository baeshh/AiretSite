import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from 'react';
import heroImage from "@assets/IMG_6076_1755522864402.png";

export default function Hero() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
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

  useEffect(() => {
    if (!sectionRef.current || hasAnimated) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
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
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      className={`bg-white relative min-h-[90vh] lg:min-h-[100vh] flex items-center pt-[120px] overflow-hidden ${
        prefersReducedMotion ? 'hero-reduced-motion' : ''
      }`}
    >
      {/* Optional Raster Scan Effect */}
      {hasAnimated && !prefersReducedMotion && (
        <div className="raster-scan absolute inset-0 pointer-events-none" />
      )}
      
      <div className="max-w-[1120px] mx-auto px-6 md:px-8 w-full relative z-10">
        
        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-8 items-center">
          
          {/* Left Column - Content (editorial magazine layout) */}
          <div className="lg:col-span-2 space-y-12 lg:space-y-16">
            
            {/* Main Headline - Editorial Style with Kinetic Animation */}
            <div className="space-y-8">
              <h1 className="font-playfair text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-tight text-black overflow-hidden">
                <span className={`kinetic-word inline-block ${hasAnimated ? 'animate' : ''}`} style={{ animationDelay: '800ms' }}>
                  Built-in
                </span>{' '}
                <span className={`kinetic-word inline-block ${hasAnimated ? 'animate' : ''}`} style={{ animationDelay: '880ms' }}>
                  Luxury
                </span>
                <br />
                <span className={`kinetic-word inline-block ${hasAnimated ? 'animate' : ''}`} style={{ animationDelay: '960ms' }}>
                  Shoe
                </span>{' '}
                <span className={`kinetic-word inline-block ${hasAnimated ? 'animate' : ''}`} style={{ animationDelay: '1040ms' }}>
                  Care
                </span>{' '}
                <span className={`kinetic-word inline-block ${hasAnimated ? 'animate' : ''}`} style={{ animationDelay: '1120ms' }}>
                  System
                </span>
              </h1>
              
              {/* Editorial Subtext */}
              <p className={`text-[#6B7280] text-xl lg:text-2xl leading-relaxed font-light max-w-lg kinetic-text ${hasAnimated ? 'animate' : ''}`} style={{ animationDelay: '1300ms' }}>
                Museum-quality display meets AI-powered maintenance for the modern luxury home.
              </p>
            </div>
            
            {/* Call-to-Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 kinetic-buttons ${hasAnimated ? 'animate' : ''}`} style={{ animationDelay: '1500ms' }}>
              <Button 
                size="lg" 
                className="bg-black text-white hover:opacity-90 px-10 py-5 text-lg font-medium transition-opacity duration-300"
                data-testid="button-cta-primary"
              >
                View Product Details
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white border-black text-black hover:bg-black hover:text-white px-10 py-5 text-lg font-medium transition-all duration-300"
                data-testid="button-cta-secondary"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
          
          {/* Right Column - Product Image with Door Mask Effect */}
          <div className="lg:col-span-3 lg:ml-auto">
            <DoorMaskWithEffects 
              hasAnimated={hasAnimated}
              prefersReducedMotion={prefersReducedMotion}
              className="scale-110 lg:scale-125 xl:scale-150" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Enhanced Door Mask Component with Luxury Effects
function DoorMaskWithEffects({ 
  hasAnimated, 
  prefersReducedMotion, 
  className = "" 
}: { 
  hasAnimated: boolean; 
  prefersReducedMotion: boolean; 
  className?: string; 
}) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [doorProgress, setDoorProgress] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDoorProgress(1);
      return;
    }

    if (hasAnimated) {
      // Animate door opening over 1200ms
      let startTime: number | null = null;
      const duration = 1200;

      const animateDoor = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Eased progress for smooth opening
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setDoorProgress(easedProgress);

        if (progress < 1) {
          requestAnimationFrame(animateDoor);
        }
      };

      // Start door animation after raster scan
      setTimeout(() => {
        requestAnimationFrame(animateDoor);
      }, 800);
    }
  }, [hasAnimated, prefersReducedMotion]);

  const leftDoorRotation = doorProgress * 100;
  const rightDoorRotation = doorProgress * 100;
  const specularOpacity = doorProgress > 0.3 && doorProgress < 0.7 ? 
    Math.sin((doorProgress - 0.3) * Math.PI / 0.4) : 0;

  return (
    <div className={`relative ${className} door-container ${hasAnimated ? 'animate' : ''}`}>
      {/* Product Image with Dolly-In Effect */}
      <div className={`product-dolly ${hasAnimated ? 'animate' : ''}`}>
        <img
          ref={imageRef}
          src={heroImage}
          alt="Front view of AIRET built-in luxury shoe care system"
          className="w-full h-auto shadow-[0_20px_80px_rgba(0,0,0,0.12)]"
          loading="eager"
          data-testid="img-hero-product"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000";
          }}
        />
      </div>

      {/* Door Overlay System */}
      {!prefersReducedMotion && (
        <>
          {/* Left Door */}
          <div 
            className="door-left absolute inset-0 bg-black origin-left"
            style={{
              transform: `perspective(1000px) rotateY(-${leftDoorRotation}deg)`,
              boxShadow: doorProgress > 0.5 ? `inset -10px 0 20px rgba(0,0,0,${doorProgress * 0.3})` : 'none'
            }}
          />
          
          {/* Right Door */}
          <div 
            className="door-right absolute inset-0 bg-black origin-right"
            style={{
              transform: `perspective(1000px) rotateY(${rightDoorRotation}deg)`,
              boxShadow: doorProgress > 0.5 ? `inset 10px 0 20px rgba(0,0,0,${doorProgress * 0.3})` : 'none'
            }}
          />

          {/* Specular Sweep Line */}
          <div 
            className="specular-sweep absolute top-0 left-1/2 h-full bg-white"
            style={{
              width: `${2 + (specularOpacity * 4)}px`,
              opacity: specularOpacity,
              transform: 'translateX(-50%)',
              filter: 'blur(0.5px)'
            }}
          />
        </>
      )}
    </div>
  );
}
