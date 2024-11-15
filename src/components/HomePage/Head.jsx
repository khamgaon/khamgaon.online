import React from 'react';

const Head = () => {
  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Khamgaon.online is your one-stop platform for exploring Khamgaon, connecting residents with local businesses and community events."
      />
      <title>Khamgaon.online - Connecting Khamgaon like never before!</title>

      {/* Open Graph Tags */}
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

      {/* Stylesheets */}
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      <link rel="icon" href="images/favicon.png" type="image/x-icon" />

      {/* SEO Tags */}
      <meta name="keywords" content="Khamgaon, online directory, local business, community events, Maharashtra" />
      <meta name="author" content="Khamgaon.online" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://khamgaon.online" />

      {/* Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin />
      <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
      <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />

      {/* Local Resources */}
      <link rel="stylesheet" href="css/colors.css" />
      <link rel="stylesheet" href="css/style.css" />
      <link rel="preload" href="images/logo.png" as="image" />

      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-GHVRHGY6B6"></script>
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
  );
};

export default Head; 