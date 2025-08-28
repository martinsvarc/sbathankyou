"use client";

import Script from "next/script";

export default function SchedulingPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <section className="max-w-5xl mx-auto px-4 pt-12 pb-6 md:pt-16">
        <h1
          className="text-center font-extrabold uppercase tracking-[0.08em] leading-[1.05] text-3xl sm:text-4xl md:text-6xl"
        >
          <span className="bg-gradient-to-b from-gray-100 to-gray-300 bg-clip-text text-transparent">
            Schedule a Time to Speak With Us Below
          </span>
        </h1>
      </section>

      <section className="max-w-5xl mx-auto px-4 flex-1">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl overflow-hidden">
          <div className="p-4 md:p-6">
            <div
              className="calendly-inline-widget w-full h-[680px] sm:h-[720px] md:h-[780px] lg:h-[860px] xl:h-[940px]"
              data-url="https://calendly.com/sbateam/solar-boss-empire-strategy-call?hide_gdpr_banner=1"
            />
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="text-lg font-semibold">NEED HELP?</div>
          <p className="mt-2 text-sm md:text-base text-neutral-400">
            If you have any questions or run into issues, email us at {" "}
            <a className="underline text-neutral-200" href="mailto:info@solarbossautomations.com">
              info@solarbossautomations.com
            </a>{" "}
            or call {" "}
            <a className="underline text-neutral-200" href="tel:+17864961702">
              +1 786-496-1702
            </a>
            .
          </p>
          <p className="mt-6 text-[11px] text-neutral-500">
            © {new Date().getFullYear()} Solar Boss Automations. All rights reserved.
          </p>
        </div>
      </section>

      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
    </main>
  );
}


