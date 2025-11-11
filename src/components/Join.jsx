import { useState } from 'react'

export default function Join() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="gabung" className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Gabung Komunitas</h2>
        <p className="mt-3 text-gray-600">Isi formulir singkat ini, kami akan mengundangmu ke grup WhatsApp.</p>

        {!submitted ? (
          <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4 text-left">
            <input required placeholder="Nama" className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input required placeholder="Email" type="email" className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input required placeholder="Nomor WhatsApp" className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <button className="mt-2 inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-700">
              Kirim
            </button>
          </form>
        ) : (
          <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-6 text-green-800">
            Terima kasih! Kami akan menghubungi kamu segera.
          </div>
        )}
      </div>
    </section>
  )
}
