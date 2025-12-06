import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../store/AuthContext";

const ProtectedRoute = () => {
  const { userData } = useAuth();

  // Agar userData nahi hai, login page par redirect
  if (!userData?.user?.email) {
    return <Navigate to="/" replace />;
  }

  // Agar login hai, children routes ko allow
  return <Outlet />;
};

export default ProtectedRoute;
