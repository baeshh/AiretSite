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

  // Scroll-driven animation tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Hero pinning - pin until 60vh of scroll
      const maxPinScroll = windowHeight * 0.6;
      const pinProgress = Math.min(scrollY / maxPinScroll, 1);
      setScrollProgress(pinProgress);
      
      if (prefersReducedMotion) {
        // Simple fade for reduced motion
        setKenBurnsProgress(Math.min(scrollY / (windowHeight * 0.4), 1));
        setWordVisibility([1, 1, 1, 1, 1]);
        setSubtextVisible(1);
        setCtasVisible(1);
        return;
      }
      
      // Ken Burns progress (0 → 40vh)
      const kenBurnsMax = windowHeight * 0.4;
      setKenBurnsProgress(Math.min(scrollY / kenBurnsMax, 1));
      
      // Glass pane progress (0 → 60vh)
      const glassPaneMax = windowHeight * 0.6;
      setGlassPaneProgress(Math.min(scrollY / glassPaneMax, 1));
      
      // Word visibility (staggered from 10vh to 40vh)
      const words = [
        Math.min(Math.max((scrollY - windowHeight * 0.1) / (windowHeight * 0.05), 0), 1), // 10vh
        Math.min(Math.max((scrollY - windowHeight * 0.15) / (windowHeight * 0.05), 0), 1), // 15vh
        Math.min(Math.max((scrollY - windowHeight * 0.2) / (windowHeight * 0.05), 0), 1), // 20vh
        Math.min(Math.max((scrollY - windowHeight * 0.25) / (windowHeight * 0.05), 0), 1), // 25vh
        Math.min(Math.max((scrollY - windowHeight * 0.3) / (windowHeight * 0.05), 0), 1), // 30vh
      ];
      setWordVisibility(words);
      
      // Subtext at 40vh
      const subtextStart = windowHeight * 0.4;
      setSubtextVisible(Math.min(Math.max((scrollY - subtextStart) / (windowHeight * 0.05), 0), 1));
      
      // CTAs at 50vh
      const ctasStart = windowHeight * 0.5;
      setCtasVisible(Math.min(Math.max((scrollY - ctasStart) / (windowHeight * 0.05), 0), 1));
      
      // Trigger specular sweep when last word appears
      if (words[4] >= 0.8 && !specularTriggered) {
        setSpecularTriggered(true);
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

      {/* Scroll-Driven Glass Pane Overlay */}
      {!prefersReducedMotion && (
        <>
          {/* Glass Pane 1 */}
          <div 
            className="glass-pane glass-pane-1 scroll-driven"
            style={{
              transform: `perspective(2500px) rotateY(-6deg) rotateX(1deg) translateX(${glassPaneProgress * -38}vw)`,
              opacity: Math.max(1 - glassPaneProgress * 1.5, 0)
            }}
          />
          
          {/* Glass Pane 2 */}
          <div 
            className="glass-pane glass-pane-2 scroll-driven"
            style={{
              transform: `perspective(2500px) rotateY(7deg) rotateX(-0.5deg) translateX(${glassPaneProgress * 35}vw)`,
              opacity: Math.max(1 - (glassPaneProgress - 0.1) * 1.5, 0)
            }}
          />
          
          {/* Glass Pane 3 */}
          <div 
            className="glass-pane glass-pane-3 scroll-driven"
            style={{
              transform: `perspective(2500px) rotateY(-5deg) rotateX(2deg) translateX(${glassPaneProgress * -32}vw)`,
              opacity: Math.max(1 - (glassPaneProgress - 0.15) * 1.5, 0)
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
                      transform: `translateY(${(1 - wordVisibility[0]) * 16}px)`
                    }}
                  >
                    Built-in
                  </span>{' '}
                  <span 
                    className="scroll-word-reveal"
                    style={{ 
                      opacity: wordVisibility[1],
                      transform: `translateY(${(1 - wordVisibility[1]) * 16}px)`
                    }}
                  >
                    Luxury
                  </span>
                  <br />
                  <span 
                    className="scroll-word-reveal"
                    style={{ 
                      opacity: wordVisibility[2],
                      transform: `translateY(${(1 - wordVisibility[2]) * 16}px)`
                    }}
                  >
                    Shoe
                  </span>{' '}
                  <span 
                    className="scroll-word-reveal"
                    style={{ 
                      opacity: wordVisibility[3],
                      transform: `translateY(${(1 - wordVisibility[3]) * 16}px)`
                    }}
                  >
                    Care
                  </span>{' '}
                  <span 
                    className="scroll-word-reveal"
                    style={{ 
                      opacity: wordVisibility[4],
                      transform: `translateY(${(1 - wordVisibility[4]) * 16}px)`
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
                  transform: `translateY(${(1 - subtextVisible) * 14}px)`
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
                transform: `translateY(${(1 - ctasVisible) * 12}px)`
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


