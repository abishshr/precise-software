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
  ExternalLink,
  Sparkles
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
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 border border-white/20">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>Now with Bahasa Indonesia support</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                WarungOS
              </h1>
              <p className="text-xl sm:text-2xl text-emerald-100 mb-4">
                Modern Point of Sale System
              </p>
              <p className="text-base sm:text-lg text-emerald-50/80 mb-8 leading-relaxed">
                Complete POS solution for restaurants, cafes, and retail stores.
                Kitchen display, inventory management, reports, and more — all in one beautiful interface.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://warungos-frontend.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-base sm:text-lg"
                >
                  Try Demo
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all border border-white/20 text-base sm:text-lg"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="glass rounded-2xl sm:rounded-3xl p-3 sm:p-6 glow-emerald">
                <div className="bg-gray-900 rounded-xl sm:rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden">
                  {/* Fake UI mockup */}
                  <div className="absolute inset-0 p-4 sm:p-6">
                    <div className="flex gap-2 mb-4">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 h-full pb-8 sm:pb-12">
                      <div className="col-span-2 bg-gray-800 rounded-lg p-2 sm:p-3">
                        <div className="grid grid-cols-3 gap-1 sm:gap-2">
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className="bg-gray-700 rounded h-8 sm:h-12" />
                          ))}
                        </div>
                      </div>
                      <div className="bg-emerald-600/30 rounded-lg p-2 sm:p-3">
                        <div className="space-y-1 sm:space-y-2">
                          <div className="bg-emerald-500/50 rounded h-3 sm:h-4 w-3/4" />
                          <div className="bg-emerald-500/30 rounded h-2 sm:h-3" />
                          <div className="bg-emerald-500/30 rounded h-2 sm:h-3 w-1/2" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center z-10">
                    <ShoppingCart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-4 opacity-30" />
                    <p className="text-gray-500 text-sm sm:text-base">Live Demo Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything you need to run your business</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              WarungOS comes packed with features designed to streamline your operations and boost your sales.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{feature.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
            <p className="text-base sm:text-lg text-gray-600">Choose the plan that fits your business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? 'ring-2 ring-emerald-500 shadow-2xl md:scale-105 relative'
                    : 'border border-gray-200 hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm px-4 py-1.5 rounded-full shadow-lg">Most Popular</span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-500">{plan.period}</span>}
                </div>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25'
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
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to modernize your business?</h2>
          <p className="text-base sm:text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Start your free trial today. No credit card required.
          </p>
          <a
            href="https://warungos-frontend.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 px-8 sm:px-10 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-base sm:text-lg"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
