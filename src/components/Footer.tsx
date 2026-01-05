'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block font-bold text-2xl mb-4">
              precise<span className="text-slate-500">-software</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-5">
              {t.footer.products}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/warungos" className="text-slate-300 hover:text-white transition-colors">
                  WarungOS
                </Link>
              </li>
              <li>
                <Link href="/studiobook" className="text-slate-300 hover:text-white transition-colors">
                  StudioDesk
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-5">
              {t.footer.company}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  {t.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  {t.footer.contactLink}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-5">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/628123105878"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  +62 812-3105-8788
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@precise-software.com"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  info@precise-software.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800">
          <p className="text-slate-500 text-sm text-center">
            &copy; {new Date().getFullYear()} precise-software. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
