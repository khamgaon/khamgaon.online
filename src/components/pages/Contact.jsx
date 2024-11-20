// src/components/pages/Contact.jsx
import React, { useState } from 'react';
import { ReactComponent as SvgTopRight } from 'assets/svgs/svg-top-right.svg';
import { ReactComponent as SvgBottomLeft } from 'assets/svgs/svg-bottom-left.svg';
import Input from 'components/common/Input';
import Form from 'components/common/Form';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error on change
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors);
      return;
    }

    // Format message for WhatsApp
    const formattedMessage = `
*New Contact Form Message*
Name: ${formData.name}
Message: ${formData.message}
    `.trim();

    // WhatsApp number with country code (e.g., +91 for India)
    const whatsappNumber = '917038778801'; // Replace with your actual number

    // Create WhatsApp URL with formatted message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50/80 to-pink-50 py-12 px-4 relative overflow-hidden">
      {/* Abstract SVG Decorations */}
      <SvgTopRight className="absolute top-0 right-0 w-64 h-64 text-blue-200/30" aria-hidden="true" />
      <SvgBottomLeft className="absolute bottom-0 left-0 w-64 h-64 text-purple-200/30" aria-hidden="true" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-thin mb-4 text-gray-800">Contact Us</h1>
          <p className="text-lg font-light text-gray-600">
            We'd love to hear from you. Get in touch with us.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-2xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <Form onSubmit={handleSubmit} submitLabel="Send Message via WhatsApp">
              <Input
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                error={errors.name}
              />
              <Input
                label="Message"
                type="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                error={errors.message}
              />
            </Form>
          </div>

          {/* WhatsApp Contact Info */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center">
            <p className="text-center text-gray-600 mb-2">
              Having trouble with the form? Reach out to us directly on WhatsApp:
            </p>
            <a
              href="https://wa.me/917038778801"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              +91 7038778801
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;