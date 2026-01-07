'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Users, QrCode, CreditCard, BarChart3, MessageSquare, ExternalLink, ArrowRight } from 'lucide-react';
import { ScreenshotGallery } from '@/components/screenshot-gallery';
import { useLanguage } from '@/lib/i18n';

const screenshots = [
  { title: 'Jadwal', description: 'Kalender kelas', image: '/screenshots/studiodesk-schedule.png' },
  { title: 'Member', description: 'Manajemen member', image: '/screenshots/studiodesk-customers.png' },
  { title: 'Check-in', description: 'QR absensi', image: '/screenshots/studiodesk-checkin.png' },
  { title: 'Keuangan', description: 'Tracking revenue', image: '/screenshots/studiodesk-finance.png' },
  { title: 'Membership', description: 'Manajemen plan', image: '/screenshots/studiodesk-memberships.png' },
  { title: 'Kelas', description: 'Template sesi', image: '/screenshots/studiodesk-classes.png' },
];

export default function StudioDesk() {
  const { t, lang } = useLanguage();

  const features = [
    { icon: Calendar, title: lang === 'id' ? 'Jadwal Kelas' : 'Class Schedule', desc: lang === 'id' ? 'Kalender mingguan dengan sesi berulang.' : 'Weekly calendar with recurring sessions.' },
    { icon: Users, title: lang === 'id' ? 'Manajemen Member' : 'Member Management', desc: lang === 'id' ? 'Tracking booking dan status membership.' : 'Booking tracking and membership status.' },
    { icon: QrCode, title: 'QR Check-in', desc: lang === 'id' ? 'Scan cepat untuk absensi kehadiran.' : 'Quick scan for attendance.' },
    { icon: CreditCard, title: 'Membership', desc: lang === 'id' ? 'Paket dan plan unlimited.' : 'Packages and unlimited plans.' },
    { icon: BarChart3, title: lang === 'id' ? 'Keuangan' : 'Finance', desc: lang === 'id' ? 'Analisis income dan expenses.' : 'Income and expense analysis.' },
    { icon: MessageSquare, title: 'WhatsApp', desc: lang === 'id' ? 'Kirim konfirmasi dan reminder.' : 'Send confirmations and reminders.' },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full mb-4">
              Studio Management
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              StudioDesk
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              {lang === 'id'
                ? 'Sistem manajemen untuk studio fitness, yoga, dan dance. Jadwal kelas, membership, dan check-in QR.'
                : 'Management system for fitness, yoga, and dance studios. Class schedules, membership, and QR check-in.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://studiodesk.org/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
              >
                {t.product.tryDemo}
                <ExternalLink size={16} />
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
                src="/screenshots/studiodesk-schedule.png"
                alt="StudioDesk Schedule"
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
            <p className="text-slate-600">{lang === 'id' ? 'Semua yang dibutuhkan untuk mengelola studio' : 'Everything you need to manage your studio'}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <f.icon size={22} className="text-purple-600" />
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

      {/* Demo */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-3">{t.product.tryDemo}</h2>
              <p className="text-slate-600 text-sm mb-6">{t.product.demoAccess}</p>

              <div className="bg-slate-50 rounded-lg p-4 mb-6 text-left font-mono text-sm">
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-slate-500">URL:</span>
                  <span className="text-slate-900">studiodesk.org/login</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-slate-500">Email:</span>
                  <span className="text-slate-900">demo@studiodesk.org</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500">Password:</span>
                  <span className="text-slate-900">Demo2024!</span>
                </div>
              </div>

              <a
                href="https://studiodesk.org/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
              >
                {t.product.openDemo}
                <ExternalLink size={16} />
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
              {t.product.interested} StudioDesk?
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
