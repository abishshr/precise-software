import Link from 'next/link';
import { ShoppingCart, Calendar, ArrowRight, CheckCircle } from 'lucide-react';

const products = [
  {
    name: 'WarungOS',
    tagline: 'Modern Point of Sale System',
    description: 'Complete POS solution for restaurants, cafes, and retail stores. Kitchen display, inventory management, and more.',
    icon: ShoppingCart,
    color: 'from-emerald-500 to-green-600',
    href: '/warungos',
    features: ['Kitchen Display System', 'Inventory Management', 'Multi-language Support', 'Real-time Reports'],
  },
  {
    name: 'StudioBook',
    tagline: 'Studio Desk Booking Made Simple',
    description: 'Effortless desk and room booking for studios, co-working spaces, and creative offices.',
    icon: Calendar,
    color: 'from-blue-500 to-indigo-600',
    href: '/studiobook',
    features: ['Easy Desk Booking', 'Room Scheduling', 'Team Management', 'Usage Analytics'],
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Software Solutions for{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Your Business
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              We build modern, reliable software that helps businesses operate more efficiently.
              From point of sale to desk booking, we&apos;ve got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Purpose-built software solutions designed to solve real business problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`bg-gradient-to-r ${product.color} p-6 text-white`}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                      <product.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{product.name}</h3>
                      <p className="text-white/80">{product.tagline}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to learn more about our products and how they can help your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
