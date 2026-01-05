import Link from 'next/link';
import {
  ShoppingCart,
  ChefHat,
  Package,
  BarChart3,
  Globe,
  CreditCard,
  Users,
  Smartphone,
  ArrowRight,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const features = [
  {
    icon: ShoppingCart,
    title: 'Point of Sale',
    description: 'Fast, intuitive checkout experience. Handle cash, card, and digital payments with ease.',
  },
  {
    icon: ChefHat,
    title: 'Kitchen Display',
    description: 'Real-time order management for your kitchen. Track cooking status and optimize prep time.',
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description: 'Track stock levels, set alerts for low inventory, and manage your products efficiently.',
  },
  {
    icon: BarChart3,
    title: 'Reports & Analytics',
    description: 'Comprehensive sales reports, peak hour analysis, and employee performance tracking.',
  },
  {
    icon: Globe,
    title: 'Multi-language',
    description: 'Built-in support for English and Bahasa Indonesia. More languages coming soon.',
  },
  {
    icon: CreditCard,
    title: 'Multiple Payments',
    description: 'Accept cash, cards, QRIS, e-wallets, and split payments. All in one system.',
  },
  {
    icon: Users,
    title: 'Staff Management',
    description: 'Role-based access, time tracking, and performance monitoring for your team.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Ready',
    description: 'Works beautifully on tablets and phones. Take orders anywhere in your establishment.',
  },
];

const pricing = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for small businesses just getting started',
    features: ['1 Store', 'Basic POS', 'Up to 50 products', 'Email support'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: 'Rp 299k',
    period: '/month',
    description: 'For growing businesses that need more power',
    features: ['Unlimited products', 'Kitchen Display', 'Inventory Management', 'Priority support', 'Multi-user access'],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large operations with custom needs',
    features: ['Multiple stores', 'Custom integrations', 'Dedicated support', 'On-premise option', 'SLA guarantee'],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function WarungOS() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm mb-6">
                <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
                Now with Bahasa Indonesia support
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                WarungOS
              </h1>
              <p className="text-xl text-emerald-100 mb-4">
                Modern Point of Sale System
              </p>
              <p className="text-lg text-emerald-50/80 mb-8">
                Complete POS solution for restaurants, cafes, and retail stores.
                Kitchen display, inventory management, reports, and more — all in one beautiful interface.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://warungos-frontend.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Try Demo
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500/30 hover:bg-emerald-500/40 text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-white/20"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="bg-gray-900 rounded-xl aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-gray-400">Product Screenshot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything you need to run your business</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              WarungOS comes packed with features designed to streamline your operations and boost your sales.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 rounded-xl border border-gray-200 hover:border-emerald-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
            <p className="text-lg text-gray-600">Choose the plan that fits your business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl p-8 ${
                  plan.highlighted
                    ? 'ring-2 ring-emerald-500 shadow-xl scale-105'
                    : 'border border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="text-center mb-4">
                    <span className="bg-emerald-500 text-white text-sm px-3 py-1 rounded-full">Most Popular</span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-500">{plan.period}</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.highlighted
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to modernize your business?</h2>
          <p className="text-lg text-emerald-100 mb-8">
            Start your free trial today. No credit card required.
          </p>
          <a
            href="https://warungos-frontend.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
