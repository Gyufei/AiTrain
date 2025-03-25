"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { MonadLogo } from "./monad-logo"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
      <div className="container fixed top-0 sm:top-2 left-[50%] translate-x-[-50%] z-50 flex flex-row items-center justify-between w-full container py-4 sm:py-5  after:content-[''] after:pointer-events-none after:absolute after:h-full after:w-full after:inset-0 after:-z-10 after:bg-black/20 after:backdrop-blur-md after:md:max-w-[1024px] after:lg:max-w-[944px] after:xl:max-w-[1168px] after:2xl:max-w-[1248px] after:sm:rounded-full after:left-[50%] after:translate-x-[-50%] after:border-b-[2px] after:sm:border-[2px] after:border-[hsla(249,91%,71%,0.4)]">
        <div className="logo-container relative z-10">
          <Link
            href="/"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-primary rounded-sm"
          >
            <MonadLogo />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6 ">
          <Link href="/" className="text-sm md:text-base font-medium transition-colors text-white hover:text-white/80">
            Home
          </Link>
          <a
            href="https://developers.monad.xyz"
            className="text-sm md:text-base font-medium transition-colors text-white hover:text-white/80"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developer Portal
          </a>
          <a
            href="https://monad.xyz/ecosystem"
            className="text-sm md:text-base font-medium transition-colors text-white hover:text-white/80"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ecosystem Directory
          </a>
          <Link
            href="/nfts"
            className="text-sm md:text-base font-medium transition-colors text-white hover:text-white/80"
          >
            NFTs
          </Link>
        </div>

        <div className="md:hidden">
          <button
            className="p-2 text-white focus:outline-none"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </button>
        </div>
      </div>
  )
}

