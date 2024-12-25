import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold">GENx Club</h3>
            <p className="mt-2 text-sm">Sereshah Engineering College</p>
          </div>
          <div className="w-full md:w-1/3 text-center mt-4 md:mt-0">
            <h4 className="text-sm font-semibold mb-2">Connect with us</h4>
            <div className="flex justify-center space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Instagram</a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Discord</a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Telegram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">LinkedIn</a>
            </div>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right mt-4 md:mt-0">
            <Link href="/contact" className="text-sm hover:text-gray-300">Contact Us</Link>
            <p className="mt-2 text-xs">&copy; 2025 GENx Club. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

