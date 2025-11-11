import { motion } from 'framer-motion'
import { Car } from 'lucide-react'

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
      <div className="absolute -top-24 -right-24 h-72 w-72 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
            >
              Komunitas Diecast Balikpapan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg text-gray-600"
            >
              Tempat berkumpulnya kolektor dan penggemar diecast di Balikpapan. Berbagi koleksi, cerita, dan acara seru bersama.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex items-center gap-3"
            >
              <a href="#gabung" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-700">
                Gabung Komunitas
              </a>
              <a href="#galeri" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-gray-700 font-medium hover:bg-gray-50">
                Lihat Galeri
              </a>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[{label:'Anggota', value:'150+'},{label:'Acara', value:'30+'},{label:'Koleksi', value:'1000+'}].map((s) => (
                <div key={s.label} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                  <p className="text-sm text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 bg-white shadow">
              <div className="absolute inset-0 grid grid-cols-3 gap-2 p-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="rounded-md bg-gradient-to-tr from-indigo-100 to-purple-100 border border-white/60 flex items-center justify-center">
                    <Car className="h-10 w-10 text-indigo-400" />
                  </div>
                ))}
              </div>
              <img
                src="https://images.unsplash.com/photo-1590999659190-a3dafee20d2e?q=80&w=1400&auto=format&fit=crop"
                alt="Diecast showcase"
                className="h-full w-full object-cover opacity-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
