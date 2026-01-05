import Link from 'next/link';
import {
  Calendar,
  Users,
  Clock,
  BarChart3,
  Bell,
  Smartphone,
  Building2,
  Zap,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Easy Booking',
    description: 'Book desks and rooms in seconds. Visual floor plans make finding the perfect spot effortless.',
  },
  {
    icon: Users,
    title: 'Team Management',
    description: 'Organize teams, set booking permissions, and manage access levels for your workspace.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Hourly, daily, or weekly bookings. Set recurring reservations for regular users.',
  },
  {
    icon: BarChart3,
    title: 'Usage Analytics',
    description: 'Understand space utilization. Make data-driven decisions about your workspace.',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Automated reminders for upcoming bookings. Never miss a reservation again.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    description: 'Book on the go. Check-in via QR code. Manage everything from your phone.',
  },
  {
    icon: Building2,
    title: 'Multi-location',
    description: 'Manage multiple offices or studio locations from a single dashboard.',
  },
  {
    icon: Zap,
    title: 'Integrations',
    description: 'Connect with Google Calendar, Outlook, Slack, and your favorite tools.',
  },
];

export default function StudioBook() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 border border-white/20">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>Coming Soon</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                StudioBook
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 mb-4">
                Studio Desk Booking Made Simple
              </p>
              <p className="text-base sm:text-lg text-blue-50/80 mb-8 leading-relaxed">
                Effortless desk and room booking for studios, co-working spaces, and creative offices.
                Maximize your space utilization and keep your team organized.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-base sm:text-lg"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all border border-white/20 text-base sm:text-lg"
                >
                  Request Demo
                </Link>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="glass rounded-2xl sm:rounded-3xl p-3 sm:p-6 glow-blue">
                <div className="bg-gray-900 rounded-xl sm:rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden">
                  {/* Fake floor plan mockup */}
                  <div className="absolute inset-0 p-4 sm:p-6">
                    <div className="flex gap-2 mb-4">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="grid grid-cols-4 gap-2 h-full pb-8 sm:pb-12">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className={`rounded-lg ${
                            i % 3 === 0
                              ? 'bg-blue-500/40'
                              : i % 3 === 1
                              ? 'bg-green-500/40'
                              : 'bg-gray-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-center z-10">
                    <Calendar className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-4 opacity-30" />
                    <p className="text-gray-500 text-sm sm:text-base">Coming Soon</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Features built for modern workspaces</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              StudioBook comes with everything you need to manage your studio or co-working space efficiently.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{feature.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Perfect for</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Recording Studios',
                description: 'Manage studio rooms, equipment bookings, and session scheduling all in one place.',
                icon: '🎙️',
              },
              {
                title: 'Co-working Spaces',
                description: 'Let members book hot desks, meeting rooms, and private offices with ease.',
                icon: '💼',
              },
              {
                title: 'Creative Offices',
                description: 'Hybrid work made simple. Help your team find and book the right workspace.',
                icon: '🎨',
              },
            ].map((useCase) => (
              <div key={useCase.title} className="group bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl sm:text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Get Early Access</h2>
              <p className="text-blue-100 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
                Be among the first to try StudioBook. Early adopters get exclusive pricing and direct input on features.
              </p>
              <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
                {['Priority access', 'Founding member pricing', 'Feature requests'].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm sm:text-base">
                    <CheckCircle className="w-5 h-5 text-blue-300" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-base sm:text-lg"
              >
                Join Waitlist
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Be the first to know</h2>
          <p className="text-base sm:text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            StudioBook is launching soon. Join the waitlist to get early access and special pricing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-8 sm:px-10 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-base sm:text-lg"
          >
            Join Waitlist
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
