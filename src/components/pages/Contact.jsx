// src/components/pages/Contact.jsx
import React, { useState } from 'react';
import PageWrapper from 'components/common/PageWrapper';
import Input from 'components/common/Input';
import Form from 'components/common/Form';
import Card from 'components/common/Card';
import { SvgPattern1 } from 'components/common/Svgs';

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

    const whatsappNumber = '917038778801'; // Replace with your actual number

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <PageWrapper
      className="bg-gradient-to-br from-blue-50 via-purple-50/80 to-pink-50"
      topSvg={SvgPattern1}
      bottomSvg={SvgPattern1}
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-thin mb-4 text-gray-800">Contact Us</h1>
        <p className="text-lg font-light text-gray-600">
          We&apos;d love to hear from you. Get in touch with us.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 max-w-2xl mx-auto">
        {/* Contact Form Wrapped in Card */}
        <Card
          title="Send Us a Message"
          description="Fill out the form below, and we'll get back to you shortly."
          gradientClass="gradient-icon-1"
        >
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
        </Card>

        {/* WhatsApp Contact Info Wrapped in Card */}
        <Card
          title="Need Immediate Assistance?"
          description="Reach out to us directly on WhatsApp."
          gradientClass="gradient-icon-2"
        >
          <a
            href="https://wa.me/917038778801"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            +91 7038778801
          </a>
        </Card>
      </div>
    </PageWrapper>
  );
};

export default Contact;