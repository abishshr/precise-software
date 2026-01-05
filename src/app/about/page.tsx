import { Code2, Heart, Zap, Globe } from 'lucide-react';

const values = [
  {
    icon: Code2,
    title: 'Quality First',
    description: 'We believe in building software that works reliably. No shortcuts, no compromises.',
  },
  {
    icon: Heart,
    title: 'User Focused',
    description: 'Every feature we build starts with understanding our users\' real needs and challenges.',
  },
  {
    icon: Zap,
    title: 'Keep It Simple',
    description: 'Powerful doesn\'t have to mean complicated. We strive for elegant, intuitive solutions.',
  },
  {
    icon: Globe,
    title: 'Built for Everyone',
    description: 'Our software is designed to be accessible and work great for businesses of all sizes.',
  },
];

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We&apos;re a small team passionate about building software that makes a real difference for businesses.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            <p>
              precise-software was founded with a simple mission: to build software tools that help
              businesses operate more efficiently without the complexity and cost of enterprise solutions.
            </p>
            <p>
              Our first product, <strong className="text-gray-900">WarungOS</strong>, was born from firsthand experience seeing
              small restaurants and cafes struggle with outdated POS systems that were either too
              expensive or too complicated for their needs.
            </p>
            <p>
              We believe that every business, regardless of size, deserves access to modern, well-designed
              software. That&apos;s why we focus on building products that are powerful yet simple,
              affordable yet feature-rich.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-base sm:text-lg text-gray-600">The principles that guide everything we do.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value) => (
              <div key={value.title} className="group text-center bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">{value.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-50 to-teal-50 rounded-full blur-3xl opacity-70" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">The Team</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We&apos;re a small but dedicated team of developers, designers, and problem solvers
            working to build the best software tools for businesses.
          </p>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-100 to-gray-50 px-6 py-3 rounded-full text-gray-700 shadow-lg">
            <span className="text-2xl">🇮🇩</span>
            <span className="font-medium">Based in Indonesia</span>
          </div>
        </div>
      </section>
    </div>
  );
}
