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
    <div>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-300">
            We&apos;re a small team passionate about building software that makes a real difference for businesses.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg text-gray-600">
            <p>
              precise-software was founded with a simple mission: to build software tools that help
              businesses operate more efficiently without the complexity and cost of enterprise solutions.
            </p>
            <p>
              Our first product, <strong>WarungOS</strong>, was born from firsthand experience seeing
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Team</h2>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;re a small but dedicated team of developers, designers, and problem solvers
            working to build the best software tools for businesses.
          </p>
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-gray-600">
            <span>Based in Indonesia 🇮🇩</span>
          </div>
        </div>
      </section>
    </div>
  );
}
