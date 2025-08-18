const teamMembers = [
  {
    name: "Alexander Chen",
    role: "CEO & Co-Founder",
    expertise: "15+ yrs Luxury Product Design"
  },
  {
    name: "Dr. Sarah Williams",
    role: "CTO & Co-Founder",
    expertise: "10+ yrs AIoT Engineering"
  },
  {
    name: "Marcus Thompson",
    role: "Head of Design",
    expertise: "Museum Display Specialist"
  }
];

export default function Team() {
  return (
    <section className="bg-muted py-section-lg">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-semibold mb-6">
            Leadership Team
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Industry veterans combining luxury design expertise with 
            cutting-edge technology to redefine shoe care.
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="bg-background rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
              data-testid={`card-team-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="aspect-square bg-muted flex items-center justify-center">
                <div className="w-24 h-24 bg-border rounded-full flex items-center justify-center">
                  <span className="text-2xl font-playfair font-semibold text-muted-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-playfair text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-muted-foreground font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
