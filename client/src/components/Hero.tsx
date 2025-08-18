import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from 'react';
import heroImage from "@assets/IMG_6076_1755522864402.png";

export default function Hero() {
  const [animationStage, setAnimationStage] = useState<'initial' | 'doors-opening' | 'copy-reveal' | 'settled'>('initial');
  const [doorProgress, setDoorProgress] = useState(0);
  const [copyRevealed, setCopyRevealed] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPointerActive, setIsPointerActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    if (!sectionRef.current || animationStage !== 'initial') return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && animationStage === 'initial') {
          if (prefersReducedMotion) {
            // Skip animation, go directly to settled state
            setAnimationStage('settled');
            setCopyRevealed(true);
            setDoorProgress(1);
          } else {
            setAnimationStage('doors-opening');
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
  }, [animationStage, prefersReducedMotion]);

  // Door opening animation
  useEffect(() => {
    if (animationStage !== 'doors-opening') return;

    let startTime: number | null = null;
    const duration = 1400; // 1.4s for door opening

    const animateDoors = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth ease-out curve
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDoorProgress(easedProgress);

      // Trigger copy reveal at 65% door progress
      if (progress >= 0.65 && !copyRevealed) {
        setCopyRevealed(true);
      }

      if (progress < 1) {
        requestAnimationFrame(animateDoors);
      } else {
        // Door animation complete
        setTimeout(() => {
          setAnimationStage('settled');
        }, 400); // Brief pause before settling
      }
    };

    requestAnimationFrame(animateDoors);
  }, [animationStage, copyRevealed]);

  // Pointer activity tracking
  useEffect(() => {
    const handlePointerMove = () => {
      setIsPointerActive(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsPointerActive(false), 300);
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Specular line calculations
  const specularOpacity = doorProgress > 0.2 && doorProgress < 0.7 ? 
    Math.sin((doorProgress - 0.2) * Math.PI / 0.5) * 0.8 : 0;
  const specularWidth = 1 + (specularOpacity * 1); // 1-2px range

  return (
    <section 
      ref={sectionRef}
      className={`relative h-screen w-full overflow-hidden ${
        prefersReducedMotion ? 'hero-reduced-motion' : ''
      }`}
      style={{ paddingTop: '120px' }}
    >
      {/* Full-Bleed Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      />

      {/* Viewport Door System */}
      {!prefersReducedMotion && animationStage !== 'settled' && (
        <>
          {/* Left Door */}
          <div 
            className="door-viewport-left fixed inset-0 bg-black z-30 origin-left"
            style={{
              transform: `perspective(2000px) rotateY(-${doorProgress * 90}deg)`,
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              boxShadow: doorProgress > 0.4 ? `inset -20px 0 40px rgba(0,0,0,${doorProgress * 0.4})` : 'none'
            }}
          />
          
          {/* Right Door */}
          <div 
            className="door-viewport-right fixed inset-0 bg-black z-30 origin-right"
            style={{
              transform: `perspective(2000px) rotateY(${doorProgress * 90}deg)`,
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              boxShadow: doorProgress > 0.4 ? `inset 20px 0 40px rgba(0,0,0,${doorProgress * 0.4})` : 'none'
            }}
          />

          {/* Specular Sweep Line */}
          <div 
            className="fixed top-0 left-1/2 h-full bg-white z-40 pointer-events-none"
            style={{
              width: `${specularWidth}px`,
              opacity: specularOpacity,
              transform: 'translateX(-50%)',
              filter: 'blur(0.3px)'
            }}
          />
        </>
      )}

      {/* Copy Overlay */}
      <div 
        className={`absolute inset-0 z-20 flex items-center ${
          copyRevealed || animationStage === 'settled' ? 'copy-overlay-visible' : 'copy-overlay-hidden'
        }`}
        style={{ paddingTop: '120px' }}
      >
        <div className="max-w-[1120px] mx-auto px-6 md:px-8 w-full">
          <div className="max-w-2xl space-y-8 lg:space-y-12">
            
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 
                className={`font-playfair text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-tight text-white drop-shadow-lg copy-kinetic ${
                  isPointerActive ? 'pointer-active' : ''
                }`}
              >
                <span className="kinetic-word-overlay" style={{ animationDelay: '0ms' }}>
                  Built-in
                </span>{' '}
                <span className="kinetic-word-overlay" style={{ animationDelay: '80ms' }}>
                  Luxury
                </span>
                <br />
                <span className="kinetic-word-overlay" style={{ animationDelay: '160ms' }}>
                  Shoe
                </span>{' '}
                <span className="kinetic-word-overlay" style={{ animationDelay: '240ms' }}>
                  Care
                </span>{' '}
                <span className="kinetic-word-overlay" style={{ animationDelay: '320ms' }}>
                  System
                </span>
              </h1>
              
              {/* Editorial Subtext */}
              <p 
                className={`text-gray-200 text-lg lg:text-xl leading-relaxed font-light max-w-lg drop-shadow-md copy-kinetic ${
                  isPointerActive ? 'pointer-active' : ''
                }`}
                style={{ animationDelay: '500ms' }}
              >
                Museum-quality display meets AI-powered maintenance for the modern luxury home.
              </p>
            </div>
            
            {/* Call-to-Action Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 copy-kinetic ${
                isPointerActive ? 'pointer-active' : ''
              }`}
              style={{ animationDelay: '700ms' }}
            >
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium transition-all duration-300 shadow-lg"
                data-testid="button-cta-primary"
              >
                View Product Details
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-medium transition-all duration-300"
                data-testid="button-cta-secondary"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Clean divider for next section */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white z-10" />
    </section>
  );
}


