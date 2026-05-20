import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../logo/Logo"

function Footer() {
  // Automatically current year get karne ke liye
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative overflow-hidden py-16 bg-stone-100 border-t border-stone-200/80">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="-m-6 flex flex-wrap justify-between">
          
          {/* Logo & Copyright Section */}
          <div className="w-full p-6 md:w-1/2 lg:w-4/12 flex flex-col justify-between min-h-[150px]">
            <div className="mb-4 inline-flex items-center">
              {/* Warm theme ke liye logo ki width thodi clean aur responsive rakhi hai */}
              <Logo width="180px" />
            </div>
            <div>
              <p className="text-sm text-stone-500 leading-relaxed font-sans">
                &copy; Copyright {currentYear}. All Rights Reserved by MegaProject.
              </p>
            </div>
          </div>

          {/* Links Column: Company */}
          <div className="w-full p-6 sm:w-1/3 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-stone-400">
                Company
              </h3>
              <ul className="space-y-3.5">
                <li>
                  <Link className="text-sm font-medium text-stone-600 hover:text-rose-700 transition-colors duration-200" to="/">
                    Features
                  </Link>
                </li>
                <li>
                  <Link className="text-sm font-medium text-stone-600 hover:text-rose-700 transition-colors duration-200" to="/">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link className="text-sm font-medium text-stone-600 hover:text-rose-700 transition-colors duration-200" to="/">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link className="text-sm font-medium text-stone-600 hover:text-rose-700 transition-colors duration-200" to="/">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Links Column: Support */}
          <div className="w-full p-6 sm:w-1/3 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-stone-400">
                Support
              </h3>
              <ul className="space-y-3.5">
                <li>
                  <Link className="text-sm font-medium text-stone-600 hover:text-rose-700 transition-colors duration-200" to="/">
                    Account
                  </Link>
                </li>
                <li>
                  <Link className="text-sm font-medium text-stone-600 hover:text-rose-700 transition-colors duration-200" to="/">
                    Help
                  </Link>
                </li>
                <li>
                  <Link className="text-sm font-medium text-stone-600 hover:text-rose-700 transition-colors duration-200" to="/">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="text-sm font-medium text-stone-600 hover:text-rose-700 transition-colors duration-200" to="/">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Links Column: Legals */}
          <div className="w-full p-6 sm:w-1/3 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-stone-400">
                Legals
              </h3>
              <ul className="space-y-3.5">
                <li>
                  <Link className="text-sm font-medium text-stone-600 hover:text-rose-700 transition-colors duration-200" to="/">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link className="text-sm font-medium text-stone-600 hover:text-rose-700 transition-colors duration-200" to="/">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-sm font-medium text-stone-600 hover:text-rose-700 transition-colors duration-200" to="/">
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer