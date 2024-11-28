// src/components/common/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';

export const PrivateRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return <Loading />;
    }

    return isAuthenticated ? children : <Navigate to="/auth" />;
};