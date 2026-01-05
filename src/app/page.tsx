import Link from 'next/link';
import { ShoppingCart, Calendar, ArrowRight, CheckCircle, Sparkles, ExternalLink } from 'lucide-react';

const products = [
  {
    name: 'WarungOS',
    tagline: 'Modern Point of Sale System',
    description: 'Complete POS solution for restaurants, cafes, and retail stores. Kitchen display, inventory management, and more.',
    icon: ShoppingCart,
    color: 'from-emerald-500 to-green-600',
    bgColor: 'bg-emerald-500/10',
    href: '/warungos',
    demoUrl: 'https://warungos-frontend.vercel.app',
    features: ['Kitchen Display System', 'Inventory Management', 'Multi-language Support', 'Real-time Reports'],
  },
  {
    name: 'StudioDesk',
    tagline: 'Studio Management Made Simple',
    description: 'Complete management system for fitness studios, yoga centers, and dance academies with QR check-in.',
    icon: Calendar,
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-500/10',
    href: '/studiobook',
    demoUrl: null,
    features: ['Class Scheduling', 'QR Check-in', 'Membership Management', 'WhatsApp Integration'],
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/85 to-gray-900/90" />
        {/* Floating Effects */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 border border-white/20">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>Building the future of business software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                precise-software
              </h1>
              <p className="text-xl sm:text-2xl text-gray-100 mb-4">
                Software Solutions for Your Business
              </p>
              <p className="text-base sm:text-lg text-gray-300/80 mb-8 leading-relaxed">
                We build modern, reliable software that helps businesses operate more efficiently.
                From point of sale systems to studio management, we&apos;ve got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-base sm:text-lg"
                >
                  View Products
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all border border-white/20 text-base sm:text-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative mt-8 lg:mt-0">
              <div className="glass rounded-2xl sm:rounded-3xl p-3 sm:p-6 glow-emerald">
                <div className="bg-gray-900 rounded-xl sm:rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                    alt="Business software dashboard"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="relative text-center p-4">
                    <div className="flex justify-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-emerald-500/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <ShoppingCart className="w-6 h-6" />
                      </div>
                      <div className="w-12 h-12 bg-purple-500/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <Calendar className="w-6 h-6" />
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base">Modern Business Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 sm:py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
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
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={product.href}
                      className={`inline-flex items-center justify-center gap-2 font-semibold bg-gradient-to-r ${product.color} text-white px-5 py-2.5 rounded-lg transition-all hover:opacity-90`}
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    {product.demoUrl && (
                      <a
                        href={product.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 font-semibold text-gray-600 hover:text-gray-900 px-5 py-2.5 rounded-lg border border-gray-200 hover:border-gray-300 transition-all"
                      >
                        Try Demo
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2000&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/90 to-gray-900/90" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our products and how they can help your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-gray-100 px-8 sm:px-10 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-base sm:text-lg"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
