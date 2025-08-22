import React from 'react'
import { Link } from 'wouter'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="playfair text-2xl font-bold mb-4">AIRET</div>
            <p className="text-gray-300 mb-4">
              Luxury built-in shoe care system designed for the modern home.
            </p>
            <p className="text-gray-400 text-sm">
              © 2025 AIRET. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <div className="space-y-2">
              <Link href="/product" className="block text-gray-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/product" className="block text-gray-300 hover:text-white transition-colors">
                Specifications
              </Link>
              <Link href="/product" className="block text-gray-300 hover:text-white transition-colors">
                Installation
              </Link>
              <Link href="/product" className="block text-gray-300 hover:text-white transition-colors">
                Warranty
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/media" className="block text-gray-300 hover:text-white transition-colors">
                Press Kit
              </Link>
              <Link href="/patents" className="block text-gray-300 hover:text-white transition-colors">
                Patents
              </Link>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Careers
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <div className="space-y-2">
              <a href="mailto:ces@airet.io" className="block text-gray-300 hover:text-white transition-colors">
                CES Demo
              </a>
              <a href="mailto:support@airet.io" className="block text-gray-300 hover:text-white transition-colors">
                Customer Support
              </a>
              <a href="mailto:media@airet.io" className="block text-gray-300 hover:text-white transition-colors">
                Media Inquiries
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Installation Guide
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              Designed and engineered in California. Patents pending.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer