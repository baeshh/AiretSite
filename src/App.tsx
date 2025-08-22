import React from 'react'
import { Route, Switch } from 'wouter'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Innovation from './components/Innovation'
import ProductShowcase from './components/ProductShowcase'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './pages/About'
import Product from './pages/Product'
import Patents from './pages/Patents'
import Media from './pages/Media'

function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Innovation />
      <ProductShowcase />
      <Team />
      <Contact />
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/product" component={Product} />
        <Route path="/patents" component={Patents} />
        <Route path="/media" component={Media} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App