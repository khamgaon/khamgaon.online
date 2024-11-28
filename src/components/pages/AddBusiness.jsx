// src/components/pages/AddBusiness.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, Trash } from 'react-bootstrap-icons';
import Form from '../common/Form';
import Input from '../common/Input';
import Button from '../common/Button';
import IconButton from '../common/IconButton';
import PageWrapper from '../common/PageWrapper';
import { Text } from 'design-system/components/Text';

const validateForm = (data) => {
    const errors = {};
    if (!data.name) errors.name = 'Business name is required';
    if (!data.description) errors.description = 'Description is required';
    if (!data.category) errors.category = 'Category is required';
    if (!data.address) errors.address = 'Address is required';
    if (!data.phone[0]) errors.phone = 'At least one phone number is required';
    if (!data.images[0]) errors.images = 'At least one image is required';
    if (!data.pricing[0].service || !data.pricing[0].price) {
        errors.pricing = 'At least one service with price is required';
    }
    return errors;
};

const AddBusiness = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        address: '',
        phone: [''],
        email: '',
        operatingHours: {
            monday_to_friday: '',
            weekends: ''
        },
        images: ['', ''],
        services: [''],
        pricing: [{
            service: '',
            price: ''
        }],
        specialOffers: [{
            title: '',
            description: ''
        }],
        faqs: [{
            question: '',
            answer: ''
        }],
        owner: {
            name: '',
            position: '',
            bio: ''
        },
        certifications: [''],
        contactForm: true
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleArrayChange = (key, index, value) => {
        const newArray = [...formData[key]];
        newArray[index] = value;
        setFormData(prev => ({
            ...prev,
            [key]: newArray
        }));
    };

    const handleAdd = (key) => {
        setFormData(prev => ({
            ...prev,
            [key]: [...prev[key], key === 'pricing' ? { service: '', price: '' } :
                key === 'specialOffers' ? { title: '', description: '' } :
                    key === 'faqs' ? { question: '', answer: '' } : '']
        }));
    };

    const handleRemove = (key, index) => {
        setFormData(prev => ({
            ...prev,
            [key]: prev[key].filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            window.scrollTo(0, 0);
            return;
        }

        try {
            // TODO: Replace with actual API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Show success message
            alert('Business added successfully!');

            // Redirect to businesses page
            navigate('/businesses');
        } catch (error) {
            alert('Failed to add business. Please try again.');
            console.error('Error adding business:', error);
        }
    };

    return (
        <PageWrapper>
            <div className="max-w-3xl mx-auto py-12 px-4">
                <div className="text-center mb-8">
                    <Text variant="h1" className="mb-4">Add Your Business</Text>
                    <Text variant="body">Fill out the form below to list your business</Text>
                </div>

                <Form onSubmit={handleSubmit} submitLabel="Add Business">
                    <div className="space-y-8">
                        {/* Basic Information */}
                        <section className="space-y-4">
                            <h3 className="text-lg font-medium">Basic Information</h3>
                            <Input
                                label="Business Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                error={errors.name}
                            />
                            <Input
                                label="Description"
                                type="textarea"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                error={errors.description}
                            />
                            <Input
                                label="Category"
                                type="select"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                                options={[
                                    { value: 'restaurants', label: 'Restaurants' },
                                    { value: 'furniture', label: 'Furniture' },
                                    { value: 'hospitals', label: 'Hospitals' },
                                    { value: 'financial-services', label: 'Financial Services' },
                                    { value: 'automotive', label: 'Automotive' },
                                    { value: 'pet-services', label: 'Pet Services' }
                                ]}
                            />
                        </section>

                        {/* Contact Information */}
                        <section className="space-y-4">
                            <h3 className="text-lg font-medium">Contact Information</h3>
                            <Input
                                label="Address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                            {formData.phone.map((num, idx) => (
                                <div key={idx} className="flex gap-2">
                                    <Input
                                        label={`Phone Number ${idx + 1}`}
                                        type="tel"
                                        value={num}
                                        onChange={(e) => handleArrayChange('phone', idx, e.target.value)}
                                        required={idx === 0}
                                    />
                                    {idx > 0 && (
                                        <IconButton
                                            icon={Trash}
                                            onClick={() => handleRemove('phone', idx)}
                                            className="self-end mb-2"
                                        />
                                    )}
                                </div>
                            ))}
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => handleAdd('phone')}
                                className="flex items-center gap-2"
                            >
                                <PlusCircle /> Add Phone Number
                            </Button>
                        </section>

                        {/* Images */}
                        <section className="space-y-4">
                            <h3 className="text-lg font-medium">Images</h3>
                            {formData.images.map((url, idx) => (
                                <div key={idx} className="flex gap-2">
                                    <Input
                                        label={`Image URL ${idx + 1}`}
                                        type="url"
                                        value={url}
                                        onChange={(e) => handleArrayChange('images', idx, e.target.value)}
                                        required={idx === 0}
                                        placeholder="https://example.com/image.jpg"
                                    />
                                    {idx > 0 && (
                                        <IconButton
                                            icon={Trash}
                                            onClick={() => handleRemove('images', idx)}
                                            className="self-end mb-2"
                                        />
                                    )}
                                </div>
                            ))}
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => handleAdd('images')}
                                className="flex items-center gap-2"
                            >
                                <PlusCircle /> Add Image
                            </Button>
                        </section>

                        {/* Services & Pricing */}
                        <section className="space-y-4">
                            <h3 className="text-lg font-medium">Services & Pricing</h3>
                            {formData.pricing.map((item, idx) => (
                                <div key={idx} className="flex gap-2">
                                    <Input
                                        label="Service Name"
                                        value={item.service}
                                        onChange={(e) => handleArrayChange('pricing', idx, { ...item, service: e.target.value })}
                                        required
                                    />
                                    <Input
                                        label="Price Range"
                                        value={item.price}
                                        onChange={(e) => handleArrayChange('pricing', idx, { ...item, price: e.target.value })}
                                        required
                                        placeholder="₹1,000 - ₹2,000"
                                    />
                                    {idx > 0 && (
                                        <IconButton
                                            icon={Trash}
                                            onClick={() => handleRemove('pricing', idx)}
                                            className="self-end mb-2"
                                        />
                                    )}
                                </div>
                            ))}
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => handleAdd('pricing')}
                                className="flex items-center gap-2"
                            >
                                <PlusCircle /> Add Service & Price
                            </Button>
                        </section>

                        {/* Business Owner */}
                        <section className="space-y-4">
                            <h3 className="text-lg font-medium">Business Owner Details</h3>
                            <Input
                                label="Owner Name"
                                name="owner.name"
                                value={formData.owner.name}
                                onChange={(e) => setFormData(prev => ({
                                    ...prev,
                                    owner: { ...prev.owner, name: e.target.value }
                                }))}
                                required
                            />
                            <Input
                                label="Position"
                                name="owner.position"
                                value={formData.owner.position}
                                onChange={(e) => setFormData(prev => ({
                                    ...prev,
                                    owner: { ...prev.owner, position: e.target.value }
                                }))}
                                required
                            />
                            <Input
                                label="Bio"
                                type="textarea"
                                name="owner.bio"
                                value={formData.owner.bio}
                                onChange={(e) => setFormData(prev => ({
                                    ...prev,
                                    owner: { ...prev.owner, bio: e.target.value }
                                }))}
                                required
                            />
                        </section>

                        {/* Operating Hours */}
                        <section className="space-y-4">
                            <h3 className="text-lg font-medium">Operating Hours</h3>
                            <Input
                                label="Weekday Hours"
                                name="operatingHours.monday_to_friday"
                                value={formData.operatingHours.monday_to_friday}
                                onChange={(e) => setFormData(prev => ({
                                    ...prev,
                                    operatingHours: { ...prev.operatingHours, monday_to_friday: e.target.value }
                                }))}
                                placeholder="9:00 AM - 6:00 PM"
                                required
                            />
                            <Input
                                label="Weekend Hours"
                                name="operatingHours.weekends"
                                value={formData.operatingHours.weekends}
                                onChange={(e) => setFormData(prev => ({
                                    ...prev,
                                    operatingHours: { ...prev.operatingHours, weekends: e.target.value }
                                }))}
                                placeholder="10:00 AM - 4:00 PM"
                                required
                            />
                        </section>
                    </div>
                </Form>
            </div>
        </PageWrapper>
    );
};

export default AddBusiness;