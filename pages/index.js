
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>GreenScape Solutions - Home</title>
      </Head>

      <section className="bg-green-700 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Your Vision, Our Green Reality</h1>
          <p className="text-xl mb-8">Modern commercial landscaping solutions for a sustainable future.</p>
          <button className="bg-white text-green-700 font-bold py-3 px-6 rounded-full hover:bg-gray-200">
            Get a Free Quote
          </button>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Learn More?</h2>
          <button className="bg-green-700 text-white font-bold py-3 px-6 rounded-full hover:bg-green-800">
            Learn More
          </button>
        </div>
      </section>
    </div>
  )
}
