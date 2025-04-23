import React from 'react'
import { Pacifico } from "next/font/google";
import Link from 'next/link';

const pacifiko = Pacifico({ subsets: ["latin"], weight: "400" });

function Header() {
  return (
    <div>
      <header className="bg-blue-500 text-white">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className={`text-2xl font-bold ${pacifiko.className}`}>
            MyLogo
          </Link>

          {/* Search input */}
          <input
            type="text"
            placeholder="Ara..."
            className="w-full sm:w-64 px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
          />

          {/* Login button */}
          <Link href="/login" className="bg-white text-blue-500 font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition w-full sm:w-auto">Login</Link>
          
        </div>
      </header>


    </div>
  )
}

export default Header