
import Head from 'next/head'

export default function About() {
  return (
    <div>
      <Head>
        <title>GreenScape Solutions - About Us</title>
      </Head>

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">About GreenScape Solutions</h1>
        <p className="text-lg text-gray-700 mb-8">
          Founded in 2010, GreenScape Solutions has been a leader in innovative and sustainable commercial landscaping in Australia. Our mission is to create beautiful, functional, and environmentally friendly landscapes that stand the test of time.
        </p>

        <div className="w-full max-w-4xl mx-auto mb-12 h-[560px]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded YouTube video"
          ></iframe>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Philosophy</h2>
          <p className="text-lg text-gray-700 mb-8">
            At GreenScape Solutions, we believe that a well-designed commercial landscape is more than just an aesthetic enhancement. It's a reflection of your business's values and a commitment to creating a positive and welcoming environment for your clients and employees. We are dedicated to using sustainable practices and materials to create landscapes that are not only beautiful but also environmentally responsible.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Our team of experienced landscape architects, designers, and horticulturists work closely with each client to understand their unique needs and vision. We then translate that vision into a reality that exceeds expectations. From the initial consultation to the final installation and ongoing maintenance, we are committed to providing the highest level of service and quality.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            We specialize in a wide range of commercial landscaping services, including landscape design and installation, hardscaping, irrigation systems, and ongoing maintenance. We have experience working with a variety of clients, from small businesses to large corporate campuses. No matter the size or scope of the project, we are dedicated to delivering exceptional results.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Our commitment to sustainability is at the core of everything we do. We use native plants and drought-tolerant species to conserve water, and we use organic fertilizers and pest control methods to protect the environment. We also use recycled materials whenever possible, and we are always looking for new and innovative ways to reduce our environmental impact.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            We are proud to be a leader in the commercial landscaping industry in Australia. We are committed to providing our clients with the highest level of service and quality, and we are dedicated to creating beautiful, sustainable, and functional landscapes that will be enjoyed for years to come.
          </p>

          <h2 className="text-3xl font-bold text-center mt-16 mb-8">Meet the Team</h2>
          <p className="text-lg text-gray-700 mb-8">
            Our success is a testament to the dedication and expertise of our team. We are a group of passionate professionals who are committed to creating beautiful and sustainable landscapes.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
           <p className="text-lg text-gray-700 mb-8">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </div>
      </div>
    </div>
  )
}
