export default function Events() {
  const events = [
    { date: '24 Nov 2025', title: 'Kopdar & Swap Meet', desc: 'Kumpul rutin di Balikpapan Superblock, bawa koleksimu!' },
    { date: '08 Des 2025', title: 'Mini Expo Diecast', desc: 'Pameran kecil-kecilan dengan lapak komunitas.' },
    { date: '20 Des 2025', title: 'Workshop Custom', desc: 'Belajar repaint dan detailing bersama senior.' },
  ]

  return (
    <section id="acara" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Acara Terdekat</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e) => (
            <div key={e.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-indigo-600">{e.date}</p>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">{e.title}</h3>
              <p className="mt-2 text-gray-600">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
