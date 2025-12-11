import React from "react";
import {
  Wrench,
  Shield,
  Clock,
  ThumbsUp,
  Target,
  Lightbulb,
  Heart,
  TrendingUp,
  CheckCircle,
  Star,
  Home,
  ChevronRight,
  MessageCircleMore,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import AnimatedButton from "../components/AnimatedButton";

export default function AboutUsPage() {
  const navigate = useNavigate();
  const milestones = [
    {
      year: "2000",
      title: "Journey Begins",
      description:
        "Star Motors founded with a vision to revolutionize car care",
    },
    {
      year: "2005",
      title: "Expansion",
      description: "Opened our second service center and expanded team to 25+",
    },
    {
      year: "2010",
      title: "Technology Upgrade",
      description: "Introduced state-of-the-art diagnostic equipment",
    },
    {
      year: "2015",
      title: "Award Recognition",
      description: "Received 'Best Service Center' award in Lucknow",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched online booking and customer portal",
    },
    {
      year: "2025",
      title: "10,000+ Customers",
      description: "Serving thousands of satisfied customers across the region",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Expert Technicians",
      description: "Certified professionals with 10+ years of experience",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guaranteed on all our services",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Service",
      description: "Fast turnaround time without compromising quality",
    },
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      title: "Affordable Pricing",
      description: "Transparent pricing with no hidden charges",
    },
  ];

  const achievements = [
    { number: "10+", label: "Years of Excellence" },
    { number: "10,000+", label: "Happy Customers" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "10+", label: "Services Offered" },
  ];

  const coreValues = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Our Mission",
      description:
        "To provide dependable, high-quality automotive services that ensure customer satisfaction, safety, and long-lasting performance.",
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Our Vision",
      description:
        "To become the most trusted and preferred multi-brand service center known for excellence, transparency, and innovation.",
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Our Values",
      description:
        "We deliver reliable service with quality, transparency, and skilled workmanship you can trust.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-chakra">
      {/* Hero Section */}
      <div className="relative h-76 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#ff6b35]/30 via-[#ff6b35]/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200')] bg-cover bg-center opacity-50"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 rounded-full border-2 border-[#ff6b35] flex items-center justify-center text-[#ff6b35] text-2xl">
              ⚙
            </div>
            <div className="text-2xl font-bold">
              STAR<span className="text-[#ff6b35]">MOTORS</span>
            </div>
          </div> */}

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            Who <span className="text-[#ff6b35]">We Are</span>
          </h3>

          <div className="h-1 w-32 bg-[#ff6b35] mx-auto"></div>

          <nav className="hero-animate inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-400 hover:border-white/20 transition-all  font-chakra mt-5">
            <Link
              to="/"
              className="hover:text-orange-400 flex items-center gap-1 transition-colors"
            >
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <span className="text-white font-medium font-chakra">About Us</span>
          </nav>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className=" px-4 sm:px-6 lg:px-20 py-10 md:py-10">
        <div className="grid md:grid-cols-1 gap-12 items-center">
          {/* <div className="relative group">
            <div className="absolute -inset-4 bg-linear-to-r from-[#ff6b35]/20 to-[#ff6b35]/0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop"
              alt="Star Motors Workshop"
              className="relative rounded-2xl w-full h-[400px] object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500"
            />
          </div> */}

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ⭐ About Us –{" "}
              <span className="text-orange-500">Star Motors </span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              At Star Motors, we are committed to providing high-quality car
              repair, servicing, and maintenance backed by expert workmanship
              and modern technology. With years of experience and a team of
              certified mechanics, we ensure every vehicle receives the care,
              precision, and attention it deserves. <br /> <br />
              We specialize in complete automotive services — including
              mechanical repairs, car & bike foam wash, denting and painting,
              wheel alignment, wheel balancing, interior detailing, tyre change,
              and custom modifications. Whether it’s a regular checkup or a
              major repair, our focus is on delivering reliable, long-lasting
              results.
              <br />
              <br />
              Our workshop is equipped with advanced diagnostic tools and
              premium-grade parts to maintain the performance, safety, and
              durability of your vehicle. We believe in honest pricing,
              transparent service, and building long-term trust with our
              customers.
              <br />
              <br />
              At Star Motors, your car is handled with expertise,
              professionalism, and genuine care — because we treat every vehicle
              as if it’s our own.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-10">
              {coreValues.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-linear-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 rounded-2xl p-8 hover:border-[#ff6b35] transition-all duration-500 hover:shadow-2xl hover:shadow-[#ff6b35]/20 hover:-translate-y-2"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#ff6b35]/10 border-2 border-[#ff6b35] rounded-full mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <div className="text-[#ff6b35]">{item.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#ff6b35] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className=" px-4 sm:px-6 lg:px-20 py-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-5">
          Why Choose <span className="text-[#ff6b35]">Star Motors?</span>
        </h2>
        <div className="flex items-center justify-center mb-10">
          <div className="h-px w-12 bg-linear-to-r from-transparent via-orange-500 to-transparent"></div>
          <div className="mx-3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          <div className="h-px w-12 bg-linear-to-r from-transparent via-orange-500 to-transparent"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-linear-to-br from-[#1a1a1a] via-[#121212] to-[#0a0a0a] border border-gray-800/50 rounded-2xl p-6 hover:border-[#ff6b35]/80 hover:scale-105 hover:-translate-y-1 transition-all duration-500 text-center"
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#ff6b35]/0 via-[#ff6b35]/0 to-[#ff6b35]/0 group-hover:from-[#ff6b35]/5 group-hover:via-[#ff6b35]/10 group-hover:to-[#ff6b35]/5 transition-all duration-500 rounded-2xl" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6b35]/10 border-2 border-[#ff6b35] rounded-full mb-4 group-hover:scale-110 transition-all duration-300">
                  <div className="text-[#ff6b35]">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#ff6b35] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Stats */}
      <div className=" px-6 lg:px-20 py-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-5">
          Our <span className="text-[#ff6b35]">Achievements</span>
        </h2>

        <div className="flex items-center justify-center mb-10">
          <div className="h-px w-12 bg-linear-to-r from-transparent via-orange-500 to-transparent"></div>
          <div className="mx-3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          <div className="h-px w-12 bg-linear-to-r  from-transparent via-orange-500 to-transparent"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((stat, idx) => (
            <div
              key={idx}
              className="relative group bg-linear-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 rounded-2xl p-8 text-center hover:border-[#ff6b35] transition-all duration-500 hover:shadow-2xl hover:shadow-[#ff6b35]/20 overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ff6b35]/0 group-hover:bg-[#ff6b35]/10 blur-3xl rounded-full transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="text-6xl font-bold text-[#ff6b35] mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg font-semibold">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      {/* <div className=" bg-linear-to-b from-[#0f0f0f] to-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-[#ff6b35]">Expert Team</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At Star Motors, our greatest asset is our team of skilled
                professionals. Each technician is certified, continuously
                trained, and passionate about delivering excellence in every
                service.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We invest in ongoing training and the latest technology to
                ensure our team stays ahead of industry developments, providing
                you with cutting-edge service for all vehicle makes and models.
              </p>
              <AnimatedButton
                text="Contact Us"
                width="160px"
                height="40px"
                bgColor="#ff6b35"
                borderColor="#ff6b35"
                cornerColor="#1a1a1a"
                textColor="#ffffff"
                className="transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
                onClick={() => navigate("/contact")}
              />
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-r from-[#ff6b35]/20 to-[#ff6b35]/0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop"
                alt="Our Team"
                className="relative rounded-2xl w-full h-[400px] object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
      <div className=" px-4 sm:px-6 lg:px-20 py-10">
        <div
          className="
    border border-gray-800 rounded-2xl p-12 text-center
    relative overflow-hidden
    bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600')]
    bg-cover bg-center bg-no-repeat
  "
        >
          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
              Experience the{" "}
              <span className="text-orange-500"> Star Motors </span> Difference
            </h2>

            <p className="text-md lg:text-lg mb-8 max-w-2xl mx-auto text-white">
              Join thousands of satisfied customers who trust us with their
              vehicles. Book your service today and discover why we’re Lucknow’s
              #1 choice.
            </p>

            <div className="flex flex-row justify-center gap-2 lg:gap-4">
              {/* Call Button */}
              <a
                href="tel:9956877786"
                className="
          group relative overflow-hidden flex gap-2
          text-white text-[14px] font-semibold px-3 lg:px-7 py-1.5 uppercase tracking-tight
          items-center border-2 border-[#ff6b35]
          transition-all duration-300
          hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]
          rounded-md
        "
              >
                {/* Background hover fill animation */}
                <span
                  className="
            absolute inset-0 bg-[#ff6b35]
            scale-x-0 origin-center transition-transform duration-300 ease-out
            group-hover:scale-x-100 z-0
          "
                ></span>

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
                className="
          group relative overflow-hidden flex gap-2
          text-white text-[14px] font-semibold px-3 lg:px-7 py-1.5 uppercase tracking-tight
          items-center border-2 border-[#ff6b35]
          transition-all duration-300
          hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]
          rounded-md
        "
              >
                <span
                  className="
            absolute inset-0 bg-[#ff6b35]
            scale-x-0 origin-center transition-transform duration-300 ease-out
            group-hover:scale-x-100 z-0
          "
                ></span>

                <span className="relative z-10 flex items-center gap-2">
                  <MessageCircleMore className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
