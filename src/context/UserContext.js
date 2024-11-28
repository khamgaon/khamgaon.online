// src/context/UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const UserContext = createContext(null);


const USER = {
    name: "John Doe",
    username: "johndoe123",
    profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    coverPhoto: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
    about: "Food enthusiast & local explorer",
    stats: {
        favorites: 12,
        reviews: 28,
        followers: 156
    },
    favorites: [],
    reviews: []
};

export const UserProvider = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const [user, setUser] = useState(USER);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isAuthenticated) {
            // Load user data from localStorage or API
            const savedUser = JSON.parse(localStorage.getItem('userData'));
            if (savedUser) {
                setUser(savedUser);
            }
        }
        setLoading(false);
    }, [isAuthenticated]);

    const updateUser = (data) => {
        const updatedUser = { ...user, ...data };
        localStorage.setItem('userData', JSON.stringify(updatedUser));
        setUser(updatedUser);
    };

    return (
        <UserContext.Provider value={{ user, updateUser, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);