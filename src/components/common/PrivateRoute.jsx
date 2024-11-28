// src/components/common/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';
import Loading from './Loading';

export const PrivateRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return <Loading />;
    }

    return isAuthenticated ? children : <Navigate to="/login" />;
};