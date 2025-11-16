import React, { Children, use } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';
import { Navigate, useLocation, useNavigate } from 'react-router';

const PrivateRoute = ({Children}) => {
    const {user} = use(AuthContext);

    const location = useLocation();
    console.log(location)


    if(user) {
        return Children;
    }
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;