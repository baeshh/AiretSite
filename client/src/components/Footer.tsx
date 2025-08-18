import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold">AIRET</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Built-in luxury shoe care system combining museum-quality display 
              with AI-powered maintenance technology.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-gray-300 hover:text-white transition-colors">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/patent" className="text-gray-300 hover:text-white transition-colors">
                  Patents
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-gray-300 hover:text-white transition-colors">
                  Media
                </Link>
              </li>
            </ul>
          </div>

          {/* CES 2025 */}
          <div className="space-y-4">
            <h4 className="font-semibold">CES 2025</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Las Vegas Convention Center</li>
              <li className="text-gray-300">January 7-10, 2025</li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Book Demo
                </a>
              </li>
              <li>
                <a 
                  href="/pdf/one-pager.pdf" 
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="link-product-sheet"
                >
                  Product Sheet
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">hello@airet.io</li>
              <li className="text-gray-300">Press inquiries: press@airet.io</li>
              <li className="text-gray-300">Partnerships: partners@airet.io</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2025 AIRET. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
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
  );
}
