'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from "@/components/ui/button"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold">
            <Link href="/">GENx Club</Link>
          </div>
          <div className="hidden md:flex">
            <Link href="/" className="mx-4 hover:text-gray-300">Home</Link>
            <Link href="/about" className="mx-4 hover:text-gray-300">About</Link>
            <Link href="/domains" className="mx-4 hover:text-gray-300">Domains</Link>
            <Link href="/events" className="mx-4 hover:text-gray-300">Events</Link>
            <Link href="/team" className="mx-4 hover:text-gray-300">Team</Link>
            <Link href="/contact" className="mx-4 hover:text-gray-300">Contact</Link>
          </div>
          <div className="hidden md:flex items-center">
            <Link href="/login">
              <Button variant="secondary" className="mr-2">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <Link href="/" className="block py-2 hover:text-gray-300">Home</Link>
            <Link href="/about" className="block py-2 hover:text-gray-300">About</Link>
            <Link href="/domains" className="block py-2 hover:text-gray-300">Domains</Link>
            <Link href="/events" className="block py-2 hover:text-gray-300">Events</Link>
            <Link href="/team" className="block py-2 hover:text-gray-300">Team</Link>
            <Link href="/contact" className="block py-2 hover:text-gray-300">Contact</Link>
            <Link href="/login" className="block py-2 hover:text-gray-300">Login</Link>
            <Link href="/signup" className="block py-2 hover:text-gray-300">Sign Up</Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

