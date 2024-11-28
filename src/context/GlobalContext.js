// src/context/GlobalContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [theme, setTheme] = useState('light');
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Load favorites from localStorage
        const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorites(savedFavorites);
    }, []);

    const toggleFavorite = (businessId) => {
        setFavorites(prev => {
            const newFavorites = prev.includes(businessId)
                ? prev.filter(id => id !== businessId)
                : [...prev, businessId];
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            return newFavorites;
        });
    };

    const addNotification = (message, type = 'info') => {
        const id = Date.now();
        setNotifications(prev => [...prev, { id, message, type }]);
        setTimeout(() => {
            removeNotification(id);
        }, 3000);
    };

    const removeNotification = (id) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    };

    return (
        <GlobalContext.Provider value={{
            favorites,
            toggleFavorite,
            theme,
            setTheme,
            notifications,
            addNotification,
            removeNotification
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobal = () => useContext(GlobalContext);