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
    <section className="bg-background py-section-lg">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        
        {/* Main Showcase Image */}
        <div className="mb-16">
          <img 
            src="/images/IMG_6077.png" 
            alt="AIRET luxury shoe care system open view showing multiple storage compartments" 
            className="w-full h-auto rounded-xl shadow-2xl"
            data-testid="img-product-showcase"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900";
            }}
          />
        </div>
        
        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Features List */}
          <div className="space-y-8">
            <h2 className="font-playfair text-4xl font-semibold">
              Six Pillars of Excellence
            </h2>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex items-start space-x-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <CheckCircle className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Detail Image */}
          <div>
            <img 
              src="/images/IMG_6078.png" 
              alt="AIRET luxury shoe care system detail view showing illuminated display trays" 
              className="w-full h-auto rounded-xl shadow-xl"
              data-testid="img-product-detail"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
