import React from "react";
import {
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa6";


function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscribed");
  };

  return (
    <footer className="relative overflow-hidden bg-black text-white">
       {/* Background GLlow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-175 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* CTA */}
        <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#05070a] px-6 py-10 sm:px-10 lg:px-11">

          {/* Blue glow inside CTA */}
          <div className="pointer-events-none absolute left-1/4 top-0 h-32 w-80 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">

            {/* LEFT CONTENT */}
            <div>
              <p className="mb-5 text-sm font-medium tracking-wide text-blue-500">
                STAY UPDATED
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Get 10% OFF your first order
              </h2>

              <p className="mt-4 max-w-lg text-base leading-7 text-gray-400 sm:text-lg">
                Join the Nexa newsletter and be the first to know
                about new arrivals, exclusive offers, and more.
              </p>
            </div>

            {/* RIGHT FORM */}
            <div>
              <form onSubmit={handleSubmit}>

                <div className="flex flex-col gap-3 rounded-2xl border border-white/20 bg-black/40 p-1.5 backdrop-blur-sm sm:flex-row">

                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="min-w-0 flex-1 bg-transparent px-4 py-3 text-base text-white outline-none placeholder:text-gray-500"
                  />

                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.35)]"
                  >
                    Subscribe

                    <ArrowRight
                      size={20}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>

                {/* Privacy message */}
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                  <ShieldCheck size={20} />

                  <span>
                    No spam. Unsubscribe anytime.
                  </span>
                </div>

              </form>
            </div>

          </div>
        </section>


        {/* Main Footer */}
        <div className="grid gap-12 py-20 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">

          {/* BRAND */}
          <div>
            <a
              href="/"
              className="inline-block text-4xl font-bold tracking-tight"
            >
              Nexa<span className="text-blue-600">.</span>
            </a>

            <p className="mt-6 max-w-xs text-base leading-7 text-gray-400">
              Premium technology products for work, play,
              and everything in between.
            </p>

            <address className="mt-8 not-italic text-base leading-8 text-gray-400">
               Chaom Chau 1 Pur Senchey 
              <br />
              Phnom Penh, Cambodia 19101
            </address>

            {/* SOCIAL ICONS */}
            <div className="mt-8 flex gap-4">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/3 text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                <FaInstagram size={24}/>
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/3 text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                <FaFacebookF size={22}/>
              </a>

              <a
                href="#"
                aria-label="Tiktok"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/3 text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                <FaTiktok size={22}/>
              </a>

            </div>
          </div>


          {/* DOCUMENTATION */}
          <FooterColumn
            title="Documentation"
            links={[
              "Getting Started",
              "API Reference",
              "Integrations",
              "Examples",
              "SDKs",
            ]}
          />


          {/* RESOURCES */}
          <FooterColumn
            title="Resources"
            links={[
              "Changelog",
              "Pricing",
              "Status",
              "Webhooks",
            ]}
          />


          {/* COMPANY */}
          <FooterColumn
            title="Company"
            links={[
              "Blog",
              "Contact",
              "Customers",
              "Brand",
            ]}
          />


          {/* LEGAL */}
          <FooterColumn
            title="Legal"
            links={[
              "Acceptable Use",
              "Privacy Policy",
              "Terms of Service",
            ]}
          />

        </div>


        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* COPYRIGHT */}
            <p className="text-sm text-gray-400 sm:text-base">
              © 2025 Nexa. All rights reserved.
            </p>


            {/* PAYMENT METHODS */}
            <div className="flex flex-wrap items-center gap-3">

              <PaymentBadge>
                VISA
              </PaymentBadge>

              <PaymentBadge>
                <span className="flex items-center gap-0.5">
                  <span className="h-5 w-5 rounded-full bg-white" />
                  <span className="-ml-2 h-5 w-5 rounded-full border border-white bg-transparent" />
                </span>
              </PaymentBadge>

              <PaymentBadge>
                PayPal
              </PaymentBadge>

              <PaymentBadge>
                ABA
              </PaymentBadge>

              <PaymentBadge>
                ACLEDA
              </PaymentBadge>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}


/* Footer Column Component */
function FooterColumn({ title, links }) {
  return (
    <div className="border-l border-white/10 pl-0 lg:pl-8">

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <ul className="mt-6 space-y-5">

        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-base text-gray-400 transition-colors duration-300 hover:text-white"
            >
              {link}
            </a>
          </li>
        ))}

      </ul>

    </div>
  );
}


// Payment badge
function PaymentBadge({ children }) {
  return (
    <div className="flex h-12 min-w-20 items-center justify-center rounded-md border border-white/10 bg-white/3 px-4 text-sm font-semibold text-white">
      {children}
    </div>
  );
}


export default Footer;