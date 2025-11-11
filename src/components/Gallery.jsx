import { useState } from 'react'

const sample = [
  'https://images.unsplash.com/photo-1590999659190-a3dafee20d2e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517271710308-aa99ced49b85?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1601314167099-bb24c8773fbd?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1591320792885-66166fb1b1c9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1589802829985-817e51171bcd?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1604074883249-d4a7a62f97d2?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery() {
  const [active, setActive] = useState(0)

  return (
    <section id="galeri" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Galeri Koleksi</h2>
          <div className="flex gap-2">
            {sample.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} className={`h-2 w-6 rounded-full ${active === i ? 'bg-indigo-600' : 'bg-gray-300'}`} />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sample.map((src, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow ${active === i ? 'ring-2 ring-indigo-500' : ''}`}>
              <img src={src} alt={`Diecast ${i+1}`} className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
