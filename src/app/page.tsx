import Link from 'next/link';
import { ShoppingCart, Calendar, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const products = [
  {
    name: 'WarungOS',
    tagline: 'Modern Point of Sale System',
    description: 'Complete POS solution for restaurants, cafes, and retail stores. Kitchen display, inventory management, and more.',
    icon: ShoppingCart,
    color: 'from-emerald-500 to-green-600',
    bgColor: 'bg-emerald-500/10',
    href: '/warungos',
    features: ['Kitchen Display System', 'Inventory Management', 'Multi-language Support', 'Real-time Reports'],
  },
  {
    name: 'StudioBook',
    tagline: 'Studio Desk Booking Made Simple',
    description: 'Effortless desk and room booking for studios, co-working spaces, and creative offices.',
    icon: Calendar,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-500/10',
    href: '/studiobook',
    features: ['Easy Desk Booking', 'Room Scheduling', 'Team Management', 'Usage Analytics'],
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-8 border border-white/10">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>Building the future of business software</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Software Solutions for{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Your Business
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              We build modern, reliable software that helps businesses operate more efficiently.
              From point of sale to desk booking, we&apos;ve got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 text-lg"
              >
                View Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all border border-white/20 backdrop-blur-sm text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 sm:py-28 bg-gray-50 relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Purpose-built software solutions designed to solve real business problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`bg-gradient-to-r ${product.color} p-6 sm:p-8 text-white relative overflow-hidden`}>
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-dot-pattern opacity-30" />
                  <div className="relative flex items-center gap-4 sm:gap-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <product.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold">{product.name}</h3>
                      <p className="text-white/80 text-sm sm:text-base">{product.tagline}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-gray-600 mb-6 text-sm sm:text-base">{product.description}</p>
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                        <div className={`w-5 h-5 rounded-full ${product.bgColor} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={product.href}
                    className={`inline-flex items-center gap-2 font-semibold bg-gradient-to-r ${product.color} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 text-emerald-500" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Contact us today to learn more about our products and how they can help your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 sm:px-10 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-lg"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
