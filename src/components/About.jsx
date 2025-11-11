export default function About() {
  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-gray-900">Tentang Komunitas</h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Diecast Balikpapan adalah komunitas yang berdiri sejak 2018, bertujuan untuk menyatukan pecinta diecast dari berbagai usia dan latar belakang. Kami rutin mengadakan kopdar, lelang, tukar koleksi, dan pameran.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Kopdar bulanan</li>
              <li>• Lelang dan barter diecast</li>
              <li>• Pameran dan showcase koleksi</li>
              <li>• Edukasi perawatan dan custom</li>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow bg-gradient-to-br from-indigo-50 to-purple-50" />
          </div>
        </div>
      </div>
    </section>
  )
}
