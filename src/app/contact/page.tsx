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
      <main className="section">
        <div className="container">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-green-600" />
            </div>
            <h1 className="mb-4">{t.contact.success.title}</h1>
            <p className="text-muted mb-8">{t.contact.success.message}</p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', product: '', message: '' });
              }}
              className="link"
            >
              {t.contact.success.another}
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="section section-gray">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="mb-4">{t.contact.title}</h1>
            <p className="text-lg text-muted">{t.contact.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={t.contact.form.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={t.contact.form.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-medium mb-2">
                  {t.contact.form.product}
                </label>
                <select
                  id="product"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary w-full">
                {t.contact.form.submit}
                <Send size={18} />
              </button>
            </form>

            {/* Alternative Contact */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-center text-muted mb-6">{t.contact.alternative}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="mailto:hello@precise-software.com"
                  className="flex items-center justify-center gap-2 text-gray-600 hover:text-blue-600"
                >
                  <Mail size={18} />
                  hello@precise-software.com
                </a>
                <a
                  href="https://wa.me/628123105878"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-gray-600 hover:text-green-600"
                >
                  <MessageSquare size={18} />
                  +62 812-3105-8788
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
