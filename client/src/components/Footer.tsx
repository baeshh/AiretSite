import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 lg:py-24">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 space-y-12 lg:space-y-0">
          
          {/* Left - Logo */}
          <div>
            <h3 className="font-playfair text-3xl font-bold tracking-tighter text-white">AIRET</h3>
          </div>

          {/* Right - Minimal Navigation */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors font-light">
              About
            </Link>
            <Link href="/product" className="text-gray-400 hover:text-white transition-colors font-light">
              Product  
            </Link>
            <Link href="/patent" className="text-gray-400 hover:text-white transition-colors font-light">
              Patents
            </Link>
            <Link href="/media" className="text-gray-400 hover:text-white transition-colors font-light">
              Media
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-xs font-light tracking-wide">
            © 2025 AIRET. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
