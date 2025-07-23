
import Head from 'next/head'

export default function Services() {
  return (
    <div>
      <Head>
        <title>GreenScape Solutions - Services</title>
      </Head>

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Commercial Landscape Design</h2>
            <p>We create stunning and sustainable landscape designs that enhance your property's value and appeal.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Automated Irrigation Systems</h2>
            <p>Save water and maintain a lush landscape with our state-of-the-art automated irrigation solutions.</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/brochure.pdf" id="download-brochure-btn" className="bg-green-700 text-white font-bold py-3 px-6 rounded-full hover:bg-green-800">
            Download Our Brochure
          </a>
        </div>
      </div>
    </div>
  )
}
