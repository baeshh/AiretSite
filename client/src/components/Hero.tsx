import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from 'react';
import heroImage from "@assets/IMG_6076_1755522864402.png";

export default function Hero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'white' | 'grab' | 'unveil' | 'copy' | 'settled'>('white');
  const [editorialFrame, setEditorialFrame] = useState(false);
  const [kenBurnsActive, setKenBurnsActive] = useState(false);
  const [panelsVisible, setPanelsVisible] = useState(false);
  const [panelsAnimated, setPanelsAnimated] = useState(false);
  const [specularActive, setSpecularActive] = useState(false);
  const [headlineGroups, setHeadlineGroups] = useState<number[]>([0, 0]);
  const [subtextVisible, setSubtextVisible] = useState(0);
  const [ctasVisible, setCtasVisible] = useState(0);
  const [dollyInActive, setDollyInActive] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
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

  // CES 2025 Luxury Sequence - Precise timing
  useEffect(() => {
    if (!sectionRef.current || hasTriggered) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          
          if (prefersReducedMotion) {
            // Reduced motion: simple crossfade sequence
            setAnimationPhase('grab');
            setEditorialFrame(true);
            setTimeout(() => {
              setHeadlineGroups([1, 1]);
              setSubtextVisible(1);
              setCtasVisible(1);
              setAnimationPhase('settled');
            }, 800);
            return;
          }

          // 1) Initial Grab (0.0–0.9s)
          setTimeout(() => {
            setAnimationPhase('grab');
            setKenBurnsActive(true);
            // Editorial frame appears within 200ms
            setTimeout(() => setEditorialFrame(true), 200);
          }, 0);

          // 2) Showcase Unveil (0.9–2.2s)
          setTimeout(() => {
            setAnimationPhase('unveil');
            setPanelsVisible(true);
            // Panels slide out with stagger
            setTimeout(() => {
              setPanelsAnimated(true);
              setSpecularActive(true);
            }, 50);
          }, 900);

          // 3) Copy Reveal (2.2–4.8s)
          setTimeout(() => {
            setAnimationPhase('copy');
            setDollyInActive(true);
            // Headline group 1
            setTimeout(() => setHeadlineGroups([1, 0]), 0);
            // Headline group 2
            setTimeout(() => setHeadlineGroups([1, 1]), 80);
            // Subtext
            setTimeout(() => setSubtextVisible(1), 280);
            // CTAs
            setTimeout(() => setCtasVisible(1), 480);
          }, 2200);

          // 4) Settle (4.8s+)
          setTimeout(() => {
            setAnimationPhase('settled');
          }, 4800);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasTriggered, prefersReducedMotion]);

  const isSettled = animationPhase === 'settled';

  return (
    <section 
      ref={sectionRef}
      className={`relative h-screen w-full overflow-hidden ${
        prefersReducedMotion ? 'hero-reduced-motion' : ''
      } ces-luxury-hero`}
    >
      {/* Initial White Screen */}
      {animationPhase === 'white' && (
        <div className="absolute inset-0 bg-white z-20" />
      )}

      {/* Hero Image with Ken Burns + Dolly */}
      {animationPhase !== 'white' && (
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat ces-hero-image ${
            kenBurnsActive ? 'ken-burns-ces' : ''
          } ${dollyInActive ? 'dolly-in-ces' : ''}`}
          style={{ 
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
          }}
        />
      )}

      {/* Editorial Frame */}
      {editorialFrame && (
        <div className="editorial-frame absolute inset-0 pointer-events-none z-10" />
      )}

      {/* Glass Showcase Panels */}
      {panelsVisible && !prefersReducedMotion && (
        <>
          <div 
            className={`glass-showcase glass-showcase-left ${panelsAnimated ? 'animated' : ''}`}
          />
          <div 
            className={`glass-showcase glass-showcase-right ${panelsAnimated ? 'animated' : ''}`}
          />
          <div 
            className={`glass-showcase glass-showcase-center ${panelsAnimated ? 'animated' : ''}`}
          />
        </>
      )}

      {/* Specular Sweep */}
      {specularActive && !prefersReducedMotion && (
        <div className="specular-sweep-ces absolute inset-0 pointer-events-none z-12" />
      )}

      {/* Copy Overlay */}
      <div className="absolute inset-0 z-20 flex items-center" style={{ paddingTop: '120px' }}>
        <div className="max-w-[1120px] mx-auto px-6 md:px-8 w-full">
          <div className="max-w-2xl space-y-8 lg:space-y-12">
            
            {/* CES Luxury Headlines */}
            <div className="space-y-8">
              <div className="relative">
                <h1 className="font-playfair text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-tight text-white drop-shadow-lg">
                  <span 
                    className={`headline-group-1 ${headlineGroups[0] > 0 ? 'revealed' : ''}`}
                  >
                    Built-in Luxury
                  </span>
                  <br />
                  <span 
                    className={`headline-group-2 ${headlineGroups[1] > 0 ? 'revealed' : ''}`}
                  >
                    Shoe Care System
                  </span>
                </h1>
              </div>
              
              {/* Editorial Subtext */}
              <p 
                className={`text-white text-lg leading-relaxed font-light max-w-lg ces-subtext ${
                  subtextVisible > 0 ? 'revealed' : ''
                }`}
                style={{ fontSize: '17px' }}
              >
                Museum-quality display meets AI-powered maintenance for the modern luxury home.
              </p>
            </div>
            
            {/* Editorial CTAs */}
            <div 
              className={`flex flex-col sm:flex-row gap-6 ces-ctas ${
                ctasVisible > 0 ? 'revealed' : ''
              }`}
            >
              <Button 
                size="lg" 
                className="bg-black text-white hover:opacity-90 px-10 py-5 text-lg font-medium transition-opacity duration-300 ces-btn-primary"
                data-testid="button-cta-primary"
              >
                View Product Details
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white border border-black text-black hover:bg-black hover:text-white px-10 py-5 text-lg font-medium transition-all duration-300 ces-btn-secondary"
                data-testid="button-cta-secondary"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>



      {/* Editorial Divider */}
      {isSettled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-black z-10" />
      )}
    </section>
  );
}


