'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const toggleLang = () => {
    setLang(lang === 'en' ? 'id' : 'en');
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-slate-900">
            precise<span className="text-slate-400">-software</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/warungos" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">
              WarungOS
            </Link>
            <Link href="/studiobook" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">
              StudioDesk
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">
              {t.nav.about}
            </Link>

            {/* Language Switch */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-all"
              title="Switch language"
            >
              <Globe size={14} />
              {lang === 'en' ? 'EN' : 'ID'}
            </button>

            <Link
              href="/contact"
              className="px-5 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
            >
              {t.nav.contact}
            </Link>
          </nav>

          {/* Mobile: Lang + Menu */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-2.5 py-1.5 text-sm font-medium text-slate-500 bg-slate-50 border border-slate-200 rounded-lg"
            >
              <Globe size={14} />
              {lang === 'en' ? 'EN' : 'ID'}
            </button>
            <button
              className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-100">
            <div className="flex flex-col gap-1">
              <Link
                href="/warungos"
                className="py-3 px-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                WarungOS
              </Link>
              <Link
                href="/studiobook"
                className="py-3 px-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                StudioDesk
              </Link>
              <Link
                href="/about"
                className="py-3 px-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.about}
              </Link>
              <Link
                href="/contact"
                className="mt-2 py-3 px-5 bg-slate-900 text-white text-center font-medium rounded-lg hover:bg-slate-800 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.contact}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
