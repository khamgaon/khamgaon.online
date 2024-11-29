// src/components/common/MapPicker.jsx
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { GeoAlt } from 'react-bootstrap-icons';
import Button from './Button';

const MapPicker = ({
    value,
    onChange,
    error,
    required
}) => {
    const [map, setMap] = useState(null);
    const [searchBox, setSearchBox] = useState(null);
    const [location, setLocation] = useState({
        lat: 20.7002, // Khamgaon coordinates
        lng: 76.5674
    });

    const handleLocationSelect = (place) => {
        const newLocation = {
            address: place.formatted_address,
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
        };
        setLocation({ lat: newLocation.lat, lng: newLocation.lng });
        onChange(newLocation);
    };

    const handleGetCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    setLocation(pos);

                    // Reverse geocode to get address
                    const geocoder = new google.maps.Geocoder();
                    geocoder.geocode({ location: pos }, (results, status) => {
                        if (status === "OK" && results[0]) {
                            handleLocationSelect(results[0]);
                        }
                    });
                },
                (error) => {
                    console.error("Error getting location:", error);
                    alert("Error getting your location. Please try selecting manually.");
                }
            );
        }
    };

    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-700">
                    Select Location {required && <span className="text-red-500">*</span>}
                </label>
                <Button
                    type="button"
                    variant="outline"
                    onClick={handleGetCurrentLocation}
                    className="flex items-center gap-2 text-sm"
                >
                    <GeoAlt /> Use Current Location
                </Button>
            </div>

            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}
                libraries={["places"]}
            >
                <div className="mb-2">
                    <input
                        type="text"
                        placeholder="Search for location..."
                        className="w-full px-4 py-2 border rounded-lg"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                            }
                        }}
                        ref={(input) => {
                            if (input && !searchBox) {
                                const searchBoxInstance = new window.google.maps.places.SearchBox(input);
                                setSearchBox(searchBoxInstance);
                                searchBoxInstance.addListener('places_changed', () => {
                                    const places = searchBoxInstance.getPlaces();
                                    if (places.length === 0) return;
                                    handleLocationSelect(places[0]);
                                });
                            }
                        }}
                    />
                </div>

                <GoogleMap
                    mapContainerClassName="w-full h-64 rounded-lg"
                    center={location}
                    zoom={15}
                    onClick={(e) => {
                        const pos = { lat: e.latLng.lat(), lng: e.latLng.lng() };
                        setLocation(pos);
                        const geocoder = new google.maps.Geocoder();
                        geocoder.geocode({ location: pos }, (results, status) => {
                            if (status === "OK" && results[0]) {
                                handleLocationSelect(results[0]);
                            }
                        });
                    }}
                    onLoad={setMap}
                >
                    <Marker position={location} />
                </GoogleMap>
            </LoadScript>

            {value?.address && (
                <div className="text-sm text-gray-600">
                    Selected: {value.address}
                </div>
            )}

            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default MapPicker;