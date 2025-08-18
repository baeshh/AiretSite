import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "AI Scheduling",
    description: "Predictive maintenance cycles based on usage patterns"
  },
  {
    title: "UV-C + Active Airflow",
    description: "Medical-grade sanitization with gentle air circulation"
  },
  {
    title: "Dehumidify & Dry",
    description: "Precision climate control for optimal shoe preservation"
  },
  {
    title: "Showcase Trays",
    description: "Illuminated display trays with museum-quality lighting"
  },
  {
    title: "Multi-tier Storage",
    description: "Configurable compartments for diverse footwear collections"
  },
  {
    title: "App Control",
    description: "Remote monitoring and scheduling via mobile application"
  }
];

export default function ProductShowcase() {
  return (
    <section className="bg-white py-24 lg:py-32 relative">
      {/* Section Divider */}
      <div className="section-divider absolute top-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Showcase Image - Full Width Cinematic */}
        <div className="mb-24">
          <img 
            src="/images/IMG_6077.png" 
            alt="AIRET luxury shoe care system open view showing multiple storage compartments" 
            className="w-full h-auto shadow-[0_40px_120px_rgba(0,0,0,0.15)] product-hover-zoom"
            data-testid="img-product-showcase"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900";
            }}
          />
        </div>
        
        {/* Content Container */}
        <div className="max-w-container mx-auto">
          {/* Feature Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Features List */}
            <div className="space-y-12">
              <h2 className="font-playfair text-5xl font-bold tracking-tighter text-left">
                Six Pillars of Excellence
              </h2>
              
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div 
                    key={feature.title}
                    className="flex items-start space-x-5 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0 mt-3"></div>
                    <div>
                      <h3 className="font-playfair text-xl font-semibold mb-3 tracking-tight">{feature.title}</h3>
                      <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Detail Image - 3-column grid effect */}
            <div className="grid grid-cols-1 gap-6">
              <img 
                src="/images/IMG_6078.png" 
                alt="AIRET luxury shoe care system detail view showing illuminated display trays" 
                className="w-full h-auto shadow-[0_20px_80px_rgba(0,0,0,0.12)] product-hover-zoom"
                data-testid="img-product-detail"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
