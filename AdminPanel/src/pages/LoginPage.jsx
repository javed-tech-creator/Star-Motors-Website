import React from 'react'
import Login from '../components/LoginForm'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useAuth } from '../store/AuthContext';

function LoginPage() {

    const { userData } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData?.user?.email) {
      navigate("/dashboard"); // Already logged in → redirect
    }
  }, [userData, navigate]);

  return (
    <div className='bg-gray-50 flex h-screen w-screen justify-center items-center'>
    <Login/>
    </div>
  )
}

export default LoginPage