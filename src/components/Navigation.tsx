import React from 'react'
import { Link } from 'wouter'

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="playfair text-2xl font-bold text-white cursor-pointer">
              AIRET
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="/product" className="text-white hover:text-gray-300 transition-colors">
              Product
            </Link>
            <Link href="/patents" className="text-white hover:text-gray-300 transition-colors">
              Patents
            </Link>
            <Link href="/media" className="text-white hover:text-gray-300 transition-colors">
              Media
            </Link>
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