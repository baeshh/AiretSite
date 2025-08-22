import React from 'react'
import { Brain, Wind, Eye } from 'lucide-react'

const Innovation = () => {
  return (
    <section id="innovation" className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="playfair text-4xl md:text-5xl font-bold mb-6">
            Three Core Innovations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Redefining luxury shoe care through cutting-edge technology and intelligent design
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-black p-4 rounded-full inline-block mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="playfair text-2xl font-bold mb-4">AI Scheduling</h3>
            <p className="text-gray-600 mb-4">
              Intelligent algorithms learn your routine and automatically schedule maintenance during optimal times.
            </p>
            <p className="text-sm text-gray-500">
              vs. Manual maintenance schedules
            </p>
          </div>

          <div className="text-center">
            <div className="bg-black p-4 rounded-full inline-block mb-6">
              <Wind className="w-8 h-8 text-white" />
            </div>
            <h3 className="playfair text-2xl font-bold mb-4">Ultra-quiet Airflow</h3>
            <p className="text-gray-600 mb-4">
              Advanced aerodynamics ensure whisper-quiet operation without compromising cleaning effectiveness.
            </p>
            <p className="text-sm text-gray-500">
              vs. Noisy traditional systems
            </p>
          </div>

          <div className="text-center">
            <div className="bg-black p-4 rounded-full inline-block mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="playfair text-2xl font-bold mb-4">Integrated Display</h3>
            <p className="text-gray-600 mb-4">
              Museum-quality LED illumination transforms your shoes into art pieces while they're being cared for.
            </p>
            <p className="text-sm text-gray-500">
              vs. Hidden storage systems
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Innovation