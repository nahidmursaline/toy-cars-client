import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    if(loading){
        return <progress className="progress progress-error w-56" value="40" max="100"></progress>
    }

    if(user?.email){
        return children;
    }

    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoute;