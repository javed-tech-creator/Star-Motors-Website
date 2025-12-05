import React from "react";
import {
  Wrench,
  Droplets,
  Sparkles,
  Car,
  Settings,
  Target,
  Scale,
  ShoppingCart,
  Text,
  ChartArea,
  MessageCircleMore,
  Home,
  ChevronRight,
} from "lucide-react";
import { useParams, Link } from "react-router-dom";

// Services Data - Yahan se apni details daalna
const servicesData = {
  service1: {
    title: "CAR SERVICE/REPARING",
    icon: Wrench,
    heroImage:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200",
    description:
      "Complete car service and repair solutions with certified mechanics and genuine parts.",
    features: [
      "Regular Service & Maintenance",
      "Engine Diagnostics & Repair",
      "Brake System Service",
      "AC Service & Repair",
    ],
    pricing: [
      {
        name: "Basic Service",
        price: "₹2,499",
        features: ["Oil Change", "Filter Replacement"],
      },
      {
        name: "Standard Service",
        price: "₹4,999",
        features: ["Complete Service", "AC Check"],
      },
      {
        name: "Premium Service",
        price: "₹7,999",
        features: ["Full Service", "Diagnostics"],
      },
    ],
  },
  service2: {
    title: "CAR, BIKE FOAM WASH",
    icon: Droplets,
    heroImage:
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1200",
    description:
      "Premium foam wash service using pH-balanced foam for gentle yet effective cleaning.",
    features: [
      "Premium Foam Formula",
      "Soft Brush Cleaning",
      "Wheel & Tire Clean",
      "Wax Polish",
    ],
    pricing: [
      {
        name: "Basic Wash",
        price: "₹299",
        features: ["Foam Wash", "Tire Clean"],
      },
      {
        name: "Premium Wash",
        price: "₹599",
        features: ["Foam Wash", "Wax Polish"],
      },
      {
        name: "Deluxe Wash",
        price: "₹999",
        features: ["Complete Detailing", "Ceramic Coat"],
      },
    ],
  },
  single1: {
    title: "INTERIOR CLEANING",
    icon: Sparkles,
    heroImage:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1920&q=80",
    description:
      "Deep interior cleaning and detailing to restore showroom condition.",
    features: [
      "Complete Vacuum",
      "Seat Shampooing",
      "Dashboard Polish",
      "Odor Elimination",
    ],
    pricing: [
      {
        name: "Basic Interior",
        price: "₹799",
        features: ["Vacuum Clean", "Dashboard Polish"],
      },
      {
        name: "Deep Clean",
        price: "₹1,499",
        features: ["Seat Shampoo", "Carpet Clean"],
      },
      {
        name: "Premium Detail",
        price: "₹2,999",
        features: ["Full Detail", "Sanitization"],
      },
    ],
  },
  single2: {
    title: "DENTING PAINTING",
    icon: Car,
    heroImage:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=80",
    description:
      "Expert denting and painting services with perfect color matching.",
    features: [
      "Dent Removal",
      "Panel Beating",
      "Color Matching",
      "Premium Paint",
    ],
    pricing: [
      {
        name: "Minor Dent",
        price: "₹1,999",
        features: ["Dent Repair", "Touch-up"],
      },
      {
        name: "Panel Repair",
        price: "₹4,999",
        features: ["Full Panel", "Paint Match"],
      },
      {
        name: "Full Body",
        price: "₹25,999",
        features: ["Complete Body", "Premium Paint"],
      },
    ],
  },
  single3: {
    title: "CAR MODIFICATION",
    icon: Settings,
    heroImage:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200",
    description: "Custom modifications to make your vehicle unique.",
    features: [
      "Body Kit Installation",
      "Performance Exhaust",
      "LED Lighting",
      "Alloy Wheels",
    ],
    pricing: [
      {
        name: "Basic Mods",
        price: "₹9,999",
        features: ["LED Lights", "Badges"],
      },
      {
        name: "Performance",
        price: "₹29,999",
        features: ["Exhaust", "Suspension"],
      },
      {
        name: "Full Custom",
        price: "₹99,999",
        features: ["Complete", "Body Kit"],
      },
    ],
  },
  single4: {
    title: "WHEEL ALIGNMENT",
    icon: Target,
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",
    description: "Computerized wheel alignment for better handling.",
    features: [
      "Computerized Alignment",
      "3D Wheel Scan",
      "Camber Adjustment",
      "Test Drive",
    ],
    pricing: [
      {
        name: "Front Alignment",
        price: "₹699",
        features: ["Front Wheels", "Report"],
      },
      {
        name: "4-Wheel",
        price: "₹1,299",
        features: ["All Wheels", "Test Drive"],
      },
      { name: "Premium", price: "₹1,999", features: ["3D Scan", "Warranty"] },
    ],
  },
  single5: {
    title: "WHEEL BALANCING",
    icon: Scale,
    heroImage:
      "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=1200",
    description: "Precision wheel balancing for smooth driving.",
    features: [
      "Electronic Balancing",
      "Dynamic Balance",
      "Weight Application",
      "Vibration Test",
    ],
    pricing: [
      { name: "Basic", price: "₹399", features: ["4 Wheels", "Weights"] },
      {
        name: "Premium",
        price: "₹699",
        features: ["Electronic", "Test Drive"],
      },
      { name: "Complete", price: "₹999", features: ["Full Service", "Report"] },
    ],
  },
  single6: {
    title: "TYRE WITH TYRE CHANGING",
    icon: ShoppingCart,
    heroImage:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200",
    description: "Premium tyres with expert installation service.",
    features: [
      "All Major Brands",
      "Expert Fitting",
      "Balancing",
      "Nitrogen Filling",
    ],
    pricing: [
      {
        name: "Budget",
        price: "₹2,499",
        features: ["Economy Brand", "Installation"],
      },
      {
        name: "Premium",
        price: "₹4,999",
        features: ["Top Brand", "Alignment"],
      },
      {
        name: "Performance",
        price: "₹8,999",
        features: ["Premium Brand", "Nitrogen"],
      },
    ],
  },
};

