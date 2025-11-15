import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const demos = [
    {
      title: "Consumer App",
      description: "Marketplace view with deals discovery, order flow, and customer features",
      href: "/mockups-complete-consumer.html",
      icon: "📱",
      color: "bg-green-50 border-green-200 hover:border-green-400"
    },
    {
      title: "Restaurant Dashboard",
      description: "Full feature set: inventory tracking, analytics, promotions, CRM & automation",
      href: "/mockups-complete-restaurant.html",
      icon: "🍽️",
      color: "bg-blue-50 border-blue-200 hover:border-blue-400"
    },
    {
      title: "Restaurant Pitch Deck",
      description: "Sales deck for onboarding restaurant partners with value proposition",
      href: "/restaurant-pitch-deck.html",
      icon: "📊",
      color: "bg-purple-50 border-purple-200 hover:border-purple-400"
    },
    {
      title: "Investor Pitch Deck",
      description: "Business model, market opportunity, and growth strategy presentation",
      href: "/investor-pitch-deck.html",
      icon: "💼",
      color: "bg-amber-50 border-amber-200 hover:border-amber-400"
    },
    {
      title: "Promotions System",
      description: "Time-based deals, inventory management, and promotion creation flow",
      href: "/mockups-promotions.html",
      icon: "🎯",
      color: "bg-rose-50 border-rose-200 hover:border-rose-400"
    },
    {
      title: "MVP Restaurant View",
      description: "Simplified version focusing on core features for initial launch",
      href: "/mockups-mvp-restaurant.html",
      icon: "🚀",
      color: "bg-cyan-50 border-cyan-200 hover:border-cyan-400"
    },
    {
      title: "Email Templates",
      description: "6 ready-to-use email templates for restaurant outreach and partnership onboarding",
      href: "/restaurant-email-templates.html",
      icon: "📧",
      color: "bg-emerald-50 border-emerald-200 hover:border-emerald-400"
    }
  ];

  const features = [
    { icon: "📍", label: "Marketplace Discovery" },
    { icon: "📦", label: "Inventory Tracking" },
    { icon: "📈", label: "Analytics Dashboard" },
    { icon: "💰", label: "Tiered Pricing Plans" },
    { icon: "🤖", label: "CRM & Automation" },
    { icon: "🔌", label: "POS Integration" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/club (7).png"
              alt="Munch Club"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <div className="flex gap-4 text-sm">
            <span className="px-3 py-1.5 bg-green-100 text-green-700 rounded-full font-medium">
              Demo Site
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg">
            <Image
              src="/club (1).png"
              alt="Munch Club Badge"
              width={60}
              height={60}
              className="w-14 h-14"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Munch Club
            <span className="block text-3xl md:text-4xl mt-2 text-slate-600 font-normal">
              Platform Demo Showcase
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Tools + customers for local food businesses. Explore our complete platform mockups including marketplace, dashboards, and business presentations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 border border-slate-200 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-2">{feature.icon}</div>
              <div className="text-sm font-medium text-slate-700">
                {feature.label}
              </div>
            </div>
          ))}
        </div>

        {/* Demo Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((demo, index) => (
            <Link
              key={index}
              href={demo.href}
              target="_blank"
              className={`group relative bg-white rounded-2xl p-6 border-2 ${demo.color} transition-all hover:shadow-xl hover:-translate-y-1`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{demo.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors">
                    {demo.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {demo.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center text-sm font-medium text-green-600 group-hover:text-green-700">
                View Demo
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Complete Platform Demo
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                These interactive mockups showcase the full Munch Club platform including consumer marketplace, restaurant dashboards with analytics, promotion management, CRM automation, and integration capabilities with POS systems.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-slate-300">B2C Consumer App Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-slate-300">B2B Restaurant Dashboard & Tools</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-slate-300">Business Model & Pricing Tiers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-slate-300">Analytics & Reporting</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-4">Platform Highlights</h3>
              <div className="space-y-4 text-slate-300">
                <div>
                  <div className="font-semibold text-white mb-1">Commission Tiers</div>
                  <div className="text-sm">20% → 18% → 15% → 12% as restaurants grow</div>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Target Market</div>
                  <div className="text-sm">Maidstone & Tunbridge Wells (5,000+ users)</div>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Tech Stack</div>
                  <div className="text-sm">Next.js, Supabase, Stripe, Resend</div>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Launch Timeline</div>
                  <div className="text-sm">February 2025 (MVP validation ongoing)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/club (7).png"
                alt="Munch Club"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-600 text-sm">
                Tools + customers for local food businesses
              </p>
              <p className="text-slate-400 text-xs mt-2">
                Demo Site • Created 2025-01-15
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
