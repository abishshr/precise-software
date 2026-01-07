'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, ChefHat, Package, BarChart3, Users, ExternalLink, ArrowRight, Check, Star } from 'lucide-react';
import { ScreenshotGallery } from '@/components/screenshot-gallery';
import { useLanguage } from '@/lib/i18n';

const screenshots = [
  { title: 'Point of Sale', description: 'Interface checkout', image: '/screenshots/warungos-pos.png' },
  { title: 'Kitchen Display', description: 'Manajemen order', image: '/screenshots/warungos-kitchen.png' },
  { title: 'Produk', description: 'Katalog menu', image: '/screenshots/warungos-products.png' },
  { title: 'Meja', description: 'Floor plan', image: '/screenshots/warungos-tables.png' },
  { title: 'Inventory', description: 'Tracking stok', image: '/screenshots/warungos-inventory.png' },
  { title: 'Laporan', description: 'Analisis bisnis', image: '/screenshots/warungos-reports.png' },
];

export default function WarungOS() {
  const { t, lang } = useLanguage();

  const features = [
    { icon: ShoppingCart, title: 'Point of Sale', desc: lang === 'id' ? 'Checkout cepat dengan Cash, Card, QRIS, E-Wallet.' : 'Fast checkout with Cash, Card, QRIS, E-Wallet.' },
    { icon: ChefHat, title: 'Kitchen Display', desc: lang === 'id' ? 'Order real-time dengan status dan alert.' : 'Real-time orders with status and alerts.' },
    { icon: Package, title: 'Inventory', desc: lang === 'id' ? 'Tracking produk, bahan baku, dan resep.' : 'Product, ingredient, and recipe tracking.' },
    { icon: BarChart3, title: lang === 'id' ? 'Laporan' : 'Reports', desc: lang === 'id' ? 'Analisis penjualan, P&L, dan food cost.' : 'Sales analysis, P&L, and food cost.' },
    { icon: Users, title: lang === 'id' ? 'Manajemen Staff' : 'Staff Management', desc: lang === 'id' ? 'Akses berbasis role dan absensi.' : 'Role-based access and attendance.' },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full mb-4">
              POS System
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              WarungOS
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              {lang === 'id'
                ? 'Sistem POS modern untuk restoran, kafe, dan retail. Kitchen display, inventory, dan laporan lengkap.'
                : 'Modern POS system for restaurants, cafes, and retail. Kitchen display, inventory, and complete reports.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/6281938404308?text=Halo,%20saya%20tertarik%20untuk%20mencoba%20demo%20WarungOS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
              >
                {t.product.tryDemo}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-slate-700 font-medium rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                {t.product.contactSales}
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="/screenshots/warungos-pos.png"
                alt="WarungOS POS"
                width={1200}
                height={700}
                className="w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{t.product.features}</h2>
            <p className="text-slate-600">{t.product.featuresSubtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                  <f.icon size={22} className="text-emerald-600" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{t.product.screenshots}</h2>
            <p className="text-slate-600">{t.product.screenshotsSubtitle}</p>
          </div>
          <ScreenshotGallery screenshots={screenshots} />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              {lang === 'id' ? 'Pilih Paket Anda' : 'Choose Your Plan'}
            </h2>
            <p className="text-slate-600">
              {lang === 'id' ? 'Mulai dari yang kecil, berkembang sesuai kebutuhan' : 'Start small, grow as you need'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Warung Starter */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                  Starter
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Warung Starter</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-slate-900">Rp 49.000</span>
                <span className="text-slate-500"> / {lang === 'id' ? 'bulan' : 'month'}</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">
                Rp 490.000 / {lang === 'id' ? 'tahun' : 'year'} ({lang === 'id' ? '2 bulan GRATIS' : '2 months FREE'})
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>POS {lang === 'id' ? 'kasir' : 'checkout'}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{lang === 'id' ? 'Produk & harga' : 'Products & pricing'}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{lang === 'id' ? 'Stok masuk / keluar' : 'Stock in / out'}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{lang === 'id' ? 'Laporan penjualan harian' : 'Daily sales report'}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>1 user</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>1 outlet</span>
                </li>
              </ul>
              <a
                href="https://wa.me/6281938404308?text=Halo,%20saya%20tertarik%20dengan%20paket%20Warung%20Starter"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 text-center text-slate-700 font-medium rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                {lang === 'id' ? 'Mulai Sekarang' : 'Get Started'}
              </a>
            </div>

            {/* Warung Naik Kelas - Best Seller */}
            <div className="bg-white rounded-2xl border-2 border-blue-500 p-6 shadow-lg relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                  <Star size={12} fill="currentColor" />
                  BEST SELLER
                </span>
              </div>
              <div className="mb-4 mt-2">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                  Growth
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Warung Naik Kelas</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-slate-900">Rp 99.000</span>
                <span className="text-slate-500"> / {lang === 'id' ? 'bulan' : 'month'}</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">
                Rp 990.000 / {lang === 'id' ? 'tahun' : 'year'} ({lang === 'id' ? '2 bulan GRATIS' : '2 months FREE'})
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>{lang === 'id' ? 'Semua fitur Starter' : 'All Starter features'}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>{lang === 'id' ? 'Inventory lengkap + notifikasi stok habis' : 'Full inventory + low stock alerts'}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>{lang === 'id' ? 'Laporan bulanan' : 'Monthly reports'}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>{lang === 'id' ? 'Profit & loss sederhana' : 'Simple P&L'}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>{lang === 'id' ? 'Daftar pelanggan' : 'Customer list'}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>3 users</span>
                </li>
              </ul>
              <a
                href="https://wa.me/6281938404308?text=Halo,%20saya%20tertarik%20dengan%20paket%20Warung%20Naik%20Kelas"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 text-center text-white font-medium rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors"
              >
                {lang === 'id' ? 'Pilih Paket Ini' : 'Choose This Plan'}
              </a>
            </div>

            {/* Warung Profesional */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                  Pro
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Warung Profesional</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-slate-900">Rp 149.000</span>
                <span className="text-slate-500"> / {lang === 'id' ? 'bulan' : 'month'}</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">
                Rp 1.490.000 / {lang === 'id' ? 'tahun' : 'year'} ({lang === 'id' ? '2 bulan GRATIS' : '2 months FREE'})
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check size={16} className="text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>{lang === 'id' ? 'Semua fitur Naik Kelas' : 'All Growth features'}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check size={16} className="text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>{lang === 'id' ? 'Multi-cabang (hingga 3)' : 'Multi-branch (up to 3)'}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check size={16} className="text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>{lang === 'id' ? 'Hak akses karyawan' : 'Staff access control'}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check size={16} className="text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>{lang === 'id' ? 'Backup data otomatis' : 'Auto data backup'}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check size={16} className="text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>{lang === 'id' ? 'Export laporan (PDF/Excel)' : 'Export reports (PDF/Excel)'}</span>
                </li>
              </ul>
              <a
                href="https://wa.me/6281938404308?text=Halo,%20saya%20tertarik%20dengan%20paket%20Warung%20Profesional"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 text-center text-slate-700 font-medium rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                {lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Demo */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-3">{t.product.tryDemo}</h2>
              <p className="text-slate-600 text-sm mb-6">
                {lang === 'id'
                  ? 'Hubungi kami via WhatsApp untuk mendapatkan akses demo gratis'
                  : 'Contact us via WhatsApp to get free demo access'}
              </p>

              <a
                href="https://wa.me/6281938404308?text=Halo,%20saya%20tertarik%20untuk%20mencoba%20demo%20WarungOS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {lang === 'id' ? 'Minta Demo via WhatsApp' : 'Request Demo via WhatsApp'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-900">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {t.product.interested} WarungOS?
            </h2>
            <p className="text-slate-400 mb-8">{t.product.contactSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors"
              >
                {t.product.contactUs}
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/6281938404308"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
