import { Brain, Wind, Gem } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Scheduling",
    description: "Learns your routine; runs when you don't. Intelligent care cycles adapt to your lifestyle and shoe usage patterns.",
    comparison: "vs manual timers"
  },
  {
    icon: Wind,
    title: "Ultra-quiet Airflow",
    description: "Professional care, minimal noise. Advanced airflow engineering ensures silent operation for luxury living spaces.",
    comparison: "vs noisy appliances"
  },
  {
    icon: Gem,
    title: "Integrated Display",
    description: "Showcase and preserve in one. Museum-quality lighting and climate control transform storage into exhibition.",
    comparison: "vs plain storage"
  }
];

export default function Innovation() {
  return (
    <section className="bg-muted py-section-lg">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-semibold mb-6">
            Innovation Beyond Traditional Care
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Redefining luxury shoe maintenance with AI-powered precision, 
            ultra-quiet operation, and museum-quality presentation.
          </p>
        </div>
        
        {/* Innovation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-background rounded-lg p-8 border border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
              data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center">
                  <feature.icon className="text-primary-foreground text-2xl w-8 h-8" />
                </div>
                <h3 className="font-playfair text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <span className="text-sm font-medium">{feature.comparison}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
