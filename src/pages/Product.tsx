import React from 'react'
import { Shield, Droplets, Smartphone, Wind, Archive, Gem, Download } from 'lucide-react'

const Product = () => {
  return (
    <div className="pt-20 bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="playfair text-5xl md:text-7xl font-bold mb-6">
                Product Details
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Dive deep into the engineering excellence and innovative features 
                that make AIRET the ultimate luxury shoe care solution.
              </p>
              <button className="bg-white text-black px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Spec Sheet
              </button>
            </div>
            <div>
              <img 
                src="/assets/IMG_6077_1755522864402-B3tB3myF.png" 
                alt="AIRET Product"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Six Pillars Detailed */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="playfair text-4xl font-bold mb-6">
              Six Pillars of Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each feature represents months of research, development, and testing
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div className="flex gap-6">
              <div className="bg-black p-3 rounded-lg h-fit">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">AI Scheduling System</h3>
                <p className="text-gray-600 mb-4">
                  Our proprietary machine learning algorithms analyze your daily routines, 
                  shoe usage patterns, and environmental conditions to automatically schedule 
                  maintenance cycles during optimal times.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Learns from your routine within 2 weeks</li>
                  <li>• Adjusts for seasonal changes automatically</li>
                  <li>• Predicts maintenance needs 3 days in advance</li>
                  <li>• Reduces unnecessary cycles by 40%</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-black p-3 rounded-lg h-fit">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">UV-C Sanitization</h3>
                <p className="text-gray-600 mb-4">
                  Hospital-grade UV-C LEDs eliminate 99.9% of bacteria, viruses, and 
                  odor-causing microorganisms without any chemicals or heat damage.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 254nm wavelength for maximum efficacy</li>
                  <li>• Safe for all leather and fabric types</li>
                  <li>• 10,000+ hour LED lifespan</li>
                  <li>• Automated safety shut-off system</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-black p-3 rounded-lg h-fit">
                <Wind className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Climate Control</h3>
                <p className="text-gray-600 mb-4">
                  Precision humidity and temperature regulation maintains optimal conditions 
                  for leather preservation while preventing mold and deterioration.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 45-55% relative humidity maintained</li>
                  <li>• Temperature controlled ±2°F</li>
                  <li>• Cedar wood moisture absorption</li>
                  <li>• Real-time environmental monitoring</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-black p-3 rounded-lg h-fit">
                <Gem className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Museum Display</h3>
                <p className="text-gray-600 mb-4">
                  Gallery-quality LED illumination with color temperature adjustment 
                  showcases your collection while meeting conservation standards.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 3000K-6500K adjustable color temperature</li>
                  <li>• &lt;50 lux to prevent UV damage</li>
                  <li>• Motion-activated smart lighting</li>
                  <li>• Anti-glare optical diffusers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="playfair text-4xl font-bold mb-6">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engineered to aerospace standards for decades of reliable operation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg mb-4">Dimensions</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Height:</strong> 84" (213 cm)</p>
                <p><strong>Width:</strong> 36" (91 cm)</p>
                <p><strong>Depth:</strong> 24" (61 cm)</p>
                <p><strong>Weight:</strong> 180 lbs (82 kg)</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg mb-4">Capacity</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Shoes:</strong> 24-30 pairs</p>
                <p><strong>Shelves:</strong> 6 adjustable</p>
                <p><strong>Boot space:</strong> 2 tall sections</p>
                <p><strong>Accessories:</strong> 4 drawer slots</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg mb-4">Technology</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Processor:</strong> ARM Cortex-A78</p>
                <p><strong>Memory:</strong> 8GB LPDDR5</p>
                <p><strong>Storage:</strong> 256GB NVMe</p>
                <p><strong>Sensors:</strong> 12 environmental</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg mb-4">Power & Connectivity</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Power:</strong> 110-240V AC</p>
                <p><strong>Consumption:</strong> 150W avg</p>
                <p><strong>Wi-Fi:</strong> 802.11ax (Wi-Fi 6)</p>
                <p><strong>Bluetooth:</strong> 5.2 LE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation & Maintenance */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="playfair text-4xl font-bold mb-6">
              Installation & Maintenance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional installation and minimal maintenance for years of trouble-free operation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Installation Process</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold mb-2">Site Assessment</h4>
                    <p className="text-gray-300">Our team surveys your space and creates a custom installation plan.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold mb-2">Professional Installation</h4>
                    <p className="text-gray-300">Certified technicians handle all electrical, ventilation, and network connections.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold mb-2">Setup & Training</h4>
                    <p className="text-gray-300">Complete system setup, app configuration, and user training session.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Maintenance</h3>
              <div className="space-y-4">
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Self-Maintaining System</h4>
                  <p className="text-gray-300">AI monitors all components and schedules maintenance automatically.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Annual Service</h4>
                  <p className="text-gray-300">Optional annual service visits for deep cleaning and calibration.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Remote Diagnostics</h4>
                  <p className="text-gray-300">24/7 monitoring with predictive maintenance alerts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product