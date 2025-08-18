import { useEffect, useRef, useState, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import * as THREE from 'three';
import closedDoorImage from "@assets/IMG_6076_1755522864402.png";
import openInteriorImage from "@assets/IMG_6077_1755522864402.png";

interface WebGLDoorHeroProps {}

export default function WebGLDoorHero({}: WebGLDoorHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animationRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const [animationStage, setAnimationStage] = useState<'initial' | 'doors-opening' | 'copy-reveal' | 'settled'>('initial');
  const [doorProgress, setDoorProgress] = useState(0);
  const [copyRevealed, setCopyRevealed] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPointerActive, setIsPointerActive] = useState(false);
  const [webglFallback, setWebglFallback] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Door mesh references
  const leftDoorRef = useRef<THREE.Mesh | null>(null);
  const rightDoorRef = useRef<THREE.Mesh | null>(null);
  const backPlaneRef = useRef<THREE.Mesh | null>(null);
  const specularLineRef = useRef<THREE.Mesh | null>(null);

  // Check for reduced motion and WebGL support
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglFallback(true);
      }
    } catch (e) {
      setWebglFallback(true);
    }
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // Initialize Three.js scene
  const initScene = useCallback(() => {
    if (!canvasRef.current || webglFallback) return;

    try {
      // Scene setup
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);

      // Camera setup - perspective with luxury feel
      const camera = new THREE.PerspectiveCamera(
        50, // fov
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(0, 0, 5);

      // Renderer setup
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
        alpha: false
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Texture loader
      const textureLoader = new THREE.TextureLoader();

      // Load textures
      const closedTexture = textureLoader.load(closedDoorImage);
      const openTexture = textureLoader.load(openInteriorImage);

      // Configure textures
      [closedTexture, openTexture].forEach(texture => {
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
      });

      // Back plane (open interior) - full frame
      const backGeometry = new THREE.PlaneGeometry(6, 4);
      const backMaterial = new THREE.MeshBasicMaterial({ 
        map: openTexture,
        transparent: false
      });
      const backPlane = new THREE.Mesh(backGeometry, backMaterial);
      backPlane.position.z = -0.1;
      scene.add(backPlane);
      backPlaneRef.current = backPlane;

      // Create canvas for splitting the closed door texture
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Could not get canvas context');

      // Load closed door image to split it
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Left door texture (left half)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width / 2, img.height, 0, 0, canvas.width, canvas.height);
        
        const leftTexture = new THREE.CanvasTexture(canvas);
        leftTexture.minFilter = THREE.LinearFilter;
        leftTexture.magFilter = THREE.LinearFilter;

        // Left door geometry and material
        const leftDoorGeometry = new THREE.PlaneGeometry(3, 4);
        const leftDoorMaterial = new THREE.MeshBasicMaterial({ 
          map: leftTexture,
          transparent: true
        });
        const leftDoor = new THREE.Mesh(leftDoorGeometry, leftDoorMaterial);
        leftDoor.position.set(-1.5, 0, 0);
        leftDoor.geometry.translate(1.5, 0, 0); // Move pivot to left edge
        scene.add(leftDoor);
        leftDoorRef.current = leftDoor;

        // Right door texture (right half)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, img.width / 2, 0, img.width / 2, img.height, 0, 0, canvas.width, canvas.height);
        
        const rightTexture = new THREE.CanvasTexture(canvas);
        rightTexture.minFilter = THREE.LinearFilter;
        rightTexture.magFilter = THREE.LinearFilter;

        // Right door geometry and material
        const rightDoorGeometry = new THREE.PlaneGeometry(3, 4);
        const rightDoorMaterial = new THREE.MeshBasicMaterial({ 
          map: rightTexture,
          transparent: true
        });
        const rightDoor = new THREE.Mesh(rightDoorGeometry, rightDoorMaterial);
        rightDoor.position.set(1.5, 0, 0);
        rightDoor.geometry.translate(-1.5, 0, 0); // Move pivot to right edge
        scene.add(rightDoor);
        rightDoorRef.current = rightDoor;
      };
      img.src = closedDoorImage;

      // Specular line (center seam)
      const lineGeometry = new THREE.PlaneGeometry(0.002, 4);
      const lineMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffffff,
        transparent: true,
        opacity: 0
      });
      const specularLine = new THREE.Mesh(lineGeometry, lineMaterial);
      specularLine.position.set(0, 0, 0.01);
      scene.add(specularLine);
      specularLineRef.current = specularLine;

      // Store references
      sceneRef.current = scene;
      rendererRef.current = renderer;
      cameraRef.current = camera;

      // Handle resize
      const handleResize = () => {
        if (!camera || !renderer) return;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    } catch (error) {
      console.warn('WebGL initialization failed, falling back to CSS:', error);
      setWebglFallback(true);
    }
  }, [webglFallback]);

  // Animation loop
  const animate = useCallback(() => {
    if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;

    // Update specular line
    if (specularLineRef.current) {
      const specularOpacity = doorProgress > 0.2 && doorProgress < 0.7 ? 
        Math.sin((doorProgress - 0.2) * Math.PI / 0.5) * 0.8 : 0;
      const specularWidth = 0.002 + (specularOpacity * 0.004); // 0.002 to 0.006
      
      specularLineRef.current.scale.x = specularWidth / 0.002;
      (specularLineRef.current.material as THREE.MeshBasicMaterial).opacity = specularOpacity;
    }

    // Update door rotations
    if (leftDoorRef.current && rightDoorRef.current) {
      const leftRotation = -doorProgress * (95 * Math.PI / 180);
      const rightRotation = doorProgress * (95 * Math.PI / 180);
      
      leftDoorRef.current.rotation.y = leftRotation;
      rightDoorRef.current.rotation.y = rightRotation;
    }

    // Gentle dolly-in effect
    if (cameraRef.current && doorProgress > 0) {
      const scale = 0.98 + (doorProgress * 0.02);
      cameraRef.current.position.z = 5 / scale;
      
      // Optional micro yaw sway
      if (doorProgress < 1) {
        const sway = Math.sin(doorProgress * Math.PI * 2) * 0.02 * (1 - doorProgress);
        cameraRef.current.rotation.y = sway;
      }
    }

    rendererRef.current.render(sceneRef.current, cameraRef.current);
    animationRef.current = requestAnimationFrame(animate);
  }, [doorProgress]);

  // Start animation loop
  useEffect(() => {
    if (!webglFallback && sceneRef.current) {
      animate();
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, webglFallback]);

  // Initialize scene
  useEffect(() => {
    if (!webglFallback) {
      initScene();
    }
    
    return () => {
      // Cleanup
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initScene, webglFallback]);

  // Intersection Observer for trigger
  useEffect(() => {
    if (!sectionRef.current || animationStage !== 'initial') return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && animationStage === 'initial') {
          if (prefersReducedMotion || webglFallback) {
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
  }, [animationStage, prefersReducedMotion, webglFallback]);

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
        }, 300); // Brief pause before settling
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

  // Fallback render for reduced motion or WebGL failure
  if (prefersReducedMotion || webglFallback) {
    return (
      <section 
        ref={sectionRef}
        className="relative h-screen w-full overflow-hidden hero-reduced-motion"
        style={{ paddingTop: '120px' }}
      >
        {/* Fallback background with crossfade */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{ 
            backgroundImage: `url(${animationStage === 'settled' ? openInteriorImage : closedDoorImage})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
          }}
        />
        
        {/* Copy Overlay */}
        <div className={`absolute inset-0 z-20 flex items-center ${copyRevealed || animationStage === 'settled' ? 'copy-overlay-visible' : 'copy-overlay-hidden'}`}>
          <div className="max-w-[1120px] mx-auto px-6 md:px-8 w-full">
            <div className="max-w-2xl space-y-8 lg:space-y-12">
              <div className="space-y-6">
                <h1 className="font-playfair text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-tight text-white drop-shadow-lg">
                  Built-in Luxury Shoe Care System
                </h1>
                <p className="text-gray-200 text-lg lg:text-xl leading-relaxed font-light max-w-lg drop-shadow-md">
                  Museum-quality display meets AI-powered maintenance for the modern luxury home.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium">
                  View Product Details
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-medium">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white z-10" />
      </section>
    );
  }

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      style={{ paddingTop: '120px' }}
    >
      {/* WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 1
        }}
      />

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