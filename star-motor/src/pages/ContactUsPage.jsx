import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Upload,
  X,
  MessageSquare,
  User,
  Building,
  Home,
  ChevronRight,
  Sparkles,
  Paperclip,
} from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP
gsap.registerPlugin(ScrollTrigger);

const ContactUsPage = () => {
  const BACKEND_URL =
    import.meta.env.VITE_BACKEND_URL ??
    "https://dss-web-backend.onrender.com/api/v1";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    requirement: "",
    sitePhoto: [],
    message: "",
    agreed: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // --- Mouse Position Logic ---
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // --- Animations ---
  useEffect(() => {
    // Hero Animation
    gsap.fromTo(
      ".hero-animate",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
    );

    // Section Animation
    gsap.fromTo(
      ".animate-up",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".content-container",
          start: "top 85%",
        },
      }
    );
  }, []);

  const requirements = [
    "Outdoor Signage",
    "Indoor Signage",
    "High Rise Signage",
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: [
        "Star Motors Services",
        "Chinhat Tiraha, Faizabad Road",
        "Lucknow-226028",
      ],
      gradient: "from-orange-500 to-orange-600",
      action: "https://goo.gl/maps/YOUR_MAP_LINK", // Replace with actual link
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91-6386901011"],
      gradient: "from-blue-500 to-indigo-600",
      action: "tel:6386901011",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@starmotor.co.in", "sales@motor.co.in"],
      gradient: "from-purple-500 to-violet-600",
      action: "mailto:info@motor.co.in",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 5:00 PM"],
      gradient: "from-orange-500 to-amber-600",
      action: null,
    },
  ];

  // --- Handlers & Validation Logic (Kept mostly same, styled differently) ---
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, newValue) }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "application/pdf",
    ];
    let error = "";

    for (let file of files) {
      if (file.size > 5 * 1024 * 1024) {
        error = "Each file must be less than 5MB";
        break;
      }
      if (!allowedTypes.includes(file.type)) {
        error = "Only JPG, PNG, WEBP and PDF files are allowed";
        break;
      }
    }

    if (error) {
      setErrors((prev) => ({ ...prev, sitePhoto: error }));
      e.target.value = "";
      return;
    }

    setFormData((prev) => ({
      ...prev,
      sitePhoto: [...prev.sitePhoto, ...files],
    }));
    setErrors((prev) => ({ ...prev, sitePhoto: null }));
  };

  const removeFile = (indexToRemove) => {
    setFormData((prev) => ({
      ...prev,
      sitePhoto: prev.sitePhoto.filter((_, index) => index !== indexToRemove),
    }));
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) error = "Full name is required";
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Invalid email";
        break;
      case "phone":
        if (!/^[6-9]\d{9}$/.test(value.replace(/\s/g, "")))
          error = "Invalid phone number";
        break;
      case "companyName":
        if (!value.trim()) error = "Company name required";
        break;
      case "requirement":
        if (!value) error = "Select a requirement";
        break;
      case "message":
        if (value.trim().length < 10) error = "Message too short";
        break;
      case "agreed":
        if (!value) error = "Agreement required";
        break;
      default:
        break;
    }
    return error;
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== "sitePhoto") {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const submitData = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key !== "sitePhoto" && formData[key]) {
          submitData.append(key, formData[key]);
        }
      });
      if (formData.sitePhoto.length > 0) {
        formData.sitePhoto.forEach((file) =>
          submitData.append("sitePhoto", file)
        );
      }

      await axios.post(`${BACKEND_URL}/inquiry`, submitData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        requirement: "",
        sitePhoto: [],
        message: "",
        agreed: false,
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#111111] overflow-hidden text-white selection:bg-orange-500/30 font-chakra">

     <div className="relative z-10 pt-12 pb-12 lg:pt-10 lg:pb-12">
        <div className="px-6 lg:px-20">
          {/* Breadcrumb */}
      

          {/* Hero Section */}
          <div className="text-center mb-6">
            <h1 className="hero-animate text-4xl md:text-6xl font-black mb-2 leading-tight">
              <span className=" text-white ">
                Get In <span className="text-orange-500"> Touch</span> With <span className="text-orange-500"> Us</span>
              </span>
            </h1>
            <p className="hero-animate text-gray-400 max-w-2xl mx-auto text-lg">
              Have a project in mind? Let's collaborate to create something
              extraordinary.
            </p>
          </div>
              <div className="flex justify-center mb-15">
            <nav className="hero-animate inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-400 hover:border-white/20 transition-all">
              <Link
                to="/"
                className="hover:text-orange-400 flex items-center gap-1 transition-colors"
              >
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
              <ChevronRight className="w-3 h-3 text-gray-600" />
              <span className="text-white font-medium">Contact Us</span>
            </nav>
          </div>

          <div className="content-container grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* --- Left Column: Contact Info --- */}
            <div className=" animate-up flex flex-col gap-6">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white/3 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 text-center flex flex-col justify-center items-center"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${info.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((line, i) => (
                      <p key={i} className="text-gray-400 text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                  {info.action && (
                    <a
                      href={info.action}
                      className="absolute inset-0"
                      aria-label={info.title}
                    />
                  )}
                </div>
              ))}

        
            </div>

            {/* --- Right Column: Contact Form --- */}
            <div className="lg:col-span-3 animate-up">
              <div className="bg-white/3 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-orange-500/20 text-orange-400 rounded-xl">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Send us a Message
                  </h2>
                </div>

                <div className="space-y-6">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-3.5 w-4 h-4 text-gray-500" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full bg-black/20 border rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-500/50 transition-all ${
                            errors.name
                              ? "border-red-500/50"
                              : "border-white/10"
                          }`}
                          placeholder="John Doe"
                        />
                      </div>
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Company Name *
                      </label>
                      <div className="relative">
                        <Building className="absolute left-4 top-3.5 w-4 h-4 text-gray-500" />
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className={`w-full bg-black/20 border rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-500/50 transition-all ${
                            errors.companyName
                              ? "border-red-500/50"
                              : "border-white/10"
                          }`}
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      {errors.companyName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.companyName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-3.5 w-4 h-4 text-gray-500" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full bg-black/20 border rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-500/50 transition-all ${
                            errors.email
                              ? "border-red-500/50"
                              : "border-white/10"
                          }`}
                          placeholder="john@example.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-3.5 w-4 h-4 text-gray-500" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full bg-black/20 border rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-500/50 transition-all ${
                            errors.phone
                              ? "border-red-500/50"
                              : "border-white/10"
                          }`}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Requirement Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Requirement *
                    </label>
                    <select
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleInputChange}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-gray-900">
                        Select a service...
                      </option>
                      {requirements.map((req, index) => (
                        <option key={index} value={req} className="bg-gray-900">
                          {req}
                        </option>
                      ))}
                    </select>
                    {errors.requirement && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.requirement}
                      </p>
                    )}

                    {/* Diagram Prompt: Helpful for users choosing complex requirements */}
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Site Photos (Optional)
                    </label>
                    <div className="border-2 border-dashed border-white/10 rounded-xl p-6 text-center hover:border-orange-500/30 hover:bg-white/2 transition-all group cursor-pointer relative">
                      <input
                        type="file"
                        multiple
                        accept=".jpg,.jpeg,.png,.webp,.pdf"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="flex flex-col items-center">
                        <div className="p-3 bg-white/5 rounded-full mb-3 group-hover:bg-orange-500/10 transition-colors">
                          <Upload className="w-6 h-6 text-gray-400 group-hover:text-orange-400" />
                        </div>
                        <p className="text-sm text-gray-300">
                          <span className="text-orange-400 font-medium">
                            Click to upload
                          </span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Images or PDF up to 5MB
                        </p>
                      </div>
                    </div>

                    {/* File List */}
                    {formData.sitePhoto.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {formData.sitePhoto.map((file, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2 border border-white/5"
                          >
                            <div className="flex items-center gap-2 overflow-hidden">
                              <Paperclip className="w-4 h-4 text-orange-400 shrink-0" />
                              <span className="text-sm text-gray-300 truncate">
                                {file.name}
                              </span>
                            </div>
                            <button
                              onClick={() => removeFile(idx)}
                              className="p-1 hover:bg-white/10 rounded-full text-gray-500 hover:text-red-400 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                    {errors.sitePhoto && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.sitePhoto}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full bg-black/20 border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-500/50 transition-all resize-none ${
                        errors.message ? "border-red-500/50" : "border-white/10"
                      }`}
                      placeholder="Tell us about your project requirements..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Agreement */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="agreed"
                      checked={formData.agreed}
                      onChange={handleInputChange}
                      id="agreed"
                      className="mt-1 w-4 h-4 rounded border-gray-600 text-orange-500 focus:ring-orange-500 focus:ring-offset-gray-900 bg-gray-800"
                    />
                    <label
                      htmlFor="agreed"
                      className="text-sm text-gray-400 cursor-pointer select-none"
                    >
                      I agree to the terms & conditions. I consent to being
                      contacted by Digital Signage Solutions regarding my
                      inquiry.
                    </label>
                  </div>
                  {errors.agreed && (
                    <p className="text-red-500 text-xs">{errors.agreed}</p>
                  )}

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg bg-orange-500 hover:bg-orange-600 hover:shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/20 border-t-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" /> Send Message
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 p-4 rounded-xl text-orange-400">
                      <CheckCircle className="w-5 h-5" />
                      <span>
                        Message sent successfully! We'll allow 24 hours for a
                        response.
                      </span>
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-red-400">
                      <AlertCircle className="w-5 h-5" />
                      <span>Something went wrong. Please try again later.</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Container */}
              <div className=" rounded-2xl p-2 h-96 shadow-inner px-6 lg:px-20 mb-10">
                <iframe
                  src="https://maps.google.com/maps?q=Digital%20Signage%20Solutions%20Lucknow&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    borderRadius: "12px",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>

      <style>{`
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-move 5s ease infinite; }
        @keyframes gradient-move { 0% { background-position: 0% 50% } 50% { background-position: 100% 50% } 100% { background-position: 0% 50% } }
      `}</style>
    </div>
  );
};

export default ContactUsPage;
