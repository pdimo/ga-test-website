

import Head from 'next/head'
import { useState, useEffect } from 'react'

const dummyData = [
  { title: 'Commercial Landscape Design', description: 'We create stunning and sustainable landscape designs that enhance your property\'s value and appeal.' },
  { title: 'Automated Irrigation Systems', description: 'Save water and maintain a lush landscape with our state-of-the-art automated irrigation solutions.' },
  { title: 'Hardscaping and Outdoor Structures', description: 'Patios, walkways, retaining walls, and more. We build beautiful and functional outdoor living spaces.' },
  { title: 'Seasonal Color and Plantings', description: 'Keep your landscape vibrant year-round with our seasonal color and planting services.' },
  { title: 'Tree and Shrub Care', description: 'Expert pruning, fertilization, and disease control for healthy trees and shrubs.' },
  { title: 'Lawn Care and Maintenance', description: 'Comprehensive lawn care services to keep your turf green and healthy.' },
  { title: 'Green Roof Installation', description: 'Transform your rooftop into a vibrant, living space with our green roof installation services. Improves insulation and reduces stormwater runoff.' },
  { title: 'Vertical Gardens & Living Walls', description: 'Maximize your green space with stunning vertical gardens. Ideal for urban environments, offices, and retail spaces.' },
  { title: 'Drought-Tolerant Landscaping (Xeriscaping)', description: 'Create a beautiful, low-maintenance landscape that conserves water with our expert xeriscaping and drought-tolerant plant selection.' },
  { title: 'Commercial Grounds Management', description: 'Comprehensive, year-round grounds management to keep your commercial property looking its best. Includes mowing, edging, and cleanup.' },
  { title: 'Outdoor Lighting Solutions', description: 'Enhance the safety and beauty of your property with custom-designed, energy-efficient outdoor lighting systems.' },
  { title: 'Water Features and Ponds', description: 'Add a touch of tranquility with custom-designed ponds, waterfalls, and fountains. A focal point for any landscape.' },
  { title: 'Sports Field Maintenance', description: 'Specialized care for athletic fields, including turf management, aeration, and line marking to ensure a safe and professional playing surface.' },
  { title: 'Corporate Campus Landscaping', description: 'We design, build, and maintain inspiring landscapes for corporate campuses that promote employee well-being and brand identity.' },
  { title: 'Retail & Shopping Centre Landscapes', description: 'Create an inviting atmosphere for shoppers with attractive and well-maintained landscapes for retail centers and storefronts.' },
  { title: 'Hospitality & Resort Landscaping', description: 'Design and maintain luxurious and relaxing landscapes for hotels, resorts, and hospitality venues to enhance the guest experience.' },
  { title: 'Public Parks and Recreational Areas', description: 'Durable and beautiful landscape solutions for public parks, playgrounds, and community spaces.' },
  { title: 'Soil Analysis and Improvement', description: 'Ensure the health of your landscape from the ground up with our professional soil testing and amendment services.' },
  { title: 'Integrated Pest Management (IPM)', description: 'Environmentally-sensitive pest control solutions that protect your landscape and the ecosystem.' },
  { title: 'Holiday and Event-Based Decorations', description: 'Seasonal decoration services to make your commercial property festive for holidays and special events.' },
  { title: 'Consulting and Master Planning', description: 'Long-term landscape planning and consulting services to help you achieve your property goals sustainably and cost-effectively.' },
  { title: 'Urban Farming Solutions', description: 'Design and implementation of urban farming spaces, including community gardens and rooftop farms.' },
  { title: 'Noise Reduction Barriers', description: 'Installation of natural sound barriers using trees, shrubs, and berms to reduce noise pollution.' },
  { title: 'Erosion Control', description: 'Solutions to prevent soil erosion on slopes and banks using plants and other natural materials.' },
  { title: 'Wetland Restoration', description: 'Restoring and creating wetland habitats to improve water quality and support local wildlife.' },
  { title: 'Sustainable Drainage Systems (SuDS)', description: 'Designing and implementing drainage solutions that mimic natural processes to manage stormwater runoff effectively.' },
  { title: 'Garden Mulching Services', description: 'Application of organic mulch to retain soil moisture, suppress weeds, and improve soil health.' },
  { title: 'Commercial Tree Removal', description: 'Safe and efficient removal of large or hazardous trees from commercial properties.' },
  { title: 'Stump Grinding', description: 'Complete removal of tree stumps to allow for new planting or construction.' },
  { title: 'Landscape Renovation', description: 'Updating and revitalizing existing landscapes to improve their appearance and functionality.' },
  { title: 'Fire-Resistant Landscaping', description: 'Creating defensible space around properties in fire-prone areas using fire-resistant plants and materials.' },
  { title: 'Pollinator Gardens', description: 'Designing gardens that attract and support bees, butterflies, and other pollinators.' },
  { title: 'Outdoor Seating Areas', description: 'Creating comfortable and inviting outdoor seating areas for employees and customers.' },
  { title: 'Deck and Patio Construction', description: 'Building custom decks and patios to extend your usable outdoor space.' },
  { title: 'Pergola and Gazebo Installation', description: 'Adding architectural elements like pergolas and gazebos for shade and visual interest.' },
  { title: 'Fence Installation and Repair', description: 'Installation of various types of fencing for privacy, security, and aesthetic purposes.' },
  { title: 'Seasonal Clean-Up', description: 'Spring and fall clean-up services to prepare your landscape for the coming season.' },
  { title: 'Snow and Ice Management', description: 'Reliable snow plowing and ice removal services to keep your commercial property safe and accessible in winter.' },
  { title: 'Green Waste Removal', description: 'Responsible removal and recycling of green waste from your landscaping projects.' },
  { title: 'Plant Health Care Programs', description: 'Proactive monitoring and treatment programs to keep your plants healthy and thriving.' },
  { title: 'Landscape Lighting Maintenance', description: 'Ongoing maintenance and repair of outdoor lighting systems to ensure they are always working correctly.' }
];

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(dummyData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    if (searchTerm === '') {
      setSearchResults(dummyData);
    } else {
      const results = dummyData.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
    setCurrentPage(1); // Reset to first page on new search
  }, [searchTerm]);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(searchResults.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <Head>
        <title>GreenScape Solutions - Search</title>
      </Head>

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Search Our Services</h1>

        <div className="max-w-lg mx-auto mb-8">
          <input
            type="text"
            placeholder="Search for a service..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          {currentItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <nav className="mt-8">
          <ul className="flex justify-center space-x-2">
            {pageNumbers.map(number => (
              <li key={number}>
                <button
                  onClick={() => paginate(number)}
                  className={`px-4 py-2 border rounded-lg ${currentPage === number ? 'bg-green-700 text-white' : 'bg-white text-gray-700'}`}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

