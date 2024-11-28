// src/components/common/Notifications.jsx
import React from 'react';
import { useGlobal } from 'context/GlobalContext';
import { XCircle } from 'react-bootstrap-icons';

export const Notifications = () => {
    const { notifications, removeNotification } = useGlobal();

    return (
        <div className="fixed bottom-4 right-4 z-50 space-y-2">
            {notifications.map(({ id, message, type }) => (
                <div
                    key={id}
                    className={`
            px-4 py-2 rounded-lg shadow-lg max-w-md 
            ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} 
            text-white flex items-center justify-between
          `}
                >
                    <span>{message}</span>
                    <button className="ml-4" onClick={() => removeNotification(id)}>
                        <XCircle size={20} />
                    </button>
                </div>
            ))}
        </div>
    );
};