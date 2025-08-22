import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="playfair text-4xl md:text-5xl font-bold mb-6">
            Experience AIRET at CES 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule a private demonstration with our team in Las Vegas, January 7-10, 2025
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="playfair text-2xl font-bold mb-6">Book Your Demo</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Your company (optional)"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Tell us about your interest in AIRET..."
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-black text-white py-4 rounded-md font-medium hover:bg-gray-900 transition-colors"
              >
                Book CES Demo
              </button>
            </form>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="playfair text-2xl font-bold mb-6">CES 2025 Details</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-2">Event Information</h4>
                <p className="text-gray-600">
                  Consumer Electronics Show 2025<br/>
                  Las Vegas Convention Center<br/>
                  January 7-10, 2025
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2">AIRET Booth</h4>
                <p className="text-gray-600">
                  Central Hall, Booth #12345<br/>
                  Private demo rooms available<br/>
                  Meet our founding team
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2">Demo Schedule</h4>
                <p className="text-gray-600">
                  30-minute private demonstrations<br/>
                  Available by appointment only<br/>
                  Limited availability
                </p>
              </div>
              
              <div className="border-t pt-6">
                <h4 className="font-bold text-lg mb-2">Contact Us Directly</h4>
                <p className="text-gray-600">
                  Email: ces@airet.io<br/>
                  Phone: +1 (555) 123-4567<br/>
                  Press: media@airet.io
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact