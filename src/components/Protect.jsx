import React from 'react'
import { useContext } from 'react';
import { mycontext } from './Context';
import { Navigate } from 'react-router-dom';
function Protect({children}){
    const {loggedIn} = useContext(mycontext);
    if(loggedIn){
        return children;
    }
    else{
        <Navigate to='/'/>;
    }
}

export default Protect
