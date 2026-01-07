'use client';

import { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-green-600" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              {t.contact.success.title}
            </h1>
            <p className="text-slate-600 mb-8">{t.contact.success.message}</p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', product: '', message: '' });
              }}
              className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
            >
              {t.contact.success.another}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {t.contact.title}
            </h1>
            <p className="text-lg text-slate-600">{t.contact.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder={t.contact.form.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder={t.contact.form.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-2">
                  {t.contact.form.product}
                </label>
                <select
                  id="product"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                >
                  <option value="">{t.contact.form.productPlaceholder}</option>
                  <option value="warungos">WarungOS</option>
                  <option value="studiobook">StudioDesk</option>
                  <option value="other">{t.contact.form.other}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
              >
                {t.contact.form.submit}
                <Send size={16} />
              </button>
            </form>

            {/* Alternative Contact */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-center text-slate-500 mb-6">{t.contact.alternative}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a
                  href="mailto:info@precise-software.com"
                  className="flex items-center justify-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <Mail size={18} />
                  info@precise-software.com
                </a>
                <a
                  href="https://wa.me/6281938404308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-slate-600 hover:text-green-600 transition-colors"
                >
                  <MessageSquare size={18} />
                  +62 819-3840-4308
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
