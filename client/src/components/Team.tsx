const teamMembers = [
  {
    name: "구본웅",
    role: "CEO",
    expertise: "저는 이런걸 잘해요"
  },
  {
    name: "장수빈",
    role: "PM",
    expertise: "저는 이런걸 잘해요"
  },
  {
    name: "배승환",
    role: "죽음의 개발자",
    expertise: "다 만들 수 있어요"
  }
];

export default function Team() {
  return (
    <section className="bg-black py-24 lg:py-32 relative">
      {/* Section Divider */}
      <div className="section-divider absolute top-0 bg-white opacity-20"></div>
      
      <div className="max-w-container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-20">
          <h2 className="font-playfair text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tighter leading-tight">
            Leadership Team
          </h2>
          <div className="editorial-quote text-gray-300 max-w-3xl border-l-white/30">
            Industry veterans combining luxury design expertise with 
            cutting-edge technology to redefine shoe care.
          </div>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {teamMembers.map((member, index) => (
            <div 
              key={`${member.name}-${index}`}
              className="bg-white p-8 hover:shadow-[0_20px_80px_rgba(255,255,255,0.1)] transition-all duration-500 animate-fade-in border border-white/10"
              style={{ animationDelay: `${index * 0.2}s` }}
              data-testid={`card-team-${index}`}
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
                  <span className="text-lg font-playfair font-semibold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              <div className="text-left">
                <h3 className="font-playfair text-xl font-bold mb-2 tracking-tight">{member.name}</h3>
                <p className="text-gray-600 font-medium mb-4">{member.role}</p>
                <p className="text-sm text-gray-500 font-light">{member.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
