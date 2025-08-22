import React from 'react'
import { Shield, Download } from 'lucide-react'

const Patents = () => {
  const patents = [
    {
      title: "AI-Driven Automated Maintenance Scheduling",
      number: "US Patent Application 63/123,456",
      status: "Patent Pending",
      description: "Machine learning algorithms for optimizing maintenance cycles based on usage patterns and environmental conditions.",
      date: "Filed: October 2024"
    },
    {
      title: "Ultra-Quiet Airflow System for Enclosed Spaces",
      number: "US Patent Application 63/123,457", 
      status: "Patent Pending",
      description: "Aerodynamic design and acoustic dampening technology for minimal noise operation.",
      date: "Filed: September 2024"
    },
    {
      title: "Integrated UV-C Sanitization with Safety Protocols",
      number: "US Patent Application 63/123,458",
      status: "Patent Pending", 
      description: "Safe UV-C LED array with automated exposure control and material protection systems.",
      date: "Filed: September 2024"
    },
    {
      title: "Museum-Quality Display with Conservation Controls",
      number: "US Patent Application 63/123,459",
      status: "Patent Pending",
      description: "LED illumination system with conservation-grade light levels and color temperature management.",
      date: "Filed: August 2024"
    },
    {
      title: "Smart Climate Control for Leather Preservation",
      number: "US Patent Application 63/123,460",
      status: "Patent Pending",
      description: "Precision humidity and temperature regulation system designed for leather care.",
      date: "Filed: August 2024"
    },
    {
      title: "Modular Luxury Storage System Architecture",
      number: "US Patent Application 63/123,461",
      status: "Patent Pending",
      description: "Expandable, customizable storage system with integrated smart features.",
      date: "Filed: July 2024"
    }
  ]

  return (
    <div className="pt-20 bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="playfair text-5xl md:text-7xl font-bold mb-6">
              Patent Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protecting innovation through comprehensive intellectual property coverage. 
              12 patent applications filed covering every aspect of our revolutionary system.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">12</div>
              <div className="text-gray-300">Patent Applications Filed</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">6</div>
              <div className="text-gray-300">Core Technology Areas</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">3</div>
              <div className="text-gray-300">International Jurisdictions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Patent Overview */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="playfair text-4xl font-bold mb-6">
              Innovation Protection Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive patent strategy protects the key innovations that make AIRET unique
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Patents Matter</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Technology Protection</h4>
                    <p className="text-gray-600">
                      Safeguarding our revolutionary AI algorithms and hardware innovations 
                      from competitors and imitators.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Market Leadership</h4>
                    <p className="text-gray-600">
                      Establishing AIRET as the definitive leader in automated luxury item care 
                      through strong IP protection.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Innovation Investment</h4>
                    <p className="text-gray-600">
                      Protecting the significant R&D investment that enables continuous 
                      advancement in our technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/assets/IMG_6078_1755522864402-BiGptQZc.png" 
                alt="Patent Innovation"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Patent Listings */}
      <section className="py-20 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="playfair text-4xl font-bold mb-6">
              Key Patent Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Core innovations that power the AIRET system
            </p>
          </div>

          <div className="space-y-6">
            {patents.map((patent, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{patent.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="font-medium">{patent.number}</span>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                        {patent.status}
                      </span>
                      <span>{patent.date}</span>
                    </div>
                    <p className="text-gray-700">{patent.description}</p>
                  </div>
                  <button className="ml-6 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors flex items-center gap-2 text-sm">
                    <Download className="w-4 h-4" />
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Protection */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="playfair text-4xl font-bold mb-6">
              Global Protection Strategy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Securing intellectual property rights in key international markets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">United States</h3>
              <p className="text-gray-300 mb-4">
                Primary patent applications filed with USPTO covering all core technologies.
              </p>
              <div className="text-2xl font-bold">12 Applications</div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">European Union</h3>
              <p className="text-gray-300 mb-4">
                PCT applications being prepared for filing in key European markets.
              </p>
              <div className="text-2xl font-bold">Filing Q1 2025</div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Asia-Pacific</h3>
              <p className="text-gray-300 mb-4">
                Strategic applications planned for Japan, South Korea, and Australia.
              </p>
              <div className="text-2xl font-bold">Filing Q2 2025</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-900 p-8 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Partnership Opportunities</h3>
              <p className="text-gray-300 mb-6">
                We're open to licensing discussions with qualified manufacturers and technology partners. 
                Our patent portfolio represents significant innovation in the automated luxury care space.
              </p>
              <button className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Contact Patent Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Patents