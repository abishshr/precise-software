import Link from 'next/link';
import {
  Calendar,
  Users,
  Clock,
  BarChart3,
  QrCode,
  MessageSquare,
  CreditCard,
  Tag,
  UserCheck,
  Settings,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Schedule Management',
    description: 'Weekly calendar view with recurring sessions. Create daily, weekly, or monthly repeating classes.',
  },
  {
    icon: Users,
    title: 'Customer Management',
    description: 'Track customers with contact info, booking history, and membership status. Generate QR codes for each customer.',
  },
  {
    icon: QrCode,
    title: 'QR Check-in System',
    description: 'Fast QR code scanning for instant check-ins. Track attendance and no-shows automatically.',
  },
  {
    icon: CreditCard,
    title: 'Membership Plans',
    description: 'Create class packages or unlimited monthly memberships. Automatically deduct credits on booking.',
  },
  {
    icon: BarChart3,
    title: 'Financial Tracking',
    description: 'Dashboard with income, expenses, and profit analysis. Automatic income recording from bookings.',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Integration',
    description: 'Send booking confirmations and messages via WhatsApp Business API. Template message support.',
  },
  {
    icon: Tag,
    title: 'Promotions & Discounts',
    description: 'Create discount codes with usage limits and validity periods. Track redemptions.',
  },
  {
    icon: UserCheck,
    title: 'Staff Management',
    description: 'Role-based access control with Admin, Staff, and Instructor roles. Manage team permissions.',
  },
];

const useCases = [
  {
    title: 'Yoga Studios',
    description: 'Manage yoga classes, retreats, and workshops. Track student progress and membership packages.',
    icon: '🧘',
  },
  {
    title: 'Fitness Centers',
    description: 'Handle group fitness classes, personal training sessions, and gym memberships.',
    icon: '💪',
  },
  {
    title: 'Dance Academies',
    description: 'Schedule dance classes, manage student enrollment, and track attendance.',
    icon: '💃',
  },
  {
    title: 'Pilates Studios',
    description: 'Book reformer sessions, manage class sizes, and handle package credits.',
    icon: '🏋️',
  },
];

const workflows = [
  {
    step: '1',
    title: 'Configure Classes',
    description: 'Set up your class types with duration, capacity, and pricing.',
  },
  {
    step: '2',
    title: 'Create Sessions',
    description: 'Schedule sessions with instructors. Enable recurring for regular classes.',
  },
  {
    step: '3',
    title: 'Book Customers',
    description: 'Customers are booked with automatic waitlist when full.',
  },
  {
    step: '4',
    title: 'Check-in',
    description: 'Scan QR codes for instant check-in. Track attendance automatically.',
  },
];

export default function StudioBook() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center text-white overflow-hidden">
        {/* Background Image - Yoga/Fitness Studio */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=2000&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-violet-900/85 to-indigo-900/90" />
        {/* Floating Effects */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl animate-float-delayed" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 border border-white/20">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>Coming Soon</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                StudioDesk
              </h1>
              <p className="text-xl sm:text-2xl text-purple-100 mb-4">
                Studio Management Made Simple
              </p>
              <p className="text-base sm:text-lg text-purple-50/80 mb-8 leading-relaxed">
                Complete management system for fitness studios, yoga centers, and dance academies.
                Schedule classes, manage memberships, track finances, and check-in customers with QR codes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 hover:bg-purple-50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-base sm:text-lg"
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
                  {/* Fake schedule UI mockup */}
                  <div className="absolute inset-0 p-3 sm:p-4">
                    <div className="flex gap-2 mb-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                    </div>
                    {/* Calendar header */}
                    <div className="flex gap-1 mb-2">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                        <div key={day} className="flex-1 text-center text-gray-400 text-[8px] sm:text-xs">{day}</div>
                      ))}
                    </div>
                    {/* Calendar grid */}
                    <div className="grid grid-cols-7 gap-1 flex-1">
                      {[...Array(14)].map((_, i) => (
                        <div
                          key={i}
                          className={`rounded h-6 sm:h-10 ${
                            i === 2 || i === 5 || i === 9 || i === 12
                              ? 'bg-purple-500/40'
                              : i === 3 || i === 8
                              ? 'bg-pink-500/40'
                              : 'bg-gray-800'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-center z-10">
                    <Calendar className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-2 opacity-30" />
                    <p className="text-gray-500 text-xs sm:text-sm">Studio Management</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything you need to run your studio</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              StudioDesk is packed with features to streamline your studio operations, from scheduling to finances.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{feature.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-base sm:text-lg text-gray-600">Simple workflow from setup to daily operations</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
            {workflows.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {index < workflows.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 text-purple-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Perfect for</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="group bg-gray-50 hover:bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl sm:text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Built for studio owners who want to focus on what matters
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                Stop juggling spreadsheets and manual processes. StudioDesk automates the administrative work
                so you can focus on your students and growing your business.
              </p>
              <ul className="space-y-4">
                {[
                  'Save hours on scheduling and attendance tracking',
                  'Never miss a payment with automatic membership tracking',
                  'Reduce no-shows with WhatsApp reminders',
                  'Make data-driven decisions with financial insights',
                  'Multi-language support: English & Bahasa Indonesia',
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-violet-100 rounded-3xl p-8 sm:p-12">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-4 shadow-lg">
                    <div className="text-3xl font-bold text-purple-600">500+</div>
                    <div className="text-gray-600 text-sm">Classes Managed</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-lg">
                    <div className="text-3xl font-bold text-purple-600">2000+</div>
                    <div className="text-gray-600 text-sm">Customers</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-lg">
                    <div className="text-3xl font-bold text-purple-600">98%</div>
                    <div className="text-gray-600 text-sm">Check-in Rate</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-lg">
                    <div className="text-3xl font-bold text-purple-600">5hrs</div>
                    <div className="text-gray-600 text-sm">Saved Weekly</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-100 to-violet-100 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-purple-600 to-violet-700 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Get Early Access</h2>
              <p className="text-purple-100 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
                Be among the first to try StudioDesk. Early adopters get exclusive pricing and direct input on features.
              </p>
              <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
                {['Priority access', 'Founding member pricing', 'Feature requests'].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm sm:text-base">
                    <CheckCircle className="w-5 h-5 text-purple-300" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-base sm:text-lg"
              >
                Join Waitlist
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-24 text-white overflow-hidden">
        {/* Background Image - Yoga class */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=2000&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-violet-900/90 to-indigo-900/90" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-400/20 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Be the first to know</h2>
          <p className="text-base sm:text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            StudioDesk is launching soon. Join the waitlist to get early access and special pricing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 hover:bg-purple-50 px-8 sm:px-10 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-base sm:text-lg"
          >
            Join Waitlist
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
