import React from "react";
import {
  Users,
  Award,
  Target,
  TrendingUp,
  Mail,
  Phone,
  Linkedin,
  ChevronRight,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useGetAllTeamQuery } from "../api/team.api";

export default function ManagementPage() {
  const { data, error, isLoading, isFetching, isSuccess } =
    useGetAllTeamQuery();

  console.log("data management", data);
  const managementTeam = data?.data || [];
  // const managementTeam = [
  //   {
  //     name: "Rajesh Kumar",
  //     position: "Founder & CEO",
  //     image:
  //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",

  //   },
  //   {
  //     name: "Priya Sharma",
  //     position: "Operations Director",
  //     image:
  //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",

  //   },
  //   {
  //     name: "Amit Verma",
  //     position: "Technical Head",
  //     image:
  //       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",

  //   },
  //   {
  //     name: "Sneha Patel",
  //     position: "Customer Relations Manager",
  //     image:
  //       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",

  //   },
  // ];

  if (isLoading) return <p>Loading…</p>;
  if (error) return <p className="text-red-500">Failed to load team!</p>;

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for perfection in every service we deliver",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer First",
      description: "Your satisfaction is our top priority",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Integrity",
      description: "Honest and transparent in all our dealings",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Innovation",
      description: "Embracing latest technology and techniques",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white font-chakra">
      {/* Hero Section */}
      <div className="relative h-76 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0  bg-linear-to-br from-[#ff6b35]/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200')] bg-cover bg-center opacity-40"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            Meet Our <span className="text-[#ff6b35]">Leadership Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            Meet the experts driving excellence at Star Motors
          </p>
          <div className="h-1 w-32 bg-[#ff6b35] mx-auto"></div>

          <nav className="hero-animate inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-400 hover:border-white/20 transition-all  font-chakra mt-5">
            <Link
              to="/"
              className="hover:text-orange-400 flex items-center gap-1 transition-colors"
            >
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <span className="text-white font-medium font-chakra">
              Management
            </span>
          </nav>
        </div>
      </div>

      {/* Leadership Message */}
      {/* <div className=" px-4 sm:px-6 lg:px-20 py-10">
        <div className=" bg-linear-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Leadership <span className="text-[#ff6b35]">Message</span>
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12  bg-linear-to-r from-transparent via-orange-500 to-transparent"></div>
            <div className="mx-3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="h-px w-12  bg-linear-to-r from-transparent via-orange-500 to-transparent"></div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            At Star Motors, we believe in delivering not just services, but
            experiences that exceed expectations. Our management team brings
            together decades of automotive expertise, innovative thinking, and a
            passion for customer satisfaction. We're committed to maintaining
            the highest standards of quality while continuously evolving to meet
            the changing needs of our valued customers.
          </p>
        </div>
      </div> */}

      {/* Management Team */}
      <div className=" px-4 sm:px-6 lg:px-20 pb-10 mt-10">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {managementTeam?.map((member) => (
            <div
              key={member._id}
              className="group bg-linear-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden hover:border-[#ff6b35] transition-all duration-500 hover:shadow-2xl hover:shadow-[#ff6b35]/20 hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member?.image?.public_url}
                  alt={member?.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#ff6b35] transition-colors">
                  {member?.name}
                </h3>

                <p className="text-[#ff6b35] font-semibold mb-3 text-lg">
                  {member?.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values
      <div className="bg-[#111111] py-10">
        <div className=" px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
            Our Core <span className="text-[#ff6b35]">Values</span>
          </h2>
          <div className="flex items-center justify-center mb-10">
            <div className="h-px w-12  bg-linear-to-r from-transparent via-orange-500 to-transparent"></div>
            <div className="mx-3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="h-px w-12  bg-linear-to-r from-transparent via-orange-500 to-transparent"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="group  bg-linear-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 rounded-2xl p-8 text-center hover:border-[#ff6b35] transition-all duration-500 hover:shadow-2xl hover:shadow-[#ff6b35]/20 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6b35]/10 border-2 border-[#ff6b35] rounded-full mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <div className="text-[#ff6b35]">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#ff6b35] transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Stats Section */}
      {/* <div className=" px-4 sm:px-6 lg:px-20 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "25+", label: "Years Experience" },
            { number: "10,000+", label: "Happy Customers" },
            { number: "50+", label: "Expert Technicians" },
            { number: "98%", label: "Satisfaction Rate" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center bg-[#111111] border border-gray-800 rounded-2xl p-8 hover:border-[#ff6b35] transition-all duration-500 hover:shadow-2xl hover:shadow-[#ff6b35]/20"
            >
              <div className="text-5xl font-bold text-[#ff6b35] mb-3">
                {stat.number}
              </div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div> */}

      {/* CTA Section */}
      <div className=" px-4 sm:px-6 lg:px-20 pb-10">
        <div
          className="relative border border-gray-800  rounded-2xl p-12 text-center overflow-hidden
    bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600')]
    bg-cover bg-center bg-no-repeat
  "
        >
          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/70"></div>
                    <div className="relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-6  ">
            Ready to{" "}
            <span className="text-orange-500">
              Experience
            </span>{" "}
            Excellence?
          </h2>
          <p className="text-md lg:text-lg mb-8 max-w-2xl mx-auto ">
            Get in touch with our management team to discuss how we can serve
            you better
          </p>
          <div className="flex justify-center gap-2">
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
    py-2
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
                Call NOW
              </span>
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
