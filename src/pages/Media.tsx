import React from 'react'
import { Download, Quote } from 'lucide-react'

const Media = () => {
  const pressReleases = [
    {
      title: "AIRET Announces World Premiere at CES 2025",
      date: "December 15, 2024",
      summary: "Revolutionary luxury shoe care system featuring AI scheduling and museum-quality display to debut at Consumer Electronics Show."
    },
    {
      title: "AIRET Closes $15M Seed Round Led by Sequoia Capital",
      date: "March 10, 2024", 
      summary: "Funding will accelerate development of automated luxury item care technology and prepare for commercial launch."
    },
    {
      title: "Former Tesla and Apple Executives Launch AIRET",
      date: "January 8, 2024",
      summary: "Dr. Sarah Chen and Marcus Williams combine luxury engineering expertise to revolutionize home automation."
    }
  ]

  const mediaQuotes = [
    {
      quote: "AIRET represents the future of luxury home automation - where artificial intelligence meets artisanal craftsmanship.",
      source: "TechCrunch",
      author: "Sarah Perez"
    },
    {
      quote: "This isn't just about shoe care; it's about redefining how we think about automated luxury in the modern home.",
      source: "Wired",
      author: "David Pierce"
    },
    {
      quote: "The engineering elegance of AIRET's AI scheduling system is matched only by its museum-quality display technology.",
      source: "IEEE Spectrum", 
      author: "Dr. Jennifer Martinez"
    }
  ]

  const awards = [
    {
      name: "CES 2025 Innovation Award",
      category: "Smart Home",
      year: "2025",
      description: "Recognized for breakthrough innovation in automated luxury item care"
    },
    {
      name: "Red Dot Design Award",
      category: "Product Design",
      year: "2024", 
      description: "Honored for exceptional industrial design and user experience"
    },
    {
      name: "TIME Best Inventions",
      category: "Home",
      year: "2024",
      description: "Selected as one of TIME's Best Inventions for revolutionary approach to luxury care"
    }
  ]

  return (
    <div className="pt-20 bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="playfair text-5xl md:text-7xl font-bold mb-6">
              Media & Press
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Latest news, press releases, and media coverage of AIRET's revolutionary 
              approach to luxury home automation.
            </p>
          </div>
          
          <div className="text-center">
            <button className="bg-white text-black px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Press Kit
            </button>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="playfair text-4xl font-bold mb-6">
              Latest Press Releases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with AIRET's major announcements and milestones
            </p>
          </div>

          <div className="space-y-8">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{release.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{release.date}</p>
                    <p className="text-gray-700">{release.summary}</p>
                  </div>
                  <button className="ml-6 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors text-sm">
                    Read Full Release
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="playfair text-4xl font-bold mb-6">
              Media Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What industry experts and media are saying about AIRET
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mediaQuotes.map((quote, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <Quote className="w-8 h-8 text-gray-400 mb-4" />
                <p className="text-gray-700 mb-6 text-lg italic">
                  "{quote.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold">{quote.author}</p>
                  <p className="text-gray-600">{quote.source}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-black text-white p-8 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Media Inquiries</h3>
              <p className="text-gray-300 mb-6">
                For press inquiries, interview requests, or high-resolution images, 
                please contact our media team.
              </p>
              <div className="flex justify-center gap-4">
                <a 
                  href="mailto:media@airet.io"
                  className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
                >
                  media@airet.io
                </a>
                <span className="text-gray-300 py-3">•</span>
                <a 
                  href="tel:+15551234567"
                  className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="playfair text-4xl font-bold mb-6">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry recognition for innovation, design, and engineering excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg text-center">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-black font-bold text-xl">★</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{award.name}</h3>
                <p className="text-gray-300 mb-2">{award.category} • {award.year}</p>
                <p className="text-gray-400 text-sm">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit Downloads */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="playfair text-4xl font-bold mb-6">
              Press Kit Downloads
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              High-resolution images, logos, and media assets for editorial use
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black p-6 rounded-lg text-center">
              <Download className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Product Images</h3>
              <p className="text-gray-300 text-sm mb-4">High-res product photography</p>
              <button className="w-full bg-white text-black py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                Download ZIP
              </button>
            </div>

            <div className="bg-black p-6 rounded-lg text-center">
              <Download className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Logo Package</h3>
              <p className="text-gray-300 text-sm mb-4">AIRET logos in various formats</p>
              <button className="w-full bg-white text-black py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                Download ZIP
              </button>
            </div>

            <div className="bg-black p-6 rounded-lg text-center">
              <Download className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Executive Photos</h3>
              <p className="text-gray-300 text-sm mb-4">Leadership team headshots</p>
              <button className="w-full bg-white text-black py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                Download ZIP
              </button>
            </div>

            <div className="bg-black p-6 rounded-lg text-center">
              <Download className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Fact Sheet</h3>
              <p className="text-gray-300 text-sm mb-4">Company & product overview</p>
              <button className="w-full bg-white text-black py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Media