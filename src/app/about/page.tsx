'use client';

import { Code2, Heart, Zap, Globe } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Code2,
      title: t.about.values.quality.title,
      description: t.about.values.quality.desc,
    },
    {
      icon: Heart,
      title: t.about.values.user.title,
      description: t.about.values.user.desc,
    },
    {
      icon: Zap,
      title: t.about.values.simple.title,
      description: t.about.values.simple.desc,
    },
    {
      icon: Globe,
      title: t.about.values.everyone.title,
      description: t.about.values.everyone.desc,
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="section section-gray">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="mb-4">{t.about.title}</h1>
            <p className="text-lg text-muted">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-6 text-left">{t.about.story.title}</h2>
            <div className="space-y-4 text-muted">
              <p>{t.about.story.p1}</p>
              <p>
                {t.about.story.p2.split('WarungOS')[0]}
                <span className="text-gray-900 font-medium">WarungOS</span>
                {t.about.story.p2.split('WarungOS')[1]}
              </p>
              <p>{t.about.story.p3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-gray">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t.about.values.title}</h2>
            <p className="text-muted">{t.about.values.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6">
                <div className="icon-box mx-auto mb-4 bg-blue-50">
                  <value.icon size={24} className="text-blue-600" />
                </div>
                <h3 className="font-medium mb-2">{value.title}</h3>
                <p className="text-muted text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="mb-4">{t.about.team.title}</h2>
            <p className="text-muted mb-6">{t.about.team.desc}</p>
            <p className="text-muted">{t.about.team.location}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-gray">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-4">{t.about.cta.title}</h2>
            <p className="text-muted mb-8">{t.about.cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary">
                {t.home.cta.contact}
              </Link>
              <a
                href="https://wa.me/628123105878"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-green-500 hover:bg-green-600 text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
