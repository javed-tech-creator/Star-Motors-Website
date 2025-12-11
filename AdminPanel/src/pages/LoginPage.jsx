import React from 'react'
import Login from '../components/LoginForm'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useAuth } from '../store/AuthContext';
import bgImg from "../assets/login.jpg"
function LoginPage() {

    const { userData } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData?.user?.email) {
      navigate("/dashboard"); // Already logged in → redirect
    }
  }, [userData, navigate]);

  return (
   <div
  className="h-screen w-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${bgImg})`,
  }}
>
    <Login/>
    </div>
  )
}

export default LoginPage