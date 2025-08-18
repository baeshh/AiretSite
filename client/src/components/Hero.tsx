import { Button } from "@/components/ui/button";
import heroImage from "@assets/IMG_6076_1755522864402.png";

export default function Hero() {
  return (
    <section className="bg-white pt-32 pb-0 min-h-screen flex items-center relative overflow-hidden">
      {/* Section Divider */}
      <div className="section-divider absolute top-0"></div>
      
      <div className="max-w-container mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[calc(100vh-8rem)]">
          
          {/* Left Column - Content (45% width with generous whitespace) */}
          <div className="space-y-16 fade-in-up lg:max-w-lg">
            <div className="space-y-12">
              <h1 className="font-playfair text-6xl lg:text-7xl font-bold tracking-tighter leading-none text-left">
                Built-in Luxury Shoe Care System
              </h1>
              <div className="editorial-quote text-xl">
                Museum-grade Display meets Smart Care.
              </div>
            </div>
            
            <div className="flex flex-col gap-6 max-w-sm">
              <Button 
                size="lg" 
                className="btn-primary px-10 py-4 text-lg font-medium tracking-wide"
                data-testid="button-book-ces-demo"
              >
                Book a Demo at CES
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="btn-secondary px-10 py-4 text-lg font-medium tracking-wide"
                data-testid="button-download-sheet"
              >
                Download Product Sheet
              </Button>
            </div>
            
            <div className="pt-16 space-y-6">
              <div className="text-xs uppercase tracking-wider font-medium text-muted-foreground">
                Core Features
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm font-light">
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                  <span>AI Scheduling</span>
                </div>
                <div className="flex items-center space-x-3 text-sm font-light">
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                  <span>UV-C Sanitization</span>
                </div>
                <div className="flex items-center space-x-3 text-sm font-light">
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                  <span>Museum Display</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Product Image (cinematic showcase) */}
          <div className="slide-in-right">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="AIRET luxury built-in shoe care system front view" 
                className="w-full h-auto shadow-[0_20px_80px_rgba(0,0,0,0.12)] product-hover-zoom"
                data-testid="img-hero-product"
                onLoad={() => console.log('Hero image loaded successfully')}
                onError={(e) => {
                  console.error('Failed to load hero image:', e);
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
