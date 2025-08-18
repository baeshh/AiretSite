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
    <section className="bg-black py-24 lg:py-32 relative">
      {/* Section Divider */}
      <div className="section-divider absolute top-0 bg-white opacity-20"></div>
      
      <div className="max-w-container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-20">
          <h2 className="font-playfair text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tighter leading-tight">
            Innovation Beyond Traditional Care
          </h2>
          <div className="editorial-quote text-gray-300 max-w-3xl border-l-white/30">
            Redefining luxury shoe maintenance with AI-powered precision, 
            ultra-quiet operation, and museum-quality presentation.
          </div>
        </div>
        
        {/* Innovation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-white p-10 hover:shadow-[0_20px_80px_rgba(255,255,255,0.1)] transition-all duration-500 animate-fade-in border border-white/10"
              style={{ animationDelay: `${index * 0.2}s` }}
              data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="text-left space-y-6">
                <div className="w-12 h-12 bg-black flex items-center justify-center">
                  <feature.icon className="text-white w-6 h-6" />
                </div>
                <h3 className="font-playfair text-2xl font-bold tracking-tight">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {feature.description}
                </p>
                <div className="pt-6 border-t border-gray-200">
                  <span className="text-xs uppercase tracking-wider font-medium text-gray-500">{feature.comparison}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
