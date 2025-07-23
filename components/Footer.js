
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; 2025 GreenScape Solutions. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">LinkedIn</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">Instagram</a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">Facebook</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
