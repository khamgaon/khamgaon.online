// src/components/pages/AddBusiness.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    PlusCircle, Trash, Image,
    X
} from 'react-bootstrap-icons';
import Form from '../common/Form';
import Input from '../common/Input';
import Button from '../common/Button';
import IconButton from '../common/IconButton';
import PageWrapper from '../common/PageWrapper';
import { Text } from 'design-system/components/Text';
import Combobox from 'components/common/Combobox';
import MapPicker from 'components/common/MapPicker';
import ImageUpload from 'components/common/ImageUpload';
import ImageGrid from 'components/common/ImageGrid';
import DaySchedule from 'components/common/DaySchedule';

const validateForm = (data) => {
    const errors = {};
    if (!data.name) errors.name = 'Business name is required';
    if (!data.tagline) errors.tagline = 'Tagline is required';
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
    const [is24x7, setIs24x7] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        tagline: '',
        description: '',
        category: '',
        address: '',
        phone: [''],
        email: '',
        operatingHours: {
            monday: '09:00 - 21:00',
            tuesday: '09:00 - 21:00',
            wednesday: '09:00 - 21:00',
            thursday: '09:00 - 21:00',
            friday: '09:00 - 21:00',
            saturday: '10:00 - 14:00',
            sunday: 'Closed'
        },
        images: [],
        services_products: [''],
        pricing: [{
            service_product: '',
            price: '',
            description: '',
            images: [] // Array of {file, preview}
        }],
        specialOffers: [{
            title: '',
            description: ''
        }],
        faqs: [{
            question: '',
            answer: ''
        }],
        certifications: [''],
        contactForm: true
    });

    const [categories, setCategories] = useState([
        'restaurants',
        'furniture',
        'hospitals',
        'financial-services',
        'automotive',
        'pet-services'
    ]);

    const handleAddCategory = (newCategory) => {
        setCategories(prev => [...prev, newCategory]);
        handleChange({ target: { name: 'category', value: newCategory } });
    };

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

    const handleSetCover = (idx) => {
        const newImages = formData.images.map((img, i) => ({
            ...img,
            isCover: i === idx
        }));
        setFormData(prev => ({ ...prev, images: newImages }));
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

        const formDataToSubmit = new FormData();

        // Append all form fields
        Object.keys(formData).forEach(key => {
            if (key === 'images') {
                formData.images.forEach(image => {
                    formDataToSubmit.append('images', image.file);
                });
            } else {
                formDataToSubmit.append(key, JSON.stringify(formData[key]));
            }
        });

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
                                label="Tagline"
                                name="tagline"
                                value={formData.tagline}
                                onChange={handleChange}
                                required
                                error={errors.tagline}
                                placeholder="A short, catchy description of your business"
                                helperText="This will appear below your business name"
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
                            <Combobox
                                label="Category"
                                value={formData.category}
                                options={categories}
                                onChange={(value) => handleChange({ target: { name: 'category', value } })}
                                onAddNew={handleAddCategory}
                                required
                                error={errors.category}
                            />

                            {/* Images */}
                            <section className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Business Images <span className="text-red-500">*</span>
                                    </label>
                                </div>

                                <input
                                    type="file"
                                    id="business-images"
                                    onChange={(e) => {
                                        const files = Array.from(e.target.files);
                                        const newImages = files.map(file => ({
                                            file,
                                            preview: URL.createObjectURL(file)
                                        }));
                                        setFormData(prev => ({
                                            ...prev,
                                            images: [...prev.images, ...newImages]
                                        }));
                                    }}
                                    accept="image/*"
                                    multiple
                                    className="hidden"
                                />

                                <ImageGrid
                                    images={formData.images}
                                    onAdd={() => document.getElementById('business-images').click()}
                                    onRemove={(idx) => {
                                        const newImages = [...formData.images];
                                        if (newImages[idx].isCover && newImages.length > 1) {
                                            newImages[0].isCover = true;
                                        }
                                        newImages.splice(idx, 1);
                                        setFormData(prev => ({ ...prev, images: newImages }));
                                    }}
                                    onSetCover={handleSetCover}
                                    inputId="business-images"
                                />
                                {errors.images && <p className="text-sm text-red-500">{errors.images}</p>}
                            </section>

                        </section>

                        {/* Contact Information */}
                        <section className="space-y-4">
                            <h3 className="text-lg font-medium">Contact Information</h3>
                            <MapPicker
                                value={formData.address}
                                onChange={(location) => {
                                    setFormData(prev => ({
                                        ...prev,
                                        address: location.address,
                                        locationMap: `https://maps.google.com/?q=${location.lat},${location.lng}`
                                    }));
                                }}
                                required
                                error={errors.address}
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

                        <section className="space-y-4">
                            <h3 className="text-lg font-medium">Services / Products & Pricing</h3>
                            {formData.pricing.map((item, idx) => (
                                <div key={idx} className="p-4 border rounded-lg space-y-4">
                                    <div className="flex justify-between">
                                        <h4 className="text-md font-medium">Item {idx + 1}</h4>
                                        {idx > 0 && (
                                            <IconButton
                                                icon={Trash}
                                                onClick={() => handleRemove('pricing', idx)}
                                                className="text-red-500 hover:text-red-600"
                                            />
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Input
                                            label="Service / Product Name"
                                            value={item.service_product}
                                            onChange={(e) => handleArrayChange('pricing', idx, {
                                                ...item,
                                                service_product: e.target.value
                                            })}
                                            required
                                        />
                                        <Input
                                            label="Price Range"
                                            value={item.price}
                                            onChange={(e) => handleArrayChange('pricing', idx, {
                                                ...item,
                                                price: e.target.value
                                            })}
                                            required
                                            placeholder="₹1,000 - ₹2,000"
                                        />
                                    </div>

                                    <Input
                                        label="Description"
                                        type="textarea"
                                        value={item.description}
                                        onChange={(e) => handleArrayChange('pricing', idx, {
                                            ...item,
                                            description: e.target.value
                                        })}
                                        placeholder="Describe your service/product"
                                    />
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">Product/Service Images</label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            multiple
                                            className="hidden"
                                            id={`images-${idx}`}
                                            onChange={(e) => {
                                                const files = Array.from(e.target.files);
                                                const newImages = files.map(file => ({
                                                    file,
                                                    preview: URL.createObjectURL(file),
                                                    isCover: item.images?.length === 0 // First image is cover by default
                                                }));

                                                handleArrayChange('pricing', idx, {
                                                    ...item,
                                                    images: [...(item.images || []), ...newImages]
                                                });
                                            }}
                                        />

                                        <ImageGrid
                                            images={item.images || []}
                                            onAdd={() => document.getElementById(`images-${idx}`).click()}
                                            onRemove={(imgIdx) => {
                                                const newImages = [...item.images];
                                                if (newImages[imgIdx].isCover && newImages.length > 1) {
                                                    newImages[0].isCover = true;
                                                }
                                                newImages.splice(imgIdx, 1);
                                                handleArrayChange('pricing', idx, {
                                                    ...item,
                                                    images: newImages
                                                });
                                            }}
                                            onSetCover={(imgIdx) => {
                                                const newImages = item.images.map((img, i) => ({
                                                    ...img,
                                                    isCover: i === imgIdx
                                                }));
                                                handleArrayChange('pricing', idx, {
                                                    ...item,
                                                    images: newImages
                                                });
                                            }}
                                            inputId={`images-${idx}`}
                                        />
                                    </div>

                                </div>
                            ))}

                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => handleAdd('pricing')}
                                className="flex items-center gap-2"
                            >
                                <PlusCircle /> Add Service / Product
                            </Button>
                        </section>
                        {/* Operating Hours */}
                        <section className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-medium">Operating Hours</h3>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={is24x7}
                                        onChange={(e) => {
                                            setIs24x7(e.target.checked);
                                            if (e.target.checked) {
                                                setFormData(prev => ({
                                                    ...prev,
                                                    operatingHours: {
                                                        monday: '24/7',
                                                        tuesday: '24/7',
                                                        wednesday: '24/7',
                                                        thursday: '24/7',
                                                        friday: '24/7',
                                                        saturday: '24/7',
                                                        sunday: '24/7'
                                                    }
                                                }));
                                            }
                                        }}
                                        className="rounded text-blue-600"
                                    />
                                    Open 24/7
                                </label>
                            </div>

                            {!is24x7 && (
                                <div className="space-y-2 border rounded-lg p-4">
                                    {Object.entries(formData.operatingHours).map(([day, schedule]) => (
                                        <DaySchedule
                                            key={day}
                                            day={day.charAt(0).toUpperCase() + day.slice(1)}
                                            schedule={schedule}
                                            onChange={(newSchedule) => {
                                                setFormData(prev => ({
                                                    ...prev,
                                                    operatingHours: {
                                                        ...prev.operatingHours,
                                                        [day]: newSchedule
                                                    }
                                                }));
                                            }}
                                            is24x7={is24x7}
                                            onToggleClosed={(isOpen) => {
                                                setFormData(prev => ({
                                                    ...prev,
                                                    operatingHours: {
                                                        ...prev.operatingHours,
                                                        [day]: isOpen ? '09:00 - 17:00' : 'Closed'
                                                    }
                                                }));
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                        </section>
                    </div>
                </Form>
            </div>
        </PageWrapper>
    );
};

export default AddBusiness;