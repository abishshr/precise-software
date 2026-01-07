'use client';

import { Code2, Heart, Zap, Globe, ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Code2,
      title: t.about.values.quality.title,
      description: t.about.values.quality.desc,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Heart,
      title: t.about.values.user.title,
      description: t.about.values.user.desc,
      color: 'bg-rose-100 text-rose-600',
    },
    {
      icon: Zap,
      title: t.about.values.simple.title,
      description: t.about.values.simple.desc,
      color: 'bg-amber-100 text-amber-600',
    },
    {
      icon: Globe,
      title: t.about.values.everyone.title,
      description: t.about.values.everyone.desc,
      color: 'bg-emerald-100 text-emerald-600',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {t.about.title}
            </h1>
            <p className="text-lg text-slate-600">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              {t.about.story.title}
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>{t.about.story.p1}</p>
              <p>
                {t.about.story.p2.split('WarungOS')[0]}
                <span className="text-slate-900 font-semibold">WarungOS</span>
                {t.about.story.p2.split('WarungOS')[1]}
              </p>
              <p>{t.about.story.p3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              {t.about.values.title}
            </h2>
            <p className="text-slate-600">{t.about.values.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${value.color} flex items-center justify-center mx-auto mb-4`}>
                  <value.icon size={24} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              {t.about.team.title}
            </h2>
            <p className="text-slate-600 mb-6">{t.about.team.desc}</p>
            <div className="inline-flex items-center gap-2 text-slate-500">
              <MapPin size={18} />
              <span>{t.about.team.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-900">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {t.about.cta.title}
            </h2>
            <p className="text-slate-400 mb-8">{t.about.cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors"
              >
                {t.home.cta.contact}
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
