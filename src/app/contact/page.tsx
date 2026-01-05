'use client';

import { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-50" />

        <div className="text-center relative z-10 px-4">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <CheckCircle className="w-10 h-10 text-emerald-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Message Sent!</h2>
          <p className="text-gray-600 mb-8 text-base sm:text-lg">
            Thanks for reaching out. We&apos;ll get back to you within 24 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', product: '', message: '' });
            }}
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-lg"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg sm:text-xl text-gray-300">
            Have a question? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 sm:py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-70 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-70 -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-base"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-base"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
                Product Interest
              </label>
              <select
                id="product"
                className="w-full px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-base bg-white"
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              >
                <option value="">Select a product</option>
                <option value="warungos">WarungOS</option>
                <option value="studiobook">StudioBook</option>
                <option value="other">Other / General Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="w-full px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-base resize-none"
                placeholder="Tell us how we can help..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 text-base sm:text-lg"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>

          {/* Alternative Contact */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-6 text-center text-lg">Other ways to reach us</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
              <a
                href="mailto:hello@precise-software.com"
                className="flex items-center justify-center gap-3 text-gray-600 hover:text-emerald-600 transition-colors bg-gray-50 hover:bg-emerald-50 px-6 py-4 rounded-xl"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">hello@precise-software.com</span>
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-gray-600 hover:text-emerald-600 transition-colors bg-gray-50 hover:bg-emerald-50 px-6 py-4 rounded-xl"
              >
                <MessageSquare className="w-5 h-5" />
                <span className="font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
