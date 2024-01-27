
import { useContext } from 'react';
import {Routes as Router,Route,Navigate,Outlet} from 'react-router-dom';
import { AuthContext } from './context/auth-context';
import Login from "./screens/auth/login/login";
import Dashboard from './screens/dashboard/dashboard';


// type Props = {};

const PrivateRoutes = () => {
    const {authenticated} = useContext(AuthContext);
    if (!authenticated) return <Navigate to="/login" replace />
    return <Outlet />
}


const Routes = () => {
    return(
        <Router>
            <Route path="/login" element={<Login />}/>
            <Route element={<PrivateRoutes />}>
                <Route path="/" element={<Dashboard />} />
            </Route>
        </Router>
    )
};

export default Routes;