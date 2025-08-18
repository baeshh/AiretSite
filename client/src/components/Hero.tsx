import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-background py-section-lg">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="font-playfair text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Built-in Luxury Shoe Care System
              </h1>
              <p className="text-body text-muted-foreground font-light leading-relaxed max-w-lg">
                Museum-grade Display meets Smart Care.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground px-8 py-4 text-lg hover:opacity-90 transition-opacity"
                data-testid="button-book-ces-demo"
              >
                Book a Demo at CES
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary px-8 py-4 text-lg hover:opacity-70 transition-opacity"
                data-testid="button-download-sheet"
              >
                Download Product Sheet
              </Button>
            </div>
            
            <div className="pt-8">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>AI Scheduling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>UV-C Sanitization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Museum Display</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Product Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="/images/IMG_6076.png" 
                alt="AIRET luxury built-in shoe care system front view" 
                className="w-full h-auto rounded-lg shadow-2xl"
                data-testid="img-hero-product"
                onError={(e) => {
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
