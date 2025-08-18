import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Quote } from "lucide-react";

const pressQuotes = [
  {
    quote: "AIRET redefines luxury shoe care with museum-quality display technology and AI-powered maintenance systems.",
    source: "TechDaily",
    date: "December 2024",
    featured: true
  },
  {
    quote: "The future of luxury storage has arrived. AIRET combines preservation science with stunning presentation.",
    source: "Luxury Home Magazine",
    date: "November 2024",
    featured: true
  },
  {
    quote: "A game-changer for high-end retailers and collectors. AIRET elevates shoe care to an art form.",
    source: "Retail Innovation Weekly",
    date: "October 2024",
    featured: false
  },
  {
    quote: "AIRET's AI scheduling and climate control represent the next evolution in luxury home automation.",
    source: "Smart Home Today",
    date: "September 2024",
    featured: false
  }
];

const pressLogos = [
  { name: "TechDaily", category: "Technology" },
  { name: "Luxury Home Magazine", category: "Lifestyle" },
  { name: "Retail Innovation Weekly", category: "Business" },
  { name: "Smart Home Today", category: "Technology" },
  { name: "CES Innovation Awards", category: "Awards" },
  { name: "Design Excellence", category: "Design" },
  { name: "AI Forward", category: "Technology" },
  { name: "Luxury Living", category: "Lifestyle" }
];

const mediaResources = [
  {
    title: "High-Resolution Product Images",
    description: "Professional photography of AIRET systems in various configurations",
    type: "Images",
    size: "25.3 MB"
  },
  {
    title: "Company Logo Package",
    description: "AIRET logos in multiple formats (PNG, SVG, EPS)",
    type: "Logos",
    size: "2.1 MB"
  },
  {
    title: "Executive Headshots",
    description: "Professional portraits of leadership team",
    type: "Images",
    size: "15.7 MB"
  },
  {
    title: "Product Fact Sheet",
    description: "Detailed specifications and feature overview",
    type: "PDF",
    size: "890 KB"
  },
  {
    title: "Company Overview",
    description: "Background, mission, and market positioning",
    type: "PDF",
    size: "1.2 MB"
  }
];

export default function Media() {
  return (
    <>
      <SEO 
        title="AIRET Media Center | Press Coverage & Resources"
        description="Access AIRET press releases, media coverage, high-resolution images, and press resources. Featured in TechDaily, Luxury Home Magazine, and leading industry publications."
      />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-background py-section-lg">
          <div className="max-w-container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="font-playfair text-4xl lg:text-5xl font-semibold mb-6">
                Media Center
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover the latest press coverage, download high-resolution images, 
                and access comprehensive media resources for AIRET coverage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Press Features</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold mb-2">8</div>
                <div className="text-sm text-muted-foreground">Media Outlets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold mb-2">2M+</div>
                <div className="text-sm text-muted-foreground">Total Reach</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Press Quotes */}
        <section className="bg-muted py-section-lg">
          <div className="max-w-container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl lg:text-4xl font-semibold mb-6">
                Press Highlights
              </h2>
              <p className="text-body text-muted-foreground max-w-2xl mx-auto">
                What industry leaders and media are saying about AIRET's innovation 
                in luxury shoe care and preservation technology.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pressQuotes.map((item, index) => (
                <Card 
                  key={index}
                  className={`p-6 hover:shadow-lg transition-all duration-300 animate-fade-in ${
                    item.featured ? 'border-2 border-primary' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`quote-card-${index}`}
                >
                  <CardContent className="p-0">
                    <div className="space-y-4">
                      <Quote className="w-8 h-8 text-primary" />
                      <blockquote className="text-lg italic text-foreground leading-relaxed">
                        "{item.quote}"
                      </blockquote>
                      <div className="flex justify-between items-center pt-4 border-t border-border">
                        <cite className="font-medium not-italic">— {item.source}</cite>
                        <span className="text-sm text-muted-foreground">{item.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Press Logos */}
        <section className="bg-background py-section">
          <div className="max-w-container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-2xl font-semibold mb-4">
                Featured In
              </h2>
              <p className="text-muted-foreground">
                Leading publications covering AIRET's innovation story
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {pressLogos.map((logo, index) => (
                <Card 
                  key={logo.name}
                  className="p-6 hover:shadow-md transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  data-testid={`logo-card-${logo.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <CardContent className="p-0 flex flex-col items-center justify-center h-20">
                    <span className="font-semibold text-sm text-center">{logo.name}</span>
                    <span className="text-xs text-muted-foreground mt-1">{logo.category}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Media Resources */}
        <section className="bg-muted py-section-lg">
          <div className="max-w-container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl lg:text-4xl font-semibold mb-6">
                Press Resources
              </h2>
              <p className="text-body text-muted-foreground max-w-2xl mx-auto">
                Download high-resolution images, logos, and comprehensive information 
                for your AIRET coverage and editorial needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mediaResources.map((resource, index) => (
                <Card 
                  key={resource.title}
                  className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`resource-card-${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <CardContent className="p-0">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <h3 className="font-semibold text-lg">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span className="bg-muted px-2 py-1 rounded">{resource.type}</span>
                          <span>{resource.size}</span>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="ml-4"
                        data-testid={`download-${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Card className="inline-block p-6">
                <CardContent className="p-0">
                  <div className="text-center space-y-4">
                    <h3 className="font-playfair text-xl font-semibold">
                      Complete Press Kit
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Download all resources in one comprehensive package
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-primary text-primary-foreground"
                      data-testid="button-download-press-kit"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Complete Press Kit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-background py-section">
          <div className="max-w-container mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-playfair text-2xl font-semibold mb-6">
                Media Inquiries
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p>For press inquiries, interviews, and additional resources:</p>
                <p className="font-medium">
                  <a 
                    href="mailto:press@airet.io" 
                    className="hover:text-primary transition-colors"
                    data-testid="link-press-email"
                  >
                    press@airet.io
                  </a>
                </p>
                <p>Response within 24 hours</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
