import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ProfileContext } from '../contexts/UserContext';
import LoginForm from '../components/auth/LoginForm';
import Background from '../components/public/Background';
import Navbar from '../components/public/Navbar';

const Login = () => {
    const { user } = useContext(ProfileContext)
    if (user) return <Navigate replace to="/" />
    return (
        <Background footer={false}>
            <Navbar logoVisiblity={false} />
            <LoginForm />
        </Background>
    );
};

export default Login;