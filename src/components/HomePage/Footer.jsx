import React from 'react';

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61567406970212",
      icon: "fab fa-facebook-square text-blue-600",
      label: "Facebook"
    },
    {
      href: "https://x.com/khamgaononline",
      icon: "fab fa-twitter-square text-blue-400",
      label: "Twitter"
    },
    {
      href: "https://www.instagram.com/khamgaon.online",
      icon: "fab fa-instagram-square text-pink-500",
      label: "Instagram"
    }
  ];

  return (
    <footer className="block-bg-white text-center w-full relative py-8">
      <div className="max-w-3xl mx-auto px-4">
        <p className="mb-2">Follow us on social media:</p>
        <div className="flex justify-center mt-4 space-x-4 content">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-${social.icon.split(' ').pop()}`}
              aria-label={`Follow us on ${social.label}`}
            >
              <i className={social.icon} aria-hidden="true"></i>
              <span className="sr-only">{social.label}</span>
            </a>
          ))}
        </div>

        <div className="mt-8">
          <a
            className="text-gray-400 hover:text-gray-600"
            href="terms.html"
            target="_blank"
            aria-label="Terms of Service"
          >
            Terms of Service
          </a>
          <span className="text-gray-400 mx-2">|</span>
          <a
            className="text-gray-400 hover:text-gray-600"
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
          width="100"
          height="100"
        />
      </div>
    </footer>
  );
};

export default Footer; 