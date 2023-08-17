import { useLocation, Outlet, Navigate } from 'react-router-dom';

const AuthRoutes = () => {
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.token) {
        return <Outlet />;
    } else {
        localStorage.clear();
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

};
export default AuthRoutes;