// Service Detail Page Component
export default function ServicePage() {
  // Params se service nikalo - tumhara actual code me useParams() use karna
  const { serviceId } = useParams();
  console.log("serviceId", serviceId);

  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-2xl">Service not found</h1>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-[#111111] text-white font-chakra">
      {/* Hero Section */}
      <div className="relative h-76 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <Icon className="w-16 h-16 text-[#ff6b35] mb-2" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            {service.title}
          </h1>
          <p className="text-xl text-white max-w-2xl">{service.description}</p>
          <nav className="hero-animate inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-400 hover:border-white/20 transition-all  font-chakra mt-3">
                        <Link
                          to="/"
                          className="hover:text-orange-400 flex items-center gap-1 transition-colors"
                        >
                          <Home className="w-3.5 h-3.5" /> Home
                        </Link>
                        <ChevronRight className="w-3 h-3 text-gray-600" />
                        <span className="text-white font-medium font-chakra">Services</span>
                      </nav>
        </div>
      </div>

      <div className=" py-10 px-6 lg:px-20">
        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5 font-chakra">
            Our <span className="text-[#ff6b35]">Services</span>
          </h2>
          <div className="flex items-center justify-center mb-10">
            <div className="h-px w-12  bg-linear-to-r from-transparent via-orange-500 to-transparent"></div>
            <div className="mx-3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="h-px w-12  bg-linear-to-r from-transparent via-orange-500 to-transparent"></div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="
          group
           bg-linear-to-br from-[#121212] to-[#0a0a0a]
          border border-gray-800
          rounded-xl
          p-5
          shadow-lg
          hover:shadow-[#ff6b35]/30 
          hover:border-[#ff6b35]
          transition-all duration-300
          flex items-center justify-center
          text-center
        "
              >
                <p className="text-gray-300 group-hover:text-white text-lg font-medium transition-all">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>


        {/* Highlights / Key Benefits */}
        <div className="mb-15">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 font-chakra">
            Why Choose <span className="text-[#ff6b35]">Us?</span>
          </h2>

          <div className="flex items-center justify-center mb-10">
            <div className="h-px w-12  bg-linear-to-r from-transparent via-orange-500 to-transparent"></div>
            <div className="mx-3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="h-px w-12  bg-linear-to-r from-transparent via-orange-500 to-transparent"></div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                text: "Certified & Experienced Technicians",
                icon: "👨‍🔧",
              },
              {
                text: "Genuine OEM Parts Guarantee",
                icon: "🛠️",
              },
              {
                text: "Modern Tools & Diagnostic Machines",
                icon: "🔧",
              },
              {
                text: "Customer Satisfaction Priority",
                icon: "⭐",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
          group
           bg-linear-to-br from-[#111] to-[#0c0c0c]
          border border-gray-800
          rounded-2xl
          p-6
          shadow-xl
          transition-all
          duration-300
          hover:border-[#ff6b35]
          hover:shadow-[#ff6b35]/40
          hover:-translate-y-2
          text-center
        "
              >
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                {/* Text */}
                <p className="text-gray-300 text-lg font-medium group-hover:text-white transition">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-5">
            Service <span className="text-[#ff6b35]">Gallery</span>
          </h2>

          <div className="flex items-center justify-center mb-10">
            <div className="h-px w-12  bg-linear-to-r from-transparent via-orange-500 to-transparent"></div>
            <div className="mx-3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="h-px w-12  bg-linear-to-r from-transparent via-orange-500 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((img) => (
              <div
                key={img}
                className="h-56 rounded-xl overflow-hidden border border-gray-800 hover:border-[#ff6b35] transition-all"
              >
                <img
                  src={service.heroImage}
                  className="w-full h-full object-cover"
                  alt="Service Preview"
                />
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-5">
            Frequently <span className="text-[#ff6b35]">Asked</span> Questions
          </h2>

          <div className="flex items-center justify-center mb-10">
            <div className="h-px w-12  bg-linear-to-r from-transparent via-orange-500 to-transparent"></div>
            <div className="mx-3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="h-px w-12  bg-linear-to-r from-transparent via-orange-500 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {[
    {
      q: "How long does this service take?",
      a: "Usually between 1-3 hours depending on the selected service plan.",
    },
    {
      q: "Do you provide warranty?",
      a: "Yes, we provide up to 30 days of service warranty.",
    },
    {
      q: "Are spare parts genuine?",
      a: "Yes, 100% OEM and genuine parts are used.",
    },
    {
      q: "Can I get same-day service?",
      a: "Yes, same-day service is available for most categories.",
    },
  ].map((faq, i) => (
    <div
      key={i}
      className="bg-[#0f0f0f] p-6 rounded-xl border border-gray-800 hover:border-[#ff6b35] transition-all h-full"
    >
      <p className="text-lg font-semibold mb-2">{faq.q}</p>
      <p className="text-gray-400">{faq.a}</p>
    </div>
  ))}
</div>

        </div>

        {/* Call To Action */}
        <div className=" border border-gray-800 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Enquiry Your <span className="text-orange-500">Service</span> Now
          </h2>
          <p className="text-gray-100 mb-8 text-lg">
            Quick response & guaranteed support
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Call Button */}
            <a
              href="tel:9956877786"
              className="
    group
    relative
    overflow-hidden
    flex
    gap-2
    text-white
    text-[14px]
    font-semibold
    px-7
    py-1.5
    uppercase
    tracking-tight
    items-center
    border-2 border-[#ff6b35]
    transition-all duration-300
    hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]
  "
            >
              {/* Background hover fill animation */}
              <span
                className="
      absolute inset-0 bg-[#ff6b35]
      scale-x-0 origin-center
      transition-transform duration-300 ease-out
      group-hover:scale-x-100
      z-0
    "
              ></span>

              {/* Icon + text (stay on top of background) */}
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 group-hover:rotate-12 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h2l2 5-1.5 1.5a11.1 11.1 0 005 5L14 14l5 2v2a2 2 0 01-2 2h-1C9.82 20 4 14.18 4 7V6a2 2 0 012-2z"
                  />
                </svg>
                Call Now
              </span>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/9956877786"
              target="_blank"
              rel="noopener noreferrer"
              className="
    group
    relative
    overflow-hidden
    flex
    gap-2
    text-white
    text-[14px]
    font-semibold
    px-7
    py-1.5
    uppercase
    tracking-tight
    items-center
    border-2 border-[#ff6b35]
    transition-all duration-300
    hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]
  "
            >
              {/* Background Fill Animation */}
              <span
                className="
      absolute inset-0 bg-[#ff6b35]
      scale-x-0 origin-center
      transition-transform duration-300 ease-out
      group-hover:scale-x-100
      z-0
    "
              ></span>

              {/* Text + Icon should stay above background */}
              <span className="relative z-10 flex items-center gap-2">
                <MessageCircleMore className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                WhatsApp
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
