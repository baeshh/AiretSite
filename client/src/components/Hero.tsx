import { Button } from "@/components/ui/button";
import HeroDoorMask from "./HeroDoorMask";

export default function Hero() {
  return (
    <section className="bg-white relative min-h-[90vh] lg:min-h-[100vh] flex items-center pt-[120px]">
      
      <div className="max-w-[1120px] mx-auto px-6 md:px-8 w-full">
        
        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Content (editorial magazine layout) */}
          <div className="space-y-8 lg:space-y-12">
            
            {/* Main Headline - Editorial Style */}
            <div className="space-y-6">
              <h1 className="font-playfair text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-black slide-in-left">
                Built-in Luxury 
                <br />
                Shoe Care System
              </h1>
              
              {/* Editorial Subtext */}
              <p className="text-[#6B7280] text-[17px] leading-relaxed font-light slide-in-left max-w-md" style={{ animationDelay: '0.2s' }}>
                Museum-quality display meets AI-powered maintenance for the modern luxury home.
              </p>
            </div>
            
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 slide-in-left" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="bg-black text-white hover:opacity-90 px-8 py-4 font-medium transition-opacity duration-300"
                data-testid="button-cta-primary"
              >
                View Product Details
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white border-black text-black hover:bg-black hover:text-white px-8 py-4 font-medium transition-all duration-300"
                data-testid="button-cta-secondary"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
          
          {/* Right Column - Product Image with Door Mask Effect */}
          <div className="lg:w-[45%] lg:ml-auto">
            <HeroDoorMask className="slide-in-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
