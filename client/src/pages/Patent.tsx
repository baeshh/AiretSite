import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Shield, Eye, Archive, Smartphone, Wind } from "lucide-react";

const patents = [
  {
    id: "US-2023-001234",
    title: "AI-Powered Shoe Care Scheduling System",
    country: "United States",
    status: "Granted",
    category: "AI Technology",
    icon: Brain,
    description: "Machine learning algorithms for predictive maintenance scheduling based on usage patterns and environmental conditions."
  },
  {
    id: "US-2024-005678",
    title: "Museum Display Technology for Footwear",
    country: "United States", 
    status: "Filed",
    category: "Display Systems",
    icon: Eye,
    description: "Integrated lighting and climate control system for luxury shoe presentation and preservation."
  },
  {
    id: "EP-2024-009876",
    title: "UV-C Sanitization Chamber Design",
    country: "European Union",
    status: "Filed",
    category: "Sanitization",
    icon: Shield,
    description: "Enclosed UV-C treatment chamber with safety interlocks and airflow optimization for shoe sanitization."
  },
  {
    id: "US-2024-012345",
    title: "Multi-tier Storage Configuration System",
    country: "United States",
    status: "Filed",
    category: "Storage Solutions",
    icon: Archive,
    description: "Adjustable storage compartments with automated tray positioning and space optimization algorithms."
  },
  {
    id: "US-2024-067890",
    title: "Ultra-quiet Airflow Engineering",
    country: "United States",
    status: "Pending",
    category: "Engineering",
    icon: Wind,
    description: "Noise reduction technology for luxury environments with precision airflow control."
  },
  {
    id: "US-2024-054321",
    title: "IoT Shoe Care Monitoring Application",
    country: "United States",
    status: "Filed",
    category: "Software",
    icon: Smartphone,
    description: "Mobile application and IoT connectivity for remote monitoring and control of shoe care systems."
  }
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "granted":
      return "bg-black text-white";
    case "filed":
      return "bg-gray-200 text-black";
    case "pending":
      return "bg-gray-100 text-gray-600 border border-gray-300";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const getCategoryColor = (category: string) => {
  const colors = {
    "AI Technology": "bg-blue-50 text-blue-700 border-blue-200",
    "Display Systems": "bg-purple-50 text-purple-700 border-purple-200",
    "Sanitization": "bg-green-50 text-green-700 border-green-200",
    "Storage Solutions": "bg-orange-50 text-orange-700 border-orange-200",
    "Engineering": "bg-red-50 text-red-700 border-red-200",
    "Software": "bg-indigo-50 text-indigo-700 border-indigo-200",
  };
  return colors[category as keyof typeof colors] || "bg-gray-50 text-gray-700 border-gray-200";
};

export default function Patent() {
  return (
    <>
      <SEO 
        title="AIRET Patents & Intellectual Property | Innovation Portfolio"
        description="Explore AIRET's comprehensive patent portfolio covering AI scheduling, UV-C sanitization, museum display technology, and luxury shoe care innovations. Leading IP in footwear preservation."
      />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-background py-section-lg">
          <div className="max-w-container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="font-playfair text-4xl lg:text-5xl font-semibold mb-6">
                Intellectual Property Portfolio
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                AIRET's innovation is protected by a comprehensive portfolio of patents 
                covering AI technology, sanitization systems, and luxury display engineering.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold mb-2">6</div>
                <div className="text-sm text-muted-foreground">Total Patents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold mb-2">1</div>
                <div className="text-sm text-muted-foreground">Granted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold mb-2">4</div>
                <div className="text-sm text-muted-foreground">Filed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold mb-2">1</div>
                <div className="text-sm text-muted-foreground">Pending</div>
              </div>
            </div>
          </div>
        </section>

        {/* Patents Grid */}
        <section className="bg-muted py-section-lg">
          <div className="max-w-container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {patents.map((patent, index) => (
                <Card 
                  key={patent.id}
                  className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`patent-card-${patent.id}`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <patent.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex gap-2">
                        <Badge 
                          className={`text-xs ${getStatusColor(patent.status)}`}
                          data-testid={`badge-status-${patent.status.toLowerCase()}`}
                        >
                          {patent.status}
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getCategoryColor(patent.category)}`}
                        >
                          {patent.category}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="font-playfair text-lg leading-tight">
                      {patent.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {patent.description}
                      </p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground pt-4 border-t border-border">
                        <span>{patent.id}</span>
                        <span>{patent.country}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Patent Strategy */}
        <section className="bg-background py-section-lg">
          <div className="max-w-container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-playfair text-3xl font-semibold mb-8">
                Innovation Strategy
              </h2>
              <p className="text-body text-muted-foreground leading-relaxed mb-12">
                Our intellectual property strategy focuses on protecting core innovations 
                while enabling strategic partnerships and licensing opportunities in the 
                luxury home automation and footwear care markets.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold">Core Technology</h3>
                  <p className="text-sm text-muted-foreground">
                    AI algorithms and machine learning innovations for predictive maintenance
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold">Safety Systems</h3>
                  <p className="text-sm text-muted-foreground">
                    UV-C sanitization and safety interlocks for consumer protection
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold">Design Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Museum-quality display and luxury presentation systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
