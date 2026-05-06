import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ProfileContext } from '../contexts/UserContext';
import SignupForm from '../components/auth/SignupForm';
import Background from '../components/public/Background';
import Navbar from '../components/public/Navbar';

const Signup = () => {
    const { user } = useContext(ProfileContext)

    if (user) return <Navigate replace to="/" />
    return (
        <Background footer={false}>
            <Navbar logoVisiblity={false} />
            <SignupForm />
        </Background>
    );
};

export default Signup;