import React from 'react'
import { UserAuth } from '../context/Authcontext'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user} = UserAuth();
    if(!user){
        return <Navigate to="/" />;
    }
  return (
    <div>{children}</div>
  );
}

export default ProtectedRoute