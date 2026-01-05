import Link from 'next/link';
import Image from 'next/image';
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
  Sparkles,
  UtensilsCrossed,
  Calendar,
  Gift,
  Receipt,
  Truck,
  Clock,
  Building2,
  Palette,
} from 'lucide-react';

const features = [
  {
    icon: ShoppingCart,
    title: 'Point of Sale',
    description: 'Fast checkout with multiple payment methods: Cash, Card, QRIS, E-Wallet, Bank Transfer. Split payments supported.',
  },
  {
    icon: ChefHat,
    title: 'Kitchen Display',
    description: 'Real-time order management with status workflow, color-coded timing, audio alerts, and bump functionality.',
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description: 'Track products, ingredients, recipes, and stock levels. Low stock alerts and stock transfers between locations.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Table Management',
    description: 'Digital floor plan with drag-and-drop tables, status tracking, server sections, and guest count management.',
  },
  {
    icon: Calendar,
    title: 'Reservations & Waitlist',
    description: 'Calendar-based booking, party size tracking, waitlist management, and no-show analytics.',
  },
  {
    icon: Gift,
    title: 'Loyalty & Promotions',
    description: 'Customer loyalty points, tier levels (Bronze to Platinum), birthday rewards, promo codes, and BOGO deals.',
  },
  {
    icon: BarChart3,
    title: 'Reports & Analytics',
    description: 'Sales by product, category, payment method. P&L statements, food cost analysis, and CSV exports.',
  },
  {
    icon: Users,
    title: 'Employee Management',
    description: 'Role-based access (Owner, Admin, Manager, Cashier), PIN login, time tracking, and shift management.',
  },
  {
    icon: Receipt,
    title: 'Expense Tracking',
    description: 'Categorized expenses, monthly/yearly reports, and overhead percentage tracking for profitability.',
  },
  {
    icon: Truck,
    title: 'Grab Integration',
    description: 'Connect to Grab Food delivery. Auto-sync inventory and pause items when stock runs out.',
  },
  {
    icon: Building2,
    title: 'Multi-Store Support',
    description: 'Manage multiple locations from one dashboard. Stock transfers and consolidated reporting.',
  },
  {
    icon: Palette,
    title: 'Customization',
    description: '8 theme presets, custom receipts, product modifiers, and multi-language support (EN/ID).',
  },
];

const screenshots = [
  {
    title: 'Point of Sale',
    description: 'Fast checkout with multiple payment methods and modifiers',
    image: '/screenshots/warungos-pos.png',
  },
  {
    title: 'Kitchen Display',
    description: 'Real-time order management with status workflow',
    image: '/screenshots/warungos-kitchen.png',
  },
  {
    title: 'Products & Menu',
    description: 'Manage your product catalog with categories and pricing',
    image: '/screenshots/warungos-products.png',
  },
  {
    title: 'Table Management',
    description: 'Digital floor plan with drag-and-drop tables',
    image: '/screenshots/warungos-tables.png',
  },
  {
    title: 'Inventory',
    description: 'Track ingredients, stock levels, and transfers',
    image: '/screenshots/warungos-inventory.png',
  },
  {
    title: 'Reports & Analytics',
    description: 'Sales reports, P&L, and business insights',
    image: '/screenshots/warungos-reports.png',
  },
];

const detailedFeatures = [
  {
    category: 'Point of Sale',
    items: [
      'Multiple payment methods (Cash, Card, QRIS, E-Wallet)',
      'Split payments across methods',
      'Quick product search with categories',
      'Product modifiers and customizations',
      'Order types: Counter, Dine-In, Takeaway, Delivery',
      'Real-time receipt printing',
      'Open tab management',
      'Barcode scanning support',
    ],
  },
  {
    category: 'Kitchen & Operations',
    items: [
      'Real-time Kitchen Display System (KDS)',
      'Order status workflow with color-coded timing',
      'Audio alerts for new orders',
      'Table management with floor plan editor',
      'Reservation system with calendar',
      'Waitlist management',
      'Server section assignments',
    ],
  },
  {
    category: 'Inventory & Products',
    items: [
      'Product catalog with SKU and barcodes',
      'Ingredient and recipe management',
      'Cost price and food cost tracking',
      'Low stock alerts',
      'Stock transfers between locations',
      'Unit conversions (g, kg, ml, L, pcs)',
      'Category organization with colors',
    ],
  },
  {
    category: 'Business Intelligence',
    items: [
      'Daily and hourly sales reports',
      'Sales by product, category, payment method',
      'Employee performance tracking',
      'Profit & Loss statements',
      'Expense tracking and categorization',
      'Customer purchase analytics',
      'CSV export for all reports',
    ],
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
    features: ['Unlimited products', 'Kitchen Display', 'Inventory Management', 'Loyalty Program', 'Priority support'],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large operations with custom needs',
    features: ['Multiple stores', 'Grab Integration', 'Dedicated support', 'Custom features', 'SLA guarantee'],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function WarungOS() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center text-white overflow-hidden">
        {/* Background Image - Restaurant/Cafe setting */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-emerald-800/85 to-teal-900/90" />
        {/* Floating Effects */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-float-delayed" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 border border-white/20">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>Now with Grab Integration & Loyalty Program</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                WarungOS
              </h1>
              <p className="text-xl sm:text-2xl text-emerald-100 mb-4">
                Complete Restaurant & Retail POS System
              </p>
              <p className="text-base sm:text-lg text-emerald-50/80 mb-8 leading-relaxed">
                All-in-one solution for restaurants, cafes, and retail stores. POS, Kitchen Display,
                Table Management, Inventory, Loyalty Program, and detailed analytics — everything you need to run your business.
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
              <div className="glass rounded-2xl sm:rounded-3xl p-2 sm:p-3 glow-emerald">
                <Image
                  src="/screenshots/warungos-pos.png"
                  alt="WarungOS Point of Sale"
                  width={800}
                  height={500}
                  className="rounded-xl sm:rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-16 sm:py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">See it in action</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              A complete restaurant and retail management system
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {screenshots.map((screenshot) => (
              <div key={screenshot.title} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={screenshot.image}
                    alt={screenshot.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-semibold text-gray-900 mb-1">{screenshot.title}</h3>
                  <p className="text-gray-600 text-sm">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything you need to run your business</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              WarungOS is a complete business management system with 25+ features designed for restaurants, cafes, and retail.
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

      {/* Detailed Features */}
      <section className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Feature Details</h2>
            <p className="text-base sm:text-lg text-gray-600">A closer look at what WarungOS can do for your business</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {detailedFeatures.map((section) => (
              <div key={section.category} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{section.category}</h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
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
      <section className="relative py-16 sm:py-24 text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-green-900/90 to-teal-900/90" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to modernize your business?</h2>
          <p className="text-base sm:text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses using WarungOS. Start your free trial today — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://warungos-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 px-8 sm:px-10 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-base sm:text-lg"
            >
              Try Demo Free
              <ExternalLink className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 sm:px-10 py-4 rounded-xl font-semibold transition-all border border-white/20 text-base sm:text-lg"
            >
              Contact Sales
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
