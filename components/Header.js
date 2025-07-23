
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-800">
          <Link href="/">GreenScape Solutions</Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-gray-600 hover:text-green-800">Home</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-green-800">Services</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-green-800">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-green-800">Contact</Link></li>
              <li><Link href="/search" className="text-gray-600 hover:text-green-800">Search</Link></li>
            </ul>
          </nav>
          <a href="tel:1300123456" className="flex items-center text-green-700 font-bold hover:text-green-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.76a11.05 11.05 0 006.364 6.364l.76-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.153a1 1 0 01-.986-.836l-.74-4.435a1 1 0 01.54-1.06l1.518-.76a11.05 11.05 0 00-6.364-6.364l-.76 1.518a1 1 0 01-1.06.54l-4.435-.74A1 1 0 012 3z" />
            </svg>
            1300 123 456
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-6 pt-2 pb-4">
          <nav>
            <ul>
              <li className="block py-2"><Link href="/" className="text-gray-600 hover:text-green-800">Home</Link></li>
              <li className="block py-2"><Link href="/services" className="text-gray-600 hover:text-green-800">Services</Link></li>
              <li className="block py-2"><Link href="/about" className="text-gray-600 hover:text-green-800">About</Link></li>
              <li className="block py-2"><Link href="/contact" className="text-gray-600 hover:text-green-800">Contact</Link></li>
              <li className="block py-2"><Link href="/search" className="text-gray-600 hover:text-green-800">Search</Link></li>
              <li className="block py-2">
                <a href="tel:1300123456" className="flex items-center text-green-700 font-bold hover:text-green-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.76a11.05 11.05 0 006.364 6.364l.76-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.153a1 1 0 01-.986-.836l-.74-4.435a1 1 0 01.54-1.06l1.518-.76a11.05 11.05 0 00-6.364-6.364l-.76 1.518a1 1 0 01-1.06.54l-4.435-.74A1 1 0 012 3z" />
                  </svg>
                  1300 123 456
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
