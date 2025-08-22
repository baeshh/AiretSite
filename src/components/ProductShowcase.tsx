import React from 'react'
import { Shield, Droplets, Smartphone, Wind, Archive, Gem } from 'lucide-react'

const ProductShowcase = () => {
  return (
    <section id="product" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="playfair text-4xl md:text-5xl font-bold mb-6">
            Six Pillars of Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every detail engineered for the modern luxury lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900 p-8 rounded-lg">
            <Shield className="w-10 h-10 text-white mb-4" />
            <h3 className="text-xl font-bold mb-4">AI Scheduling</h3>
            <p className="text-gray-300">
              Learns your routine and schedules maintenance automatically during optimal times.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <Droplets className="w-10 h-10 text-white mb-4" />
            <h3 className="text-xl font-bold mb-4">UV-C Sanitization</h3>
            <p className="text-gray-300">
              Hospital-grade UV-C technology eliminates 99.9% of bacteria and odor-causing microorganisms.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <Wind className="w-10 h-10 text-white mb-4" />
            <h3 className="text-xl font-bold mb-4">Climate Control</h3>
            <p className="text-gray-300">
              Precise humidity and temperature regulation preserves leather and maintains optimal conditions.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <Gem className="w-10 h-10 text-white mb-4" />
            <h3 className="text-xl font-bold mb-4">Museum Display</h3>
            <p className="text-gray-300">
              Gallery-quality LED illumination showcases your collection while maintaining preservation standards.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <Smartphone className="w-10 h-10 text-white mb-4" />
            <h3 className="text-xl font-bold mb-4">Smart Integration</h3>
            <p className="text-gray-300">
              Seamless connectivity with home automation systems and mobile app control.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <Archive className="w-10 h-10 text-white mb-4" />
            <h3 className="text-xl font-bold mb-4">Premium Materials</h3>
            <p className="text-gray-300">
              Crafted with aerospace-grade aluminum and hand-selected hardwoods for lasting elegance.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="playfair text-3xl font-bold mb-6">
              Designed for the Modern Home
            </h3>
            <p className="text-gray-300 mb-6">
              AIRET seamlessly integrates into contemporary living spaces, offering both functional excellence 
              and aesthetic sophistication. Each unit is custom-fitted to your space and style preferences.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                View Specifications
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-black transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/assets/IMG_6078_1755522864402-BiGptQZc.png" 
              alt="AIRET Product Detail"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase