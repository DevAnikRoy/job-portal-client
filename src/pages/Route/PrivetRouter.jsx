import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRouter = ({ children }) => {

    const { user, loading } = use(AuthContext)
    const location = useLocation()
    // console.log(location.pathname)

    if (loading) {
        return <div className='flex justify-center items-center my-15'>
            <span className="loading loading-spinner text-success w-[50px]"></span>
            <span className="loading loading-spinner text-warning w-[50px]"></span>
            <span className="loading loading-spinner text-error w-[50px]"></span>
        </div>
    }

    if (!user) {
        return <Navigate to='/signIn' state={location.pathname}></Navigate>
    }

    return children
};

export default PrivetRouter;