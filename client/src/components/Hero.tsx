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

  // Scroll-driven open and close animation tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Hero pinning - pin until 100vh of scroll
      const maxPinScroll = windowHeight;
      const pinProgress = Math.min(scrollY / maxPinScroll, 1);
      setScrollProgress(pinProgress);
      
      if (prefersReducedMotion) {
        // Simple crossfade for reduced motion
        const midPoint = windowHeight * 0.5;
        if (scrollY < midPoint) {
          setKenBurnsProgress(scrollY / midPoint);
        } else {
          setKenBurnsProgress(2 - (scrollY / midPoint));
        }
        setWordVisibility([1, 1, 1, 1, 1]);
        setSubtextVisible(1);
        setCtasVisible(1);
        return;
      }
      
      // Three phases: Entry (0-20vh), Stable (20-50vh), Exit (50-100vh)
      
      // Entry Phase (0 → 20vh): Panels open, content reveals
      if (scrollY <= windowHeight * 0.2) {
        const entryProgress = scrollY / (windowHeight * 0.2);
        
        // Ken Burns during entry
        setKenBurnsProgress(entryProgress);
        
        // Glass panels slide outward (0 → 1)
        setGlassPaneProgress(entryProgress);
        
        // Content fades in with stagger
        const baseDelay = 0.3; // Start revealing at 30% of entry
        const words = [
          Math.min(Math.max((entryProgress - baseDelay) / 0.1, 0), 1),
          Math.min(Math.max((entryProgress - baseDelay - 0.05) / 0.1, 0), 1),
          Math.min(Math.max((entryProgress - baseDelay - 0.1) / 0.1, 0), 1),
          Math.min(Math.max((entryProgress - baseDelay - 0.15) / 0.1, 0), 1),
          Math.min(Math.max((entryProgress - baseDelay - 0.2) / 0.1, 0), 1),
        ];
        setWordVisibility(words);
        
        setSubtextVisible(Math.min(Math.max((entryProgress - 0.6) / 0.2, 0), 1));
        setCtasVisible(Math.min(Math.max((entryProgress - 0.8) / 0.2, 0), 1));
        
        // Trigger specular sweep when entry is 80% complete
        if (entryProgress >= 0.8 && !specularTriggered) {
          setSpecularTriggered(true);
        }
      }
      
      // Stable Phase (20vh → 50vh): Hold steady
      else if (scrollY <= windowHeight * 0.5) {
        // Maintain open state
        setKenBurnsProgress(1);
        setGlassPaneProgress(1);
        setWordVisibility([1, 1, 1, 1, 1]);
        setSubtextVisible(1);
        setCtasVisible(1);
      }
      
      // Exit Phase (50vh → 100vh): Panels close, content fades out
      else {
        const exitStart = windowHeight * 0.5;
        const exitRange = windowHeight * 0.5;
        const exitProgress = (scrollY - exitStart) / exitRange;
        
        // Maintain Ken Burns at full
        setKenBurnsProgress(1);
        
        // Glass panels slide back inward (1 → 0)
        setGlassPaneProgress(1 - exitProgress);
        
        // Content fades out with downward drift
        const fadeOut = 1 - exitProgress;
        setWordVisibility([fadeOut, fadeOut, fadeOut, fadeOut, fadeOut]);
        setSubtextVisible(fadeOut);
        setCtasVisible(fadeOut);
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

      {/* Scroll-Driven Glass Door Panels */}
      {!prefersReducedMotion && (
        <>
          {/* Left Door Panel */}
          <div 
            className="glass-door glass-door-left scroll-driven"
            style={{
              transform: `perspective(2500px) rotateY(-3deg) translateX(${glassPaneProgress * -30}vw)`,
              opacity: glassPaneProgress === 1 ? 0 : 0.85
            }}
          />
          
          {/* Right Door Panel */}
          <div 
            className="glass-door glass-door-right scroll-driven"
            style={{
              transform: `perspective(2500px) rotateY(3deg) translateX(${glassPaneProgress * 30}vw)`,
              opacity: glassPaneProgress === 1 ? 0 : 0.85
            }}
          />
        </>
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
                      transform: `translateY(${wordVisibility[0] < 1 ? (1 - wordVisibility[0]) * 16 : (scrollProgress > 0.5 ? (scrollProgress - 0.5) * 2 * 25 : 0)}px)`
                    }}
                  >
                    Built-in
                  </span>{' '}
                  <span 
                    className="scroll-word-reveal"
                    style={{ 
                      opacity: wordVisibility[1],
                      transform: `translateY(${wordVisibility[1] < 1 ? (1 - wordVisibility[1]) * 16 : (scrollProgress > 0.5 ? (scrollProgress - 0.5) * 2 * 25 : 0)}px)`
                    }}
                  >
                    Luxury
                  </span>
                  <br />
                  <span 
                    className="scroll-word-reveal"
                    style={{ 
                      opacity: wordVisibility[2],
                      transform: `translateY(${wordVisibility[2] < 1 ? (1 - wordVisibility[2]) * 16 : (scrollProgress > 0.5 ? (scrollProgress - 0.5) * 2 * 25 : 0)}px)`
                    }}
                  >
                    Shoe
                  </span>{' '}
                  <span 
                    className="scroll-word-reveal"
                    style={{ 
                      opacity: wordVisibility[3],
                      transform: `translateY(${wordVisibility[3] < 1 ? (1 - wordVisibility[3]) * 16 : (scrollProgress > 0.5 ? (scrollProgress - 0.5) * 2 * 25 : 0)}px)`
                    }}
                  >
                    Care
                  </span>{' '}
                  <span 
                    className="scroll-word-reveal"
                    style={{ 
                      opacity: wordVisibility[4],
                      transform: `translateY(${wordVisibility[4] < 1 ? (1 - wordVisibility[4]) * 16 : (scrollProgress > 0.5 ? (scrollProgress - 0.5) * 2 * 25 : 0)}px)`
                    }}
                  >
                    System
                  </span>
                </h1>
                
                {/* Specular Sweep */}
                {specularTriggered && !prefersReducedMotion && (
                  <div className="specular-sweep-horizontal absolute top-0 left-0 w-full h-full pointer-events-none" />
                )}
              </div>
              
              {/* Scroll-Revealed Subtext */}
              <p 
                className="text-gray-200 text-xl lg:text-2xl leading-relaxed font-light max-w-lg drop-shadow-md scroll-text-reveal"
                style={{ 
                  opacity: subtextVisible,
                  transform: `translateY(${subtextVisible < 1 ? (1 - subtextVisible) * 14 : (scrollProgress > 0.5 ? (scrollProgress - 0.5) * 2 * 22 : 0)}px)`
                }}
              >
                Museum-quality display meets AI-powered maintenance for the modern luxury home.
              </p>
            </div>
            
            {/* Scroll-Revealed CTAs */}
            <div 
              className="flex flex-col sm:flex-row gap-6 scroll-ctas-reveal"
              style={{ 
                opacity: ctasVisible,
                transform: `translateY(${ctasVisible < 1 ? (1 - ctasVisible) * 12 : (scrollProgress > 0.5 ? (scrollProgress - 0.5) * 2 * 20 : 0)}px)`
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


