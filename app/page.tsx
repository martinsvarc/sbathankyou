

export default function Home() {
  return (
    <main className="min-h-screen bg-coal">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Headline Section */}
        <section className="text-center mb-12 md:mb-16">
          <h1 className="headline text-4xl md:text-6xl lg:text-7xl mb-4 text-white">
            CONGRATULATIONS!
          </h1>
          <p className="subheadline text-lg md:text-xl lg:text-2xl">
            YOUR BOOKING IS CONFIRMED, AND YOU'RE NOW AN OFFICIAL MEMBER OF OUR FAMILY!
          </p>
        </section>

        {/* Investment Guide Card */}
        <section className="mb-8 md:mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-charcoal rounded-lg p-6 md:p-8 border border-gold/30 shadow-lg">
              <div className="text-center">
                <h2 className="text-xl md:text-2xl font-bold text-gold mb-4">
                  WATCH THE INVESTMENT GUIDE BELOW:
                </h2>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Please note: watching the video below will properly inform you with everything you possibly need to know to make an educated decision when investing into any solar done for you partnership.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Placeholder Section */}
        <section className="mb-12 md:mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="video-placeholder">
              <div className="text-white text-lg md:text-xl">
                VIDEO PLACEHOLDER – Embed will go here
              </div>
            </div>
          </div>
        </section>

        {/* Contact Strip */}
        <section className="text-center mb-12 md:mb-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              If you have any questions or run into issues, email us at{' '}
              <a 
                href="mailto:info@solarbossautomations.com" 
                className="text-gold hover:text-gold/80 transition-colors"
              >
                info@solarbossautomations.com
              </a>
              , or call us at{' '}
              <a 
                href="tel:+17864961702" 
                className="text-gold hover:text-gold/80 transition-colors"
              >
                +1 786-496-1702
              </a>
              {' '}and we'll get back to you as soon as possible.
            </p>
            <p className="text-sm md:text-base text-gray-300 mt-4">
              Welcome aboard, and let's get started on your journey! 🚀
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-charcoal py-6 mt-auto">
        <div className="container mx-auto px-4">
                     <p className="text-xs text-gray-400 text-center">
             © 2025 Solar Boss Automations. All rights reserved. | 30 N Gould St, Ste R, Sheridan, WY 82801 |{' '}
             <a 
               href="mailto:info@solarbossautomations.com" 
               className="text-gold hover:text-gold/80 transition-colors"
             >
               info@solarbossautomations.com
             </a>
           </p>
        </div>
      </footer>
    </main>
  )
}
