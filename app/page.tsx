import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon, ChartBarIcon, BoltIcon, ShieldCheckIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acme Dashboard - Transform Data Into Decisions | Start Free Today',
  description: 'Get real-time insights and drive growth with Acme\'s powerful analytics dashboard. Join 10,000+ businesses making smarter decisions. Start your free trial now.',
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 p-4 md:h-52 shadow-lg">
        <AcmeLogo />
      </div>

      {/* Hero Section */}
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-50 to-white px-6 py-10 md:w-2/5 md:px-20 shadow-sm">
                  
          {/* Trust Badge */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <ShieldCheckIcon className="w-4 h-4 text-green-500" />
            <span>Trusted by 10,000+ businesses</span>
          </div>

          {/* Main Headlines */}
          <div className={`${lusitana.className} space-y-4`}>
            <h1 className="text-2xl font-bold text-gray-900 md:text-4xl md:leading-tight">
              Turn Your Data Into 
              <span className="text-blue-600"> Revenue Growth</span>
            </h1>
            <p className="text-lg text-gray-700 md:text-xl leading-relaxed">
              Stop drowning in spreadsheets. Get real-time insights that actually drive decisions and boost your bottom line.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="flex items-center gap-2">
              <ChartBarIcon className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">Real-time Analytics</span>
            </div>
            <div className="flex items-center gap-2">
              <BoltIcon className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">Lightning Fast</span>
            </div>
            <div className="flex items-center gap-2">
              <DevicePhoneMobileIcon className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">Mobile Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">Enterprise Secure</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
            <p className="text-sm text-blue-800 italic">
              "Acme Dashboard increased our decision-making speed by 300%. ROI was visible within the first month."
            </p>
            <p className="text-xs text-blue-600 mt-1 font-medium">
              — Sarah Chen, VP Operations at TechCorp
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/login"
              className="flex items-center justify-center gap-3 rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span>Start Free Trial</span> 
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 px-6 py-4 text-base font-medium text-gray-700 transition-colors hover:border-blue-500 hover:text-blue-600">
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Risk Reversal */}
          <div className="text-center">
            <p className="text-xs text-gray-500">
              ✓ No credit card required • ✓ 14-day free trial • ✓ Cancel anytime
            </p>
          </div>
        </div>

        {/* Hero Images */}
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <div className="relative">
            <Image
              src="/hero-desktop.png"
              width={1000}
              height={760}
              className="hidden md:block rounded-lg shadow-2xl"
              alt="Acme Dashboard interface showing real-time analytics and insights"
              priority
            />
            <Image
              src="/hero-mobile.png"
              width={560}
              height={620}
              className="block md:hidden rounded-lg shadow-xl"
              alt="Acme Dashboard mobile interface"
              priority
            />
            
            {/* Floating Elements */}
            <div className="hidden md:block absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
              Live Data
            </div>
            <div className="hidden md:block absolute -bottom-4 -left-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
              +47% Revenue Growth
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-gray-900 text-white py-6 mt-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-blue-400">10K+</div>
              <div className="text-sm text-gray-300">Active Users</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-blue-400">99.9%</div>
              <div className="text-sm text-gray-300">Uptime</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-blue-400">2.5M+</div>
              <div className="text-sm text-gray-300">Data Points</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-blue-400">24/7</div>
              <div className="text-sm text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-blue-50 py-12 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className={`${lusitana.className} text-2xl md:text-3xl font-bold text-gray-900 mb-4`}>
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 mb-6">
            Join thousands of companies already using Acme to make data-driven decisions
          </p>
          <Link
            href="/login"
            className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <span>Get Started Now</span>
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
          <p className="text-xs text-gray-500 mt-4">
            Start your free trial today - no strings attached
          </p>
        </div>
      </div>
    </main>
  );
}