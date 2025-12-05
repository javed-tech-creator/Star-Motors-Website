import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Home,
  ChevronRight,
  MessageSquare,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactUsPage = () => {
  const BACKEND_URL =
    import.meta.env.VITE_BACKEND_URL ??
    "https://dss-web-backend.onrender.com/api/v1";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
     requirements: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // Animations
  useEffect(() => {
    gsap.fromTo(
      ".hero-animate",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
    );

    gsap.fromTo(
      ".animate-up",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".content-container", start: "top 85%" },
      }
    );
  }, []);

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
      action: "https://goo.gl/maps/YOUR_MAP_LINK",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91-9956877786"],
      gradient: "from-blue-500 to-indigo-600",
      action: "tel:9956877786",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@starmotor.co.in"],
      gradient: "from-purple-500 to-violet-600",
      action: "mailto:info@starmotor.co.in",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 5:00 PM"],
      gradient: "from-orange-500 to-amber-600",
    },
  ];


  // Field Validation
const validateField = (name, value) => {
  value = value.trim(); // remove leading/trailing spaces

  // Name Validation
  if (name === "name") {
    if (!value) return "Name is required";
    if (!/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(value))
      return "Only alphabets & single spaces allowed";
    if (value.length < 3) return "Name is too short";
  }

  // Email Validation
  if (name === "email") {
    if (!value) return "Email is required";
    if (/\s/.test(value)) return "Email cannot contain spaces";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Invalid email format";
  }

  // Phone Validation
  if (name === "phone") {
    if (!value) return "Phone number is required";
    if (!/^\d+$/.test(value)) return "Only digits allowed";
    if (!/^[6-9]\d{9}$/.test(value))
      return "Phone must be 10 digits & start with 6-9";
  }

  // Message Validation
  if (name === "message") {
    if (!value) return "Message is required";
    if (value.length < 10) return "Message must be at least 10 characters";
    if (/[\u{1F600}-\u{1F64F}]/u.test(value)) return "Emojis are not allowed";
  }

  // Requirements Validation
if (name === "requirements") {
  if (!value) return "Requirements is required";
  if (value.length < 5) return "Minimum 5 characters required";
  if (value.length > 100) return "Maximum 100 characters allowed";
  if (!/^[A-Za-z0-9 ,.-]+$/.test(value))
    return "Only letters, numbers, spaces, comma, dot, hyphen allowed";
}


  return "";
};

// FORM VALIDATION WRAPPER
const validateForm = () => {
  const newErrors = {};
  Object.keys(formData).forEach((key) => {
    const err = validateField(key, formData[key]);
    if (err) newErrors[key] = err;
  });

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

// INPUT HANDLER
const handleInputChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({ ...prev, [name]: value }));

  // real-time validation
  setErrors((prev) => ({
    ...prev,
    [name]: validateField(name, value),
  }));
};

  // Submit handler
  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await axios.post(`${BACKEND_URL}/inquiry`, formData);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

return (
  <div className="relative min-h-screen bg-[#111111] text-white">

    {/* Hero Section */}
    <div className="pt-12 pb-12 px-6 lg:px-20">
      <div className="text-center mb-6">
        <h1 className="hero-animate text-4xl md:text-6xl font-black mb-2">
          Get In <span className="text-orange-500">Touch</span> With Us
        </h1>
        <p className="hero-animate text-gray-400 max-w-2xl mx-auto text-lg">
          Have a project in mind? Let's build something amazing.
        </p>
      </div>

      <div className="flex justify-center mb-6">
        <nav className="hero-animate inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400">
          <Link to="/" className="hover:text-orange-400 flex items-center gap-1">
            <Home className="w-3.5 h-3.5" /> Home
          </Link>
          <ChevronRight className="w-3 h-3 text-gray-600" />
          <span className="text-white font-medium">Contact Us</span>
        </nav>
      </div>

      {/* NEW GRID LAYOUT */}
      <div className="content-container grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Top Cards → 4 columns on large */}
        <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-up">
          {contactInfo.map((info, idx) => (
            <div
              key={idx}
              className="bg-white/3 border border-white/10 rounded-2xl p-6 text-center flex flex-col items-center"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-linear-to-br ${info.gradient} flex items-center justify-center mb-4`}
              >
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {info.title}
              </h3>
              <div className="space-y-1">
                {info.details.map((line, i) => (
                  <p key={i} className="text-gray-400 text-sm">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Map → lg:6 */}
        <div className="lg:col-span-6 animate-up">
          <div className="rounded-2xl h-full min-h-96">
            <iframe
              src="https://maps.google.com/maps?q=Digital%20Signage%20Solutions%20Lucknow&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "12px" }}
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        {/* Form → lg:6 */}
        <div className="lg:col-span-6 animate-up">
          <div className="bg-white/3 border border-white/10 rounded-3xl p-8 shadow-xl">

            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-orange-500/20 text-orange-400 rounded-xl">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Send Us Message</h2>
            </div>

            <div className="space-y-6">

              {/* 2 Columns Row — NAME + EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="text-sm text-gray-400 mb-1 block">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full bg-black/20 border rounded-xl pl-10 pr-4 py-3 text-white ${
                        errors.name ? "border-red-500" : "border-white/10"
                      }`}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm text-gray-400 mb-1 block">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 w-4 h-4 text-gray-500" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-black/20 border rounded-xl pl-10 pr-4 py-3 text-white ${
                        errors.email ? "border-red-500" : "border-white/10"
                      }`}
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                </div>
              </div>

              {/* 2nd Row → PHONE + REQUIREMENTS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* PHONE */}
                <div>
                  <label className="text-sm text-gray-400 mb-1 block">Phone *</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-3.5 w-4 h-4 text-gray-500" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full bg-black/20 border rounded-xl pl-10 pr-4 py-3 text-white ${
                        errors.phone ? "border-red-500" : "border-white/10"
                      }`}
                      placeholder="+91 9956877786"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                </div>

                {/* ➕ NEW FIELD — REQUIREMENTS */}
                <div>
                  <label className="text-sm text-gray-400 mb-1 block">Requirements *</label>
                  <input
                    type="text"
                    name="requirements"
                    value={formData.requirements ?? ""}
                    onChange={handleInputChange}
                    className={`w-full bg-black/20 border rounded-xl px-4 py-3 text-white ${
                      errors.requirements ? "border-red-500" : "border-white/10"
                    }`}
                    placeholder="Service, Wash, Painting..."
                  />
                  {errors.requirements && (
                    <p className="text-red-500 text-xs">{errors.requirements}</p>
                  )}
                </div>

              </div>

              {/* MESSAGE FULL WIDTH */}
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full bg-black/20 border rounded-xl px-4 py-3 text-white resize-none ${
                    errors.message ? "border-red-500" : "border-white/10"
                  }`}
                  placeholder="Tell us about your service..."
                />
                {errors.message && (
                  <p className="text-red-500 text-xs">{errors.message}</p>
                )}
              </div>

              {/* SUBMIT BUTTON */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full py-4 bg-orange-500 hover:bg-orange-600 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin h-5 w-5 border-2 border-white/30 border-t-white rounded-full"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Send Message
                  </>
                )}
              </button>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

};

export default ContactUsPage;
