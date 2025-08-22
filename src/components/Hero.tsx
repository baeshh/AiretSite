import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center" 
             style={{
               backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/assets/IMG_6076_1755522864402-DB_JhGh6.png")',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat'
             }}>
      
      {/* Product showcase image */}
      <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 w-80 h-96">
          <img 
            src="/assets/IMG_6077_1755522864402-B3tB3myF.png" 
            alt="AIRET Shoe Care System"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl pl-8">
          <h1 className="playfair text-4xl md:text-5xl font-bold text-white mb-6 leading-tight text-left">
            Luxury Built-in
            <br />
            <span className="text-white">Shoe Care System</span>
          </h1>
          
          <p className="text-white text-lg leading-relaxed font-light max-w-lg mb-8 text-left">
            Gallery-style display integrated with AI-powered maintenance—designed for today's modern luxury lifestyle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <button className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-900 transition-colors border border-white/20 text-center flex items-center justify-center min-w-[200px]">
              View Product Details
            </button>
            <button className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors text-center flex items-center justify-center min-w-[150px]">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero