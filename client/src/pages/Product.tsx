import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Shield, Droplets, Eye, Archive, Smartphone } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Smart Scheduling",
    description: "Machine learning algorithms analyze usage patterns and environmental conditions to optimize maintenance cycles automatically."
  },
  {
    icon: Shield,
    title: "UV-C + Active Airflow",
    description: "Medical-grade UV-C sanitization combined with precision airflow engineering eliminates odors and bacteria."
  },
  {
    icon: Droplets,
    title: "Dehumidify & Dry",
    description: "Advanced climate control maintains optimal humidity levels while gentle drying preserves leather and fabric integrity."
  },
  {
    icon: Eye,
    title: "Showcase Trays",
    description: "Museum-quality LED lighting with adjustable intensity highlights your collection while providing preservation benefits."
  },
  {
    icon: Archive,
    title: "Multi-tier Storage",
    description: "Configurable compartments with adjustable sizing accommodate everything from sneakers to boots with custom organization."
  },
  {
    icon: Smartphone,
    title: "App Control",
    description: "Comprehensive mobile application provides remote monitoring, scheduling, and detailed maintenance reports."
  }
];

const specifications = [
  { category: "Dimensions", specs: [
    { label: "Width", value: "36 inches (91.4 cm)" },
    { label: "Height", value: "84 inches (213.4 cm)" },
    { label: "Depth", value: "24 inches (61 cm)" }
  ]},
  { category: "Capacity", specs: [
    { label: "Total Pairs", value: "48-60 pairs" },
    { label: "Display Trays", value: "6 illuminated trays" },
    { label: "Storage Tiers", value: "8 adjustable levels" }
  ]},
  { category: "Technology", specs: [
    { label: "UV-C Wavelength", value: "254 nm medical-grade" },
    { label: "Air Circulation", value: "<35 dB ultra-quiet" },
    { label: "Humidity Control", value: "45-55% RH ±2%" },
    { label: "Temperature Range", value: "65-75°F (18-24°C)" }
  ]},
  { category: "Power & Connectivity", specs: [
    { label: "Power Consumption", value: "120W average" },
    { label: "Voltage", value: "110-240V AC" },
    { label: "Connectivity", value: "Wi-Fi, Bluetooth 5.0" },
    { label: "App Compatibility", value: "iOS 14+, Android 10+" }
  ]}
];

export default function Product() {
  return (
    <>
      <SEO 
        title="AIRET Product Features & Specifications | Luxury Shoe Care System"
        description="Discover AIRET's comprehensive features: AI scheduling, UV-C sanitization, climate control, and museum-quality display. Technical specifications and luxury design details."
      />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-background py-section-lg">
          <div className="max-w-container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="font-playfair text-4xl lg:text-5xl font-semibold mb-6">
                AIRET Product Overview
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A revolutionary built-in system that transforms luxury shoe storage 
                through intelligent care, climate control, and museum-quality presentation.
              </p>
            </div>
            
            {/* Main Product Image */}
            <div className="mb-16">
              <img 
                src="/images/IMG_6077.png" 
                alt="AIRET luxury shoe care system open view showing multiple storage compartments" 
                className="w-full h-auto rounded-xl shadow-2xl"
                data-testid="img-product-hero"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900";
                }}
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted py-section-lg">
          <div className="max-w-container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl lg:text-4xl font-semibold mb-6">
                Six Pillars of Excellence
              </h2>
              <p className="text-body text-muted-foreground max-w-2xl mx-auto">
                Every feature has been meticulously designed to provide unparalleled 
                shoe care and presentation in luxury environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <CardContent className="p-0">
                    <div className="text-center space-y-4">
                      <div className="w-12 h-12 mx-auto bg-primary rounded-lg flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-playfair text-xl font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detail Image Section */}
        <section className="bg-background py-section">
          <div className="max-w-container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              <div className="space-y-6">
                <h2 className="font-playfair text-3xl font-semibold">
                  Museum-Quality Display
                </h2>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Each showcase tray features precision-engineered LED lighting that 
                  not only highlights your collection but also provides UV protection 
                  and climate stability essential for preservation.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-playfair font-semibold">48-60</div>
                    <div className="text-sm text-muted-foreground">Pairs Capacity</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-playfair font-semibold">&lt;35dB</div>
                    <div className="text-sm text-muted-foreground">Whisper Quiet</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-playfair font-semibold">254nm</div>
                    <div className="text-sm text-muted-foreground">UV-C Sanitization</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-playfair font-semibold">±2%</div>
                    <div className="text-sm text-muted-foreground">Humidity Control</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="bg-muted py-section-lg">
          <div className="max-w-container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl lg:text-4xl font-semibold mb-6">
                Technical Specifications
              </h2>
              <p className="text-body text-muted-foreground max-w-2xl mx-auto">
                Engineered with precision components and premium materials 
                for uncompromising performance and reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {specifications.map((category, index) => (
                <Card 
                  key={category.category}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`spec-category-${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <CardContent className="p-6">
                    <h3 className="font-playfair text-xl font-semibold mb-4">
                      {category.category}
                    </h3>
                    <div className="space-y-3">
                      {category.specs.map((spec) => (
                        <div key={spec.label} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                          <span className="text-sm font-medium">{spec.label}</span>
                          <Badge variant="secondary" className="text-xs">
                            {spec.value}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
