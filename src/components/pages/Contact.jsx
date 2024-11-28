// src/components/pages/Contact.jsx
import React, { useState } from 'react';
import PageWrapper from 'components/common/PageWrapper';
import Input from 'components/common/Input';
import Form from 'components/common/Form';
import Card from 'components/common/Card';
import { Text } from 'design-system/components/Text';
import { Whatsapp } from 'react-bootstrap-icons';
import { SvgPattern1 } from 'components/common/Svgs';

const ContactCard = ({ icon: Icon, title, description, children }) => (
  <Card
    variant="elevated"
    size="lg"
    animation="hover"
    title={title}
    description={description}
    gradientClass="gradient-icon-2"
  >
    {children}
  </Card>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    const whatsappUrl = `https://wa.me/917038778801?text=Name: ${encodeURIComponent(
      formData.name
    )}%0AMessage: ${encodeURIComponent(formData.message)}`;
    window.open(whatsappUrl, '_blank');
    setLoading(false);
  };

  return (
    <PageWrapper
      className="bg-gradient-to-br from-blue-50 via-purple-50/80 to-pink-50"
      topSvg={SvgPattern1}
      bottomSvg={SvgPattern1}
    >
      <div className="text-center mb-12">
        <Text variant="h1" className="mb-4">
          Get in Touch
        </Text>
        <Text variant="body" className="max-w-2xl mx-auto">
          Have questions about Khamgaon Online? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </Text>
      </div>

      <div className="grid grid-cols-1 gap-12 max-w-2xl mx-auto">
        <ContactCard
          title="Send Us a Message"
          description="Fill out the form below, and we'll get back to you shortly."
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
        </ContactCard>

        <ContactCard
          title="Direct Contact"
          description="Reach out to us directly on WhatsApp"
        >
          <a
            href="https://wa.me/917038778801"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mt-4"
          >
            <Whatsapp className="mr-2" />
            +91 7038778801
          </a>
        </ContactCard>
      </div>
    </PageWrapper>
  );
};

export default Contact;