import React from 'react';
import { Redirect, Route } from 'react-router';

const Private = ({ children, ...rest }: PrivateProps) => {

    const TOKEN = localStorage.getItem('token');

    if (!TOKEN) {
        alert('Please login to continue');
        return <Redirect to="/login" />
    } else {
        return <Route {...rest}>{children}</Route>
    }
}

interface PrivateProps {
    path: string,
    exact?: boolean,
    children: React.ReactNode
}
export default Private;
