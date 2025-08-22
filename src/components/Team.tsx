import React from 'react'

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      expertise: "Former Tesla engineering lead with 15+ years in luxury product development",
      image: "/assets/IMG_6079_1755533708918-tNSIJbtm.png"
    },
    {
      name: "Marcus Williams",
      role: "CTO & Co-Founder", 
      expertise: "Ex-Apple design principal, specializing in consumer hardware and AI integration",
      image: "/assets/IMG_6080_1755534213427-B3eVA2gJ.png"
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Design",
      expertise: "Award-winning industrial designer with luxury brand experience at LVMH",
      image: "/assets/IMG_6076_1755522864402-DB_JhGh6.png"
    },
    {
      name: "James Park",
      role: "VP of Engineering", 
      expertise: "Former SpaceX systems engineer, expert in precision manufacturing",
      image: "/assets/IMG_6077_1755522864402-B3tB3myF.png"
    }
  ]

  return (
    <section id="team" className="py-20 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="playfair text-4xl md:text-5xl font-bold mb-6">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World-class expertise from luxury, technology, and engineering backgrounds
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full bg-gray-200">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600 font-medium mb-3">{member.role}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{member.expertise}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h3 className="playfair text-2xl font-bold mb-4">
              Backed by Industry Leaders
            </h3>
            <p className="text-gray-600 mb-6">
              AIRET is supported by top-tier investors and advisors from the luxury goods, 
              technology, and consumer electronics industries.
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold">SEQUOIA</div>
              <div className="text-2xl font-bold">a16z</div>
              <div className="text-2xl font-bold">BENCHMARK</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team