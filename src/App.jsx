import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Events from './components/Events'
import Join from './components/Join'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Events />
        <Join />
        <footer className="py-10 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600">
            <p>© {new Date().getFullYear()} Diecast Balikpapan. All rights reserved.</p>
            <p className="text-sm">Made with ❤️ by komunitas</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
