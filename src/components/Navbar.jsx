import { useState } from 'react'
import { Menu, X, Car, Instagram, Facebook, Youtube } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#beranda', label: 'Beranda' },
    { href: '#tentang', label: 'Tentang' },
    { href: '#galeri', label: 'Galeri' },
    { href: '#acara', label: 'Acara' },
    { href: '#gabung', label: 'Gabung' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#beranda" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow">
              <Car className="h-5 w-5" />
            </span>
            <span className="font-semibold text-gray-900">Diecast Balikpapan</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                {item.label}
              </a>
            ))}
            <div className="hidden lg:flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="p-2 rounded-md hover:bg-gray-100">
                <Instagram className="h-5 w-5 text-gray-600" />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-md hover:bg-gray-100">
                <Facebook className="h-5 w-5 text-gray-600" />
              </a>
              <a href="#" aria-label="YouTube" className="p-2 rounded-md hover:bg-gray-100">
                <Youtube className="h-5 w-5 text-gray-600" />
              </a>
            </div>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-200 text-gray-700">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
