'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 64) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Section - Not Sticky */}
      <div className="bg-[#0d0221] border-b border-[#3a1772]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <h1
                className="text-lg sm:text-xl md:text-2xl font-black text-white"
                style={{
                  textShadow: '0 0 20px #b14aed, 0 0 40px #3a1772, 2px 2px 0px #0d0221',
                  WebkitTextStroke: '0.5px #3a1772'
                }}
              >
                GameVoucher
              </h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <Link
                href="/beranda"
                className="text-sm xl:text-base text-[#fba7e9] hover:text-[#b14aed] font-medium transition-colors duration-200"
              >
                Beranda
              </Link>
              <Link
                href="/lacak-pesanan"
                className="text-sm xl:text-base text-[#fba7e9] hover:text-[#b14aed] font-medium transition-colors duration-200"
              >
                Lacak Pesanan
              </Link>
              <div className="flex items-center space-x-2 xl:space-x-3">
                <Link
                  href="/login"
                  className="px-3 xl:px-4 py-1.5 xl:py-2 text-sm font-semibold text-[#b14aed] hover:text-[#fba7e9] transition-colors"
                >
                  Masuk
                </Link>
                <Link
                  href="/register"
                  className="px-4 xl:px-5 py-1.5 xl:py-2 bg-[#b14aed] text-white text-sm rounded-full font-semibold hover:bg-[#3a1772] hover:shadow-lg hover:shadow-[#b14aed]/50 hover:scale-105 transition-all duration-200 border-2 border-[#b14aed] hover:border-[#fba7e9]"
                >
                  Daftar
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#fba7e9] hover:text-[#b14aed] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#3a1772]/30 bg-[#0d0221]">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
              <Link
                href="/beranda"
                className="block text-[#fba7e9] hover:text-[#b14aed] font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link
                href="/lacak-pesanan"
                className="block text-[#fba7e9] hover:text-[#b14aed] font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Lacak Pesanan
              </Link>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/login"
                  className="text-center px-4 py-2 text-sm font-semibold text-[#b14aed] hover:text-[#fba7e9] transition-colors border border-[#b14aed] rounded-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Masuk
                </Link>
                <Link
                  href="/register"
                  className="text-center px-5 py-2 bg-[#b14aed] text-white rounded-full text-sm font-semibold hover:bg-[#3a1772] transition-all duration-200 border-2 border-[#b14aed]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Daftar
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Section - Sticky with Glass Effect */}
      <div
        className={`sticky top-0 z-50 transition-all duration-300 py-3 sm:py-4 md:py-5 ${
          isScrolled
            ? 'bg-[#0d0221]/70 backdrop-blur-xl shadow-2xl shadow-[#b14aed]/30 border-b border-[#b14aed]/50'
            : 'bg-[#0d0221] border-b border-[#3a1772]/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-4 h-12 sm:h-14">
            {/* Search Bar */}
            <div className="flex-1 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari game..."
                  className="w-full px-3 sm:px-4 py-2 pl-9 sm:pl-10 text-sm sm:text-base bg-[#3a1772]/50 border border-[#b14aed]/30 rounded-full text-[#fba7e9] placeholder-[#fba7e9]/50 focus:outline-none focus:border-[#b14aed] focus:bg-[#3a1772]/70 transition-all"
                />
                <svg
                  className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#fba7e9]/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Semua Game Link */}
            <Link
              href="/semua-game"
              className="flex-shrink-0 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base bg-[#3a1772] text-[#fba7e9] rounded-full font-semibold hover:bg-[#b14aed] hover:text-white hover:shadow-lg hover:shadow-[#b14aed]/50 transition-all duration-200 border-2 border-[#b14aed]/30 hover:border-[#b14aed] whitespace-nowrap"
            >
              <span className="hidden sm:inline">Semua Game</span>
              <span className="sm:hidden">Game</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}