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
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm mb-6">
                <span className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" />
                Coming Soon
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                StudioBook
              </h1>
              <p className="text-xl text-blue-100 mb-4">
                Studio Desk Booking Made Simple
              </p>
              <p className="text-lg text-blue-50/80 mb-8">
                Effortless desk and room booking for studios, co-working spaces, and creative offices.
                Maximize your space utilization and keep your team organized.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500/30 hover:bg-blue-500/40 text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-white/20"
                >
                  Request Demo
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="bg-gray-900 rounded-xl aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <Calendar className="w-16 h-16 mx-auto mb-4 opacity-50" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Features built for modern workspaces</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              StudioBook comes with everything you need to manage your studio or co-working space efficiently.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect for</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Recording Studios',
                description: 'Manage studio rooms, equipment bookings, and session scheduling all in one place.',
              },
              {
                title: 'Co-working Spaces',
                description: 'Let members book hot desks, meeting rooms, and private offices with ease.',
              },
              {
                title: 'Creative Offices',
                description: 'Hybrid work made simple. Help your team find and book the right workspace.',
              },
            ].map((useCase) => (
              <div key={useCase.title} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Be the first to know</h2>
          <p className="text-lg text-blue-100 mb-8">
            StudioBook is launching soon. Join the waitlist to get early access and special pricing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Join Waitlist
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
