import SEO from "@/components/SEO";
import { ArrowRight } from "lucide-react";

const milestones = [
  {
    year: "2022",
    title: "Founded AIRET",
    description: "Company establishment and initial concept development",
    position: "left"
  },
  {
    year: "2023",
    title: "First Patent Filed",
    description: "Core technology and design patents submitted",
    position: "right"
  },
  {
    year: "2024",
    title: "Prototype Development",
    description: "First working prototype and technology validation",
    position: "left"
  },
  {
    year: "2025",
    title: "CES 2025 Debut",
    description: "Official product launch and market introduction",
    position: "right"
  }
];

export default function About() {
  return (
    <>
      <SEO 
        title="About AIRET - Luxury Shoe Care Innovation | CES 2025"
        description="Learn about AIRET's vision to transform luxury shoe storage through intelligent technology and museum-quality design. Founded by industry veterans with 25+ years combined experience."
      />
      
      <div className="pt-20">
        {/* Vision & Mission */}
        <section className="bg-background py-section-lg">
          <div className="max-w-container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="font-playfair text-4xl lg:text-5xl font-semibold mb-8">
                Our Vision
              </h1>
              <blockquote className="text-xl lg:text-2xl text-muted-foreground font-light italic leading-relaxed max-w-4xl mx-auto">
                "To transform luxury shoe storage from simple organization into 
                an art form that preserves, showcases, and celebrates fine footwear 
                through intelligent technology and museum-quality design."
              </blockquote>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="font-playfair text-3xl font-semibold mb-6">Our Mission</h2>
                  <p className="text-body text-muted-foreground leading-relaxed mb-6">
                    AIRET exists to bridge the gap between traditional shoe storage and 
                    luxury presentation. We believe that exceptional footwear deserves 
                    exceptional care and display.
                  </p>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    Our built-in systems combine cutting-edge AI technology with 
                    museum-quality preservation methods, ensuring your most valued 
                    shoes remain pristine while being beautifully showcased.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Innovation First</h3>
                    <p className="text-sm text-muted-foreground">
                      Leading the industry with AI-powered maintenance and climate control.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Museum Quality</h3>
                    <p className="text-sm text-muted-foreground">
                      Professional-grade preservation and presentation standards.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Luxury Focus</h3>
                    <p className="text-sm text-muted-foreground">
                      Designed for discerning clients who appreciate fine craftsmanship.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Built-in Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Seamlessly integrates with luxury home and commercial spaces.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-8">
                <h3 className="font-playfair text-2xl font-semibold mb-6">Why AIRET?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-sm">15+ years luxury product design experience</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-sm">Proprietary AI scheduling and maintenance algorithms</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-sm">Museum-grade preservation technology</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-sm">Ultra-quiet operation for luxury environments</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-sm">Customizable design integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-muted py-section-lg">
          <div className="max-w-container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-playfair text-3xl font-semibold text-center mb-12">
                Company Milestones
              </h2>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-border"></div>
                
                {/* Timeline Items */}
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div 
                      key={milestone.year}
                      className="relative flex items-center animate-fade-in"
                      style={{ animationDelay: `${index * 0.2}s` }}
                      data-testid={`milestone-${milestone.year}`}
                    >
                      {milestone.position === "left" ? (
                        <>
                          <div className="flex-1 text-right pr-8">
                            <h4 className="font-semibold text-lg">{milestone.title}</h4>
                            <p className="text-muted-foreground">{milestone.description}</p>
                          </div>
                          <div className="w-4 h-4 bg-primary rounded-full z-10"></div>
                          <div className="flex-1 pl-8">
                            <span className="text-sm font-medium text-muted-foreground">{milestone.year}</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex-1 text-right pr-8">
                            <span className="text-sm font-medium text-muted-foreground">{milestone.year}</span>
                          </div>
                          <div className="w-4 h-4 bg-primary rounded-full z-10"></div>
                          <div className="flex-1 pl-8">
                            <h4 className="font-semibold text-lg">{milestone.title}</h4>
                            <p className="text-muted-foreground">{milestone.description}</p>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
