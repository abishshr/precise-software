'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Shield, Zap, Headphones, ChevronRight, Play, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.08 } }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
};

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100svh-64px)] flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-blue-100/50 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-slate-200/60 shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-600">
                Building software for Indonesia
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
            >
              <span className="text-slate-900">
                {t.home.hero.title.split(' ').slice(0, -1).join(' ')}
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {t.home.hero.title.split(' ').slice(-1)[0]}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="mt-5 md:mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
            >
              {t.home.hero.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Link
                href="#products"
                className="group w-full sm:w-auto px-7 py-3.5 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-slate-900/25 hover:shadow-xl hover:-translate-y-0.5"
              >
                {t.home.hero.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/628123105878"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-7 py-3.5 bg-white text-slate-700 font-medium rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
              >
                <Play className="w-4 h-4 text-green-500" />
                WhatsApp
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10"
            >
              {[
                { icon: CheckCircle2, text: '99.9% Uptime' },
                { icon: CheckCircle2, text: 'Local Support' },
                { icon: CheckCircle2, text: 'Free Trial' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-500">
                  <item.icon className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-20 bg-slate-50/80">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3 uppercase tracking-wide"
            >
              {t.home.products.title}
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900"
            >
              {t.home.products.subtitle}
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* WarungOS Card */}
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-shadow duration-300"
            >
                              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <Image
                  src="/screenshots/warungos-pos.png"
                  alt="WarungOS POS System"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                    {t.home.products.warungos.badge}
                  </span>
                  <span className="text-xs text-slate-400">Restaurant & Retail</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  WarungOS
                </h3>

                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {t.home.products.warungos.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {t.home.products.warungos.features.map((feature, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href="/warungos"
                    className="group/btn flex items-center gap-1.5 px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    {t.home.products.learn}
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                  <a
                    href="https://warungos-frontend.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-slate-600 text-sm font-medium rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
                  >
                    {t.home.products.demo}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* StudioDesk Card */}
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <Image
                  src="/screenshots/studiodesk-schedule.png"
                  alt="StudioDesk Management"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                    {t.home.products.studiodesk.badge}
                  </span>
                  <span className="text-xs text-slate-400">Fitness & Wellness</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  StudioDesk
                </h3>

                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {t.home.products.studiodesk.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {t.home.products.studiodesk.features.map((feature, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href="/studiobook"
                    className="group/btn flex items-center gap-1.5 px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    {t.home.products.learn}
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                  <a
                    href="https://studiodesk.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-slate-600 text-sm font-medium rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
                  >
                    {t.home.products.demo}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Image */}
      <section className="relative py-14 md:py-16 bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80"
            alt="Team collaboration"
            fill
            className="object-cover opacity-[0.04]"
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '24/7', label: 'Support Ready' },
              { value: '< 1s', label: 'Load Time' },
              { value: '100%', label: 'Local Team' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-slate-100"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs md:text-sm text-slate-500 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 md:py-20 bg-slate-50/80">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-3 py-1 bg-slate-200 text-slate-700 text-xs font-semibold rounded-full mb-3 uppercase tracking-wide"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900"
            >
              {t.home.why.title}
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-5"
          >
            {/* Reliable */}
            <motion.div
              variants={fadeInUp}
              className="group relative p-6 md:p-8 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/25 mb-5">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {t.home.why.reliable.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.home.why.reliable.desc}
              </p>
            </motion.div>

            {/* Easy */}
            <motion.div
              variants={fadeInUp}
              className="group relative p-6 md:p-8 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/25 mb-5">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {t.home.why.easy.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.home.why.easy.desc}
              </p>
            </motion.div>

            {/* Support */}
            <motion.div
              variants={fadeInUp}
              className="group relative p-6 md:p-8 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/25 mb-5">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {t.home.why.support.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.home.why.support.desc}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
            alt="Business meeting"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/95" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
            >
              {t.home.cta.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-base md:text-lg text-slate-300"
            >
              {t.home.cta.subtitle}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Link
                href="/contact"
                className="group w-full sm:w-auto px-7 py-3.5 bg-white text-slate-900 font-medium rounded-xl hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {t.home.cta.contact}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/628123105878"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-7 py-3.5 bg-green-500 text-white font-medium rounded-xl hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-500/25 hover:shadow-xl hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t.home.cta.whatsapp}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
