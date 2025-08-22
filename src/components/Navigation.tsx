import React from 'react'

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="playfair text-2xl font-bold text-white">
            AIRET
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-gray-300 transition-colors">
              Home
            </a>
            <a href="#about" className="text-white hover:text-gray-300 transition-colors">
              About
            </a>
            <a href="#product" className="text-white hover:text-gray-300 transition-colors">
              Product
            </a>
            <a href="#patents" className="text-white hover:text-gray-300 transition-colors">
              Patents
            </a>
            <a href="#media" className="text-white hover:text-gray-300 transition-colors">
              Media
            </a>
          </div>
          
          <button className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Book CES Demo
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation