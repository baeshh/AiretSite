import React from 'react'
import { ArrowRight } from 'lucide-react'

const About = () => {
  return (
    <div className="pt-20 bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="playfair text-5xl md:text-7xl font-bold mb-6">
              Redefining Luxury
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AIRET was born from a simple vision: luxury items deserve luxury care. 
              We're pioneering the future of automated home maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="playfair text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl text-gray-600 mb-8">
                To create seamless integration between luxury living and intelligent automation, 
                where every precious item receives museum-quality care without human intervention.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <ArrowRight className="w-6 h-6 mt-1 text-black" />
                  <div>
                    <h3 className="font-bold mb-2">Innovation-Driven</h3>
                    <p className="text-gray-600">
                      Pushing boundaries with AI, precision engineering, and sustainable design.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ArrowRight className="w-6 h-6 mt-1 text-black" />
                  <div>
                    <h3 className="font-bold mb-2">Quality-Obsessed</h3>
                    <p className="text-gray-600">
                      Every component meets aerospace standards for durability and performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ArrowRight className="w-6 h-6 mt-1 text-black" />
                  <div>
                    <h3 className="font-bold mb-2">User-Centric</h3>
                    <p className="text-gray-600">
                      Designed for effortless integration into modern luxury lifestyles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/assets/IMG_6076_1755522864402-DB_JhGh6.png" 
                alt="AIRET Vision"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="playfair text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to CES 2025: building the future of luxury home automation
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex items-center gap-8">
              <div className="bg-black text-white p-4 rounded-full min-w-[100px] text-center">
                <div className="font-bold">2023</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Company Founded</h3>
                <p className="text-gray-600">
                  Dr. Sarah Chen and Marcus Williams unite their expertise in luxury engineering 
                  and AI to solve the gap in automated luxury item care.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="bg-black text-white p-4 rounded-full min-w-[100px] text-center">
                <div className="font-bold">Q1 2024</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Seed Funding</h3>
                <p className="text-gray-600">
                  Secured $15M in seed funding from top-tier VCs including Sequoia Capital 
                  and Andreessen Horowitz.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="bg-black text-white p-4 rounded-full min-w-[100px] text-center">
                <div className="font-bold">Q3 2024</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">First Prototype</h3>
                <p className="text-gray-600">
                  Completed development of functional prototype with all core features: 
                  AI scheduling, UV-C sanitization, and museum-quality display.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="bg-black text-white p-4 rounded-full min-w-[100px] text-center">
                <div className="font-bold">Q4 2024</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Patent Applications</h3>
                <p className="text-gray-600">
                  Filed 12 patent applications covering our innovative AI algorithms, 
                  ultra-quiet airflow system, and integrated display technology.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="bg-gradient-to-r from-black to-gray-700 text-white p-4 rounded-full min-w-[100px] text-center">
                <div className="font-bold">2025</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">CES 2025 Launch</h3>
                <p className="text-gray-600">
                  World premiere at Consumer Electronics Show 2025, with limited pre-orders 
                  opening for delivery starting Q3 2025.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="playfair text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide every decision and every line of code
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-300">
                We pursue perfection in every detail, from industrial design to software algorithms.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
              <p className="text-gray-300">
                Building products that last decades while minimizing environmental impact.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Privacy</h3>
              <p className="text-gray-300">
                Your personal data stays private. All AI processing happens locally on-device.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About