import React from 'react';
import whatsappQR from 'assets/images/whatsapp.png';
import { ReactComponent as SvgBottomLeft } from 'assets/svgs/svg-bottom-left.svg';

const WhatsApp = () => {
  return (
    <section className="block-bg-white text-center w-full relative py-12" aria-labelledby="whatsapp-title">
      <div className="max-w-3xl mx-auto px-4">
        <h3 className="text-2xl font-normal mb-4" id="whatsapp-title">
          Curious about Khamgaon.online?
        </h3>
        <p className="text-lg mb-4 font-light">
          Scan the QR code to message us on WhatsApp and stay updated!
        </p>
        <img
          src={whatsappQR}
          alt="WhatsApp QR Code for contacting Khamgaon Online"
          className="qr-code mx-auto mb-4"
          loading="lazy"
          width="200"
          height="200"
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
        <SvgBottomLeft className="abstract-svg svg-bottom-left" alt="Abstract Design" width="100" height="100" />
      </div>
    </section>
  );
};

export default WhatsApp; 