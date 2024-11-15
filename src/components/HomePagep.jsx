import React from 'react';

const HomePage = () => {
  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Khamgaon.online is your one-stop platform for exploring Khamgaon, connecting residents with local businesses and community events."
        />
        <title>Khamgaon.online - Connecting Khamgaon like never before!</title>

        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Khamgaon.online - Coming Soon" />
        <meta
          property="og:description"
          content="Discover local businesses, events, and community engagement opportunities in Khamgaon."
        />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="https://khamgaon.online" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Khamgaon.online - Coming Soon" />
        <meta
          name="twitter:description"
          content="Discover local businesses, events, and community engagement opportunities in Khamgaon."
        />
        <meta name="twitter:image" content="/images/logo.png" />

        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link rel="icon" href="images/favicon.png" type="image/x-icon" />

        {/* Add more meta tags */}
        <meta
          name="keywords"
          content="Khamgaon, online directory, local business, community events, Maharashtra"
        />
        <meta name="author" content="Khamgaon.online" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://khamgaon.online" />

        {/* Move all resource hints to the top */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />

        {/* Optimized resource loading */}
        <link rel="stylesheet" href="css/colors.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="preload" href="images/logo.png" as="image" />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GHVRHGY6B6"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GHVRHGY6B6', {
              'send_page_view': true,
            });
          `}
        </script>
      </head>

      <body className="text-gray-800">
        {/* Coming Soon Banner */}
        <section
          className="coming-soon-banner"
          role="banner"
          aria-label="Coming Soon Announcement"
        >
          <span>Coming Soon!</span>
        </section>

        {/* Intro Section */}
        <header className="block-bg-white w-full text-center relative">
          <div className="logo-container mb-6">
            <img
              src="images/logo.png"
              alt="Khamgaon.online Logo"
              width="200"
              height="200"
              className="rounded-lg mx-auto"
              fetchpriority="high"
            />
          </div>
          <h1 className="text-4xl font-light mb-4">Khamgaon Online</h1>
          <h2 className="text-2xl font-thin">
            Connecting Khamgaon like never before!
          </h2>
          <div className="svg-container" aria-hidden="true">
            <object
              data="svgs/svg-top-left.svg"
              type="image/svg+xml"
              className="abstract-svg svg-top-left"
              width="100"
              height="100"
            ></object>
          </div>
        </header>

        {/* Features Section */}
        <section
          className="block-bg-gray w-full relative"
          role="region"
          aria-label="Key Features"
        >
          <div className="my-8">
            <h3 className="text-center text-gray-700 text-2xl mb-2">
              Khamgaon Online is your one-stop platform for exploring Khamgaon.
            </h3>
            <p className="text-center text-gray-700 font-light text-lg">
              From local businesses and professionals to community events, we
              aim to connect residents and foster community engagement.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <article className="image-container shadow text-center transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="p-6">
                  <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 gradient-icon-1">
                    <span className="material-icons text-white text-2xl">
                      people
                    </span>
                  </div>
                  <h4 className="font-semibold text-lg mb-3">
                    Community Engagement
                  </h4>
                  <p className="text-gray-600">
                    Join discussions, share insights, and connect with fellow
                    Khamgaon residents.
                  </p>
                </div>
              </article>

              <article className="image-container shadow text-center transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="p-6">
                  <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 gradient-icon-2">
                    <span className="material-icons text-white text-2xl">
                      business
                    </span>
                  </div>
                  <h4 className="font-semibold text-lg mb-3">
                    Local Business Directory
                  </h4>
                  <p className="text-gray-600">
                    Explore and support local businesses and professionals in
                    Khamgaon.
                  </p>
                </div>
              </article>

              <article className="image-container shadow text-center transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="p-6">
                  <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 gradient-icon-3">
                    <span className="material-icons text-white text-2xl">
                      event
                    </span>
                  </div>
                  <h4 className="font-semibold text-lg mb-3">
                    Events and Announcements
                  </h4>
                  <p className="text-gray-600">
                    Stay updated with upcoming events and announcements in your
                    community.
                  </p>
                </div>
              </article>

              <article className="image-container shadow text-center transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="p-6">
                  <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 gradient-icon-4">
                    <span className="material-icons text-white text-2xl">
                      chat
                    </span>
                  </div>
                  <h4 className="font-semibold text-lg mb-3">One-on-One Chat</h4>
                  <p className="text-gray-600">
                    Connect directly with local professionals and businesses.
                  </p>
                </div>
              </article>

              <article className="image-container shadow text-center transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="p-6">
                  <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 gradient-icon-5">
                    <span className="material-icons text-white text-2xl">
                      star
                    </span>
                  </div>
                  <h4 className="font-semibold text-lg mb-3">
                    Reviews and Ratings
                  </h4>
                  <p className="text-gray-600">
                    Read and leave reviews for local services and businesses.
                  </p>
                </div>
              </article>

              <article className="image-container shadow text-center transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="p-6">
                  <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 gradient-icon-6">
                    <span className="material-icons text-white text-2xl">
                      shopping_cart
                    </span>
                  </div>
                  <h4 className="font-semibold text-lg mb-3">
                    Order Products Online
                  </h4>
                  <p className="text-gray-600">
                    Order products and services directly from local vendors.
                  </p>
                </div>
              </article>
            </div>
          </div>
          <img
            src="svgs/svg-top-right.svg"
            className="abstract-svg svg-top-right"
            alt="Abstract Design"
            loading="lazy"
          />
        </section>

        {/* Explore Khamgaon Section */}
        <section className="block-bg-white w-full relative py-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-center text-gray-700 text-2xl mb-2">
              Explore Categories on Khamgaon.online
            </h3>
            <p className="text-center text-gray-700 font-light text-lg mb-8">
              Uncover the rich array of services, businesses, and iconic
              landmarks that Khamgaon has to offer.
            </p>

            {/* Category Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
              <div className="group relative cursor-pointer">
                <div className="text-center p-4 rounded-lg bg-white hover:bg-gray-50 transition-all duration-300">
                  <div className="relative">
                    <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto gradient-icon-1 group-hover:scale-110 transition-transform">
                      <span className="material-icons text-white">
                        local_hospital
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 font-medium group-hover:text-blue-600">
                    Hospitals
                  </p>
                </div>
              </div>

              <div className="group relative cursor-pointer">
                <div className="text-center p-4 rounded-lg bg-white hover:bg-gray-50 transition-all duration-300">
                  <div className="relative">
                    <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto gradient-icon-3 group-hover:scale-110 transition-transform">
                      <span className="material-icons text-white">
                        restaurant
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 font-medium group-hover:text-blue-600">
                    Restaurants
                  </p>
                </div>
              </div>

              <div className="group relative cursor-pointer">
                <div className="text-center p-4 rounded-lg bg-white hover:bg-gray-50 transition-all duration-300">
                  <div className="relative">
                    <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto gradient-icon-5 group-hover:scale-110 transition-transform">
                      <span className="material-icons text-white">school</span>
                    </div>
                  </div>
                  <p className="mt-2 font-medium group-hover:text-blue-600">
                    Schools
                  </p>
                </div>
              </div>

              <div className="group relative cursor-pointer">
                <div className="text-center p-4 rounded-lg bg-white hover:bg-gray-50 transition-all duration-300">
                  <div className="relative">
                    <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto gradient-icon-2 group-hover:scale-110 transition-transform">
                      <span className="material-icons text-white">park</span>
                    </div>
                  </div>
                  <p className="mt-2 font-medium group-hover:text-blue-600">
                    Parks
                  </p>
                </div>
              </div>

              <div className="group relative cursor-pointer">
                <div className="text-center p-4 rounded-lg bg-white hover:bg-gray-50 transition-all duration-300">
                  <div className="relative">
                    <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto gradient-icon-6 group-hover:scale-110 transition-transform">
                      <span className="material-icons text-white">
                        shopping_cart
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 font-medium group-hover:text-blue-600">
                    Shops
                  </p>
                </div>
              </div>

              <div className="group relative cursor-pointer">
                <div className="text-center p-4 rounded-lg bg-white hover:bg-gray-50 transition-all duration-300">
                  <div className="relative">
                    <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto gradient-icon-4 group-hover:scale-110 transition-transform">
                      <span className="material-icons text-white">store</span>
                    </div>
                  </div>
                  <p className="mt-2 font-medium group-hover:text-blue-600">
                    Stores
                  </p>
                </div>
              </div>

              <div className="group relative cursor-pointer">
                <div className="text-center p-4 rounded-lg bg-white hover:bg-gray-50 transition-all duration-300">
                  <div className="relative">
                    <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto gradient-icon-2 group-hover:scale-110 transition-transform">
                      <span className="material-icons text-white">hotel</span>
                    </div>
                  </div>
                  <p className="mt-2 font-medium group-hover:text-blue-600">
                    Hotels
                  </p>
                </div>
              </div>

              <div className="group relative cursor-pointer">
                <div className="text-center p-4 rounded-lg bg-white hover:bg-gray-50 transition-all duration-300">
                  <div className="relative">
                    <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto gradient-icon-1 group-hover:scale-110 transition-transform">
                      <span className="material-icons text-white">
                        fitness_center
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 font-medium group-hover:text-blue-600">
                    Gyms
                  </p>
                </div>
              </div>

              <div className="group relative cursor-pointer">
                <div className="text-center p-4 rounded-lg bg-white hover:bg-gray-50 transition-all duration-300">
                  <div className="relative">
                    <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto gradient-icon-3 group-hover:scale-110 transition-transform">
                      <span className="material-icons text-white">
                        content_cut
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 font-medium group-hover:text-blue-600">
                    Beauty Salons
                  </p>
                </div>
              </div>

              <div className="group relative cursor-pointer">
                <div className="text-center p-4 rounded-lg bg-white hover:bg-gray-50 transition-all duration-300">
                  <div className="relative">
                    <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto gradient-icon-4 group-hover:scale-110 transition-transform">
                      <span className="material-icons text-white">
                        local_pharmacy
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 font-medium group-hover:text-blue-600">
                    Pharmacies
                  </p>
                </div>
              </div>

              <div className="group relative cursor-pointer">
                <div className="text-center p-4 rounded-lg bg-white hover:bg-gray-50 transition-all duration-300">
                  <div className="relative">
                    <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto gradient-icon-5 group-hover:scale-110 transition-transform">
                      <span className="material-icons text-white">pets</span>
                    </div>
                  </div>
                  <p className="mt-2 font-medium group-hover:text-blue-600">
                    Pet Services
                  </p>
                </div>
              </div>

              <div className="group relative cursor-pointer">
                <div className="text-center p-4 rounded-lg bg-white hover:bg-gray-50 transition-all duration-300">
                  <div className="relative">
                    <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto gradient-icon-6 group-hover:scale-110 transition-transform">
                      <span className="material-icons text-white">
                        home_repair_service
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 font-medium group-hover:text-blue-600">
                    Home Services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="block-bg-gray w-full relative py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-normal text-center mb-12">
              Frequently Asked Questions
            </h3>
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">
                      When will Khamgaon.online launch?
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      We're working hard to bring you the best experience. Stay
                      tuned for our launch announcement! Follow us on social
                      media or subscribe to our updates to be the first to know.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">
                      How can businesses get listed?
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Business owners can register their interest through our
                      WhatsApp contact. We'll reach out with more details about
                      the listing process, requirements, and benefits of
                      joining Khamgaon.online.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">
                      Is listing free for businesses?
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Yes, basic listing will be free for all businesses in
                      Khamgaon. Premium features and enhanced visibility options
                      will be available for businesses looking to stand out.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">
                      How secure is the platform?
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      We prioritize the security of our users and businesses.
                      The platform will implement industry-standard security
                      measures, including data encryption and secure payment
                      processing.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">
                      How can I contact support?
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      You can reach our support team through WhatsApp or email.
                      We aim to respond to all queries within 24 hours. During
                      the pre-launch phase, WhatsApp is the fastest way to get
                      in touch with us.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 6 */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">
                      What features will be available at launch?
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      The initial launch will include business listings,
                      community engagement features, event announcements, and
                      direct messaging capabilities. We'll continuously add new
                      features based on community feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp QR Section */}
        <section className="block-bg-white text-center w-full relative">
          <h3 className="text-2xl font-normal mb-4">
            Curious about Khamgaon.online?
          </h3>
          <p className="text-lg mb-4 font-light">
            Scan the QR code to message us on WhatsApp and stay updated!
          </p>
          <img
            src="images/whatsapp.png"
            alt="WhatsApp QR Code"
            className="qr-code mx-auto mb-4"
            loading="lazy"
          />
          <a
            href="https://wa.me/message/XAHXJJJMHUKLD1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-light"
            itemScope
            itemType="http://schema.org/ContactPoint"
          >
            <span itemProp="contactType">WhatsApp</span> Us:
            <span itemProp="telephone">+91-7038778801</span>
          </a>
          <img
            src="svgs/svg-bottom-left.svg"
            className="abstract-svg svg-bottom-left"
            alt="Abstract Design"
            loading="lazy"
          />
        </section>

        {/* Call to Action for Businesses */}
        <section className="block-bg-gray text-center w-full relative">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-normal mb-4">
              Own a Business in Khamgaon?
            </h3>
            <p className="text-lg mb-4 font-light">
              Get ready to showcase your business to the entire Khamgaon
              community. Register your interest now!
            </p>
            <a
              href="https://wa.me/message/XAHXJJJMHUKLD1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded hover:bg-blue-50 transition-colors shadow-md"
            >
              Register Interest
            </a>
          </div>
        </section>

        {/* Social Media Section */}
        <footer className="block-bg-white text-center w-full relative">
          <p className="mb-2">Follow us on social media:</p>
          <div className="flex justify-center mt-4 space-x-4 content">
            <a
              href="https://www.facebook.com/profile.php?id=61567406970212"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
              aria-label="Follow us on Facebook"
            >
              <i
                className="fab fa-facebook-square text-blue-600"
                aria-hidden="true"
              ></i>
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://x.com/khamgaononline"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
              aria-label="Twitter"
            >
              <i
                className="fab fa-twitter-square text-blue-400"
                aria-hidden="true"
              ></i>
            </a>
            <a
              href="https://www.instagram.com/khamgaon.online"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
              aria-label="Instagram"
            >
              <i
                className="fab fa-instagram-square text-pink-500"
                aria-hidden="true"
              ></i>
            </a>
          </div>

          <div className="mt-8">
            <a
              className="text-gray-400"
              href="terms.html"
              target="_blank"
              aria-label="Terms of Service"
            >
              Terms of Service
            </a>
            <span className=" text-gray-400"> | </span>
            <a
              className="text-gray-400"
              href="privacy.html"
              target="_blank"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </a>
          </div>

          <img
            src="svgs/svg-bottom-right.svg"
            className="abstract-svg svg-bottom-right"
            alt="Abstract Design"
            loading="lazy"
          />
        </footer>
      </body>
    </div>
  );
};

export default HomePage; 