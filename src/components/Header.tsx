'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <span className="text-white font-bold text-sm sm:text-base">PS</span>
            </div>
            <span className="font-bold text-lg sm:text-xl text-gray-900">precise-software</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/warungos"
              className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              WarungOS
            </Link>
            <Link
              href="/studiobook"
              className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              StudioDesk
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="ml-2 text-white font-medium px-5 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-1 border-t border-gray-100">
            <Link
              href="/warungos"
              className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium py-3 px-4 rounded-xl transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              WarungOS
            </Link>
            <Link
              href="/studiobook"
              className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium py-3 px-4 rounded-xl transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              StudioDesk
            </Link>
            <Link
              href="/about"
              className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium py-3 px-4 rounded-xl transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-center text-white font-medium py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 mt-2 shadow-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
