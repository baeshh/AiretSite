import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from 'react';
import heroImage from "@assets/IMG_6076_1755522864402.png";

export default function Hero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [kenBurnsProgress, setKenBurnsProgress] = useState(0);
  const [glassPaneProgress, setGlassPaneProgress] = useState(0);
  const [wordVisibility, setWordVisibility] = useState<number[]>([0, 0, 0, 0, 0]);
  const [subtextVisible, setSubtextVisible] = useState(0);
  const [ctasVisible, setCtasVisible] = useState(0);
  const [specularTriggered, setSpecularTriggered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  // Scroll-out close animation tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Hero pinning - pin until 100vh of scroll
      const maxPinScroll = windowHeight;
      const pinProgress = Math.min(scrollY / maxPinScroll, 1);
      setScrollProgress(pinProgress);
      
      if (prefersReducedMotion) {
        // Simple fade for reduced motion - fade out text and crossfade to white
        const fadeProgress = Math.min(scrollY / (windowHeight * 0.8), 1);
        setKenBurnsProgress(1 - fadeProgress);
        setWordVisibility([1 - fadeProgress, 1 - fadeProgress, 1 - fadeProgress, 1 - fadeProgress, 1 - fadeProgress]);
        setSubtextVisible(1 - fadeProgress);
        setCtasVisible(1 - fadeProgress);
        setGlassPaneProgress(fadeProgress);
        return;
      }
      
      // Initial state (0vh): Hero fully open
      if (scrollY === 0) {
        setKenBurnsProgress(1);
        setGlassPaneProgress(0); // No panels visible
        setWordVisibility([1, 1, 1, 1, 1]);
        setSubtextVisible(1);
        setCtasVisible(1);
        if (!specularTriggered) {
          setSpecularTriggered(true);
        }
        return;
      }
      
      // Scroll out phase (20vh → 100vh): Panels close, content fades
      const scrollOutStart = windowHeight * 0.2;
      const scrollOutRange = windowHeight * 0.8;
      
      if (scrollY >= scrollOutStart) {
        const closeProgress = Math.min((scrollY - scrollOutStart) / scrollOutRange, 1);
        
        // Ken Burns stays at full
        setKenBurnsProgress(1);
        
        // Panels slide inward (0 → 1)
        setGlassPaneProgress(closeProgress);
        
        // Content fades out with downward drift
        const fadeOut = 1 - closeProgress;
        setWordVisibility([fadeOut, fadeOut, fadeOut, fadeOut, fadeOut]);
        setSubtextVisible(fadeOut);
        setCtasVisible(fadeOut);
      } else {
        // Before 20vh: maintain fully open state
        setKenBurnsProgress(1);
        setGlassPaneProgress(0);
        setWordVisibility([1, 1, 1, 1, 1]);
        setSubtextVisible(1);
        setCtasVisible(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefersReducedMotion, specularTriggered]);

  const isPinned = scrollProgress < 1;

  return (
    <section 
      ref={sectionRef}
      className={`relative h-screen w-full overflow-hidden ${
        isPinned ? 'fixed top-0 left-0 z-10' : ''
      } ${prefersReducedMotion ? 'hero-reduced-motion' : ''}`}
    >
      {/* Scroll-Driven Ken Burns Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scroll-ken-burns"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          transform: `scale(${0.98 + (kenBurnsProgress * 0.02)}) translateX(${kenBurnsProgress * 3}%)`,
          transition: prefersReducedMotion ? 'opacity 800ms ease-out' : 'none'
        }}
      />

      {/* Scroll-Out Closing Panels */}
      {!prefersReducedMotion && (
        <>
          {/* Left Closing Panel */}
          <div 
            className="closing-panel closing-panel-left scroll-driven"
            style={{
              transform: `translateX(${-40 + (glassPaneProgress * 40)}vw)`,
              opacity: glassPaneProgress > 0 ? 0.95 : 0
            }}
          />
          
          {/* Right Closing Panel */}
          <div 
            className="closing-panel closing-panel-right scroll-driven"
            style={{
              transform: `translateX(${40 - (glassPaneProgress * 40)}vw)`,
              opacity: glassPaneProgress > 0 ? 0.95 : 0
            }}
          />
        </>
      )}

      {/* Reduced Motion Fallback */}
      {prefersReducedMotion && glassPaneProgress > 0 && (
        <div 
          className="absolute inset-0 bg-white z-15"
          style={{ opacity: glassPaneProgress }}
        />
      )}

      {/* Copy Overlay */}
      <div className="absolute inset-0 z-20 flex items-center" style={{ paddingTop: '120px' }}>
        <div className="max-w-[1120px] mx-auto px-6 md:px-8 w-full">
          <div className="max-w-2xl space-y-8 lg:space-y-12">
            
            {/* Scroll-Revealed Headline */}
            <div className="space-y-8">
              <div className="relative">
                <h1 className="font-playfair text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-tight text-white drop-shadow-lg">
                  <span 
                    className="scroll-word-reveal"
                    style={{ 
                      opacity: wordVisibility[0],
                      transform: `translateY(${(1 - wordVisibility[0]) * 20}px)`
                    }}
                  >
                    Built-in
                  </span>{' '}
                  <span 
                    className="scroll-word-reveal"
                    style={{ 
                      opacity: wordVisibility[1],
                      transform: `translateY(${(1 - wordVisibility[1]) * 20}px)`
                    }}
                  >
                    Luxury
                  </span>
                  <br />
                  <span 
                    className="scroll-word-reveal"
                    style={{ 
                      opacity: wordVisibility[2],
                      transform: `translateY(${(1 - wordVisibility[2]) * 20}px)`
                    }}
                  >
                    Shoe
                  </span>{' '}
                  <span 
                    className="scroll-word-reveal"
                    style={{ 
                      opacity: wordVisibility[3],
                      transform: `translateY(${(1 - wordVisibility[3]) * 20}px)`
                    }}
                  >
                    Care
                  </span>{' '}
                  <span 
                    className="scroll-word-reveal"
                    style={{ 
                      opacity: wordVisibility[4],
                      transform: `translateY(${(1 - wordVisibility[4]) * 20}px)`
                    }}
                  >
                    System
                  </span>
                </h1>
                
                {/* Specular Sweep */}
                {specularTriggered && !prefersReducedMotion && scrollProgress < 0.2 && (
                  <div className="specular-sweep-horizontal absolute top-0 left-0 w-full h-full pointer-events-none" />
                )}
              </div>
              
              {/* Scroll-Out Subtext */}
              <p 
                className="text-gray-200 text-xl lg:text-2xl leading-relaxed font-light max-w-lg drop-shadow-md scroll-text-reveal"
                style={{ 
                  opacity: subtextVisible,
                  transform: `translateY(${(1 - subtextVisible) * 20}px)`
                }}
              >
                Museum-quality display meets AI-powered maintenance for the modern luxury home.
              </p>
            </div>
            
            {/* Scroll-Out CTAs */}
            <div 
              className="flex flex-col sm:flex-row gap-6 scroll-ctas-reveal"
              style={{ 
                opacity: ctasVisible,
                transform: `translateY(${(1 - ctasVisible) * 20}px)`
              }}
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


