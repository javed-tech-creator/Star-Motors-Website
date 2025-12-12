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
import { toast } from "react-toastify";

gsap.registerPlugin(ScrollTrigger);

const ContactUsPage = () => {
  const BACKEND_URL =
    import.meta.env.VITE_BACKEND_URL ??
    "https://star-motors-website.onrender.com/api/v1";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    requirement: "",
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
      hrf: "https://maps.app.goo.gl/ESNDgU14qmkLtfou8",
      details: [
        "Bharat Gas Plant, Opp. HP Petrol Pump Misripur, Kursi Rd. Lucknow 226026",
      ],
      gradient: "from-orange-500 to-orange-600",
      action: "https://goo.gl/maps/YOUR_MAP_LINK",
    },
    {
      icon: Phone,
      hrf: "tel:9956877786",
      title: "Call Us",
      details: ["+91 99568 77786", "+91 90261 19669", "+91 85450 45881"],
      gradient: "from-blue-500 to-indigo-600",
      action: "tel:+919956877786",
    },
    {
      icon: Mail,
      hrf: "mailto:starmotorslucknow@gmail.com",
      title: "Email Us",
      details: ["starmotorslucknow@gmail.com"],
      gradient: "from-purple-500 to-violet-600",
      action: "mailto:starmotorslucknow@gmail.com",
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

    // Requirement Validation
    if (name === "requirement") {
      if (!value) return "Requirement is required";
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

  // Submit handler (Fully Fixed)
  const handleSubmit = async () => {
    // Stop if validation fails
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(`${BACKEND_URL}/inquiry`, formData);

      // SUCCESS
      setSubmitStatus("success");

      // Reset fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        requirement: "",
      });

      // Show Success Toast
      toast.success("Inquiry submitted successfully!", {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (err) {
      // ERROR
      setSubmitStatus("error");

      toast.error(
        err?.response?.data?.message ||
          "Something went wrong! Please try again.",
        {
          position: "top-right",
          autoClose: 3000,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#111111] text-white">
      {/* Hero Section */}
      <div className="pt-12 pb-12 px-6 lg:px-20">
        <div className="text-center mb-6">
          <h1 className="hero-animate text-2xl md:text-3xl lg:text-4xl font-black mb-3">
            Get In <span className="text-orange-500">Touch</span> With Us
          </h1>
                  <div className="h-1 w-32 bg-[#ff6b35] mx-auto"></div>

        </div>

        <div className="flex justify-center mb-6">
          <nav className="hero-animate inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400">
            <Link
              to="/"
              className="hover:text-orange-400 flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <span className="text-white font-medium">Contact Us</span>
          </nav>
        </div>

        {/* NEW GRID LAYOUT */}
        <div className="content-container grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Top Cards → 4 columns on large */}
          <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-up">
            {contactInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.hrf || ""}
                target="_blank"
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
                  {info.details.map((line, i) =>
                    info.title === "Call Us" ? (
                      <a
                        key={i}
                         href={`tel:${line.replace(/^\+91/, "").replace(/[^0-9]/g, "")}`}
                        className="text-gray-300 text-sm hover:text-orange-400 transition"
                      >
                        {line} <br />
                      </a>
                    ) : (
                      <p key={i} className="text-gray-400 hover:text-orange-400 text-sm">
                        {line}
                      </p>
                    )
                  )}
                </div>
              </a>
            ))}
          </div>

          {/* Map → lg:6 */}
          <div className="lg:col-span-6 animate-up">
            <div className="rounded-2xl h-full min-h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56911.07434078029!2d80.90426494863281!3d26.9370485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957b5e7d0468b%3A0xdc8a1fac896cec9d!2sStar%20Motors%20%E2%80%93%20Car%20Service%2C%20Repair%20%26%20Foam%20Wash%20Center%20Lucknow!5e0!3m2!1sen!2sin!4v1765450867551!5m2!1sen!2sin"
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
                <h2 className="text-2xl font-bold text-white">
                  Send Us Message
                </h2>
              </div>

              <div className="space-y-6">
                {/* 2 Columns Row — NAME + EMAIL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="text-sm text-gray-400 mb-1 block">
                      Full Name *
                    </label>
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
                    {errors.name && (
                      <p className="text-red-500 text-xs">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-sm text-gray-400 mb-1 block">
                      Email *
                    </label>
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
                    {errors.email && (
                      <p className="text-red-500 text-xs">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* 2nd Row → PHONE + REQUIREMENT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* PHONE */}
                  <div>
                    <label className="text-sm text-gray-400 mb-1 block">
                      Phone *
                    </label>
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
                    {errors.phone && (
                      <p className="text-red-500 text-xs">{errors.phone}</p>
                    )}
                  </div>

                  {/* ➕ NEW FIELD — REQUIREMENT */}
                  <div>
                    <label className="text-sm text-gray-400 mb-1 block">
                      Requirement *
                    </label>
                    <input
                      type="text"
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleInputChange}
                      className={`w-full bg-black/20 border rounded-xl px-4 py-3 text-white ${
                        errors.requirement
                          ? "border-red-500"
                          : "border-white/10"
                      }`}
                      placeholder="Service, Wash, Painting..."
                    />

                    {errors.requirement && (
                      <p className="text-red-500 text-xs">
                        {errors.requirement}
                      </p>
                    )}
                  </div>
                </div>

                {/* MESSAGE FULL WIDTH */}
                <div>
                  <label className="text-sm text-gray-400 mb-1 block">
                    Message *
                  </label>
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
