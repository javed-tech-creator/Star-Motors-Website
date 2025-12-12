import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
// import ForgotPassword from "./ForgotPassword";
import logo from "../assets/Logo.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../api/auth.api";
import { useAuth } from "../store/AuthContext";
import { toast } from "react-toastify";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [openForgot, setOpenForgot] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const validateInputs = () => {
    let isValid = true;

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    if (!password || password.length < 6) {
      setPasswordError(true);
      isValid = false;
    } else {
      setPasswordError(false);
    }

    return isValid;
  };

  const [login, { isLoading, error }] = useLoginMutation();
  const { setUserData } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateInputs()) return;
    const formData = { email, password };
    console.log(formData)
    try {
      const res = await login({ formData }).unwrap();
      setUserData(res?.data);
      console.log(res?.data);
      localStorage.setItem("userData", JSON.stringify(res?.data));
      toast.success("Login successful!");
      navigate(`/dashboard`);
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Login failed:", err);
      toast.error(
        err?.data?.message || "Login failed. Please check your credentials."
      );
    }
  };
  const handleForgotPassword = () => {
    console.log("Reset email:", resetEmail);
    setOpenForgot(false);
    setResetEmail("");
  };

  return (
// {/* <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 "> */}
  
  <div className="w-full max-w-md bg-black/90 rounded-2xl shadow-lg border border-gray-200 p-8 sm:p-10">
    <div className="flex flex-col items-center mb-6">
      <img src={logo} alt="Logo" className="h-24 w-auto mb-2" />
      <h2 className="text-2xl font-bold text-white">Sign In</h2>
   
    </div>

    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-white mb-1"
        >
          Email / UserId
        </label>
        <input
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className={`w-full px-4 py-3 border rounded-xl shadow-sm placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all ${
            emailError
              ? "border-red-300 focus:ring-red-500 focus:border-red-500"
              : "border-gray-300"
          }`}
        />
        {emailError && (
          <p className="mt-1 text-sm text-red-600">Invalid email address</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-white mb-1"
        >
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className={`w-full px-4 py-3 pr-12 border rounded-xl shadow-sm placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all ${
              passwordError
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300"
            }`}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            )}
          </button>
        </div>
        {passwordError && (
          <p className="mt-1 text-sm text-red-600">
            Password must be at least 6 characters
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-3 rounded-xl text-white font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 transition-all ${
          isLoading
            ? "bg-orange-300 cursor-not-allowed"
            : "bg-orange-500 hover:bg-orange-600"
        }`}
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
        ) : (
          "Sign In"
        )}
      </button>
    </form>
  </div>
// </div>

  );
}
