import React from 'react';
import { Users, Award, Target, TrendingUp, Mail, Phone, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ManagementPage() {
  const managementTeam = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "25+ years of experience in automotive industry",
      email: "rajesh@starmotors.com",
      phone: "+91 752 60 74 042",
      linkedin: "#"
    },
    {
      name: "Priya Sharma",
      position: "Operations Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Expert in service management and quality control",
      email: "priya@starmotors.com",
      phone: "+91 752 60 74 043",
      linkedin: "#"
    },
    {
      name: "Amit Verma",
      position: "Technical Head",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Certified automotive engineer with 15+ years experience",
      email: "amit@starmotors.com",
      phone: "+91 752 60 74 044",
      linkedin: "#"
    },
    {
      name: "Sneha Patel",
      position: "Customer Relations Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Dedicated to ensuring exceptional customer satisfaction",
      email: "sneha@starmotors.com",
      phone: "+91 752 60 74 045",
      linkedin: "#"
    }
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for perfection in every service we deliver"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer First",
      description: "Your satisfaction is our top priority"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Integrity",
      description: "Honest and transparent in all our dealings"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Innovation",
      description: "Embracing latest technology and techniques"
    }
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white font-chakra">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200')] bg-cover bg-center opacity-40"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-[#ff6b35]">Management</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Meet the experts driving excellence at Star Motors
          </p>
          <div className="h-1 w-32 bg-[#ff6b35] mx-auto"></div>
           <p className="text-sm text-gray-400 font-chakra mt-5 font-bold">
            <Link to="/" className="hover:text-white transition ">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Management</span>
          </p>
        </div>
      </div>

      {/* Leadership Message */}
      <div className=" px-4 sm:px-6 lg:px-20 py-10">
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Leadership <span className="text-[#ff6b35]">Message</span>
          </h2>
             <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <div className="mx-3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            At Star Motors, we believe in delivering not just services, but experiences that exceed expectations. 
            Our management team brings together decades of automotive expertise, innovative thinking, and a 
            passion for customer satisfaction. We're committed to maintaining the highest standards of quality 
            while continuously evolving to meet the changing needs of our valued customers.
          </p>
        </div>
      </div>

      {/* Management Team */}
      <div className=" px-4 sm:px-6 lg:px-20 pb-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5">
          Meet Our <span className="text-[#ff6b35]">Leadership Team</span>
        </h2>
           <div className="flex items-center justify-center mb-10">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <div className="mx-3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </div>


        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {managementTeam.map((member, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden hover:border-[#ff6b35] transition-all duration-500 hover:shadow-2xl hover:shadow-[#ff6b35]/20 hover:-translate-y-2"
            >
              <div className="relative h-50 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-center  transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#ff6b35] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#ff6b35] font-semibold mb-3 text-lg">
                  {member.position}
                </p>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* Contact Info */}
                <div className="space-y-3 border-t border-gray-700 pt-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-[#ff6b35] transition-colors group/link"
                  >
                    <Mail className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                    <span className="text-sm">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-[#ff6b35] transition-colors group/link"
                  >
                    <Phone className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                    <span className="text-sm">{member.phone}</span>
                  </a>
                  <a
                    href={member.linkedin}
                    className="flex items-center gap-3 text-gray-300 hover:text-[#ff6b35] transition-colors group/link"
                  >
                    <Linkedin className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                    <span className="text-sm">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-[#111111] py-10">
        <div className=" px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
            Our Core <span className="text-[#ff6b35]">Values</span>
          </h2>
              <div className="flex items-center justify-center mb-10">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <div className="mx-3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 rounded-2xl p-8 text-center hover:border-[#ff6b35] transition-all duration-500 hover:shadow-2xl hover:shadow-[#ff6b35]/20 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6b35]/10 border-2 border-[#ff6b35] rounded-full mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <div className="text-[#ff6b35]">
                    {value.icon}
                  </div>
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
      </div>

      {/* Stats Section */}
      <div className=" px-4 sm:px-6 lg:px-20 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "25+", label: "Years Experience" },
            { number: "10,000+", label: "Happy Customers" },
            { number: "50+", label: "Expert Technicians" },
            { number: "98%", label: "Satisfaction Rate" }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center bg-[#111111] border border-gray-800 rounded-2xl p-8 hover:border-[#ff6b35] transition-all duration-500 hover:shadow-2xl hover:shadow-[#ff6b35]/20"
            >
              <div className="text-5xl font-bold text-[#ff6b35] mb-3">
                {stat.number}
              </div>
              <div className="text-gray-300 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className=" px-4 sm:px-6 lg:px-20 pb-10">
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800  rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-orange-500">Experience</span> Excellence?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with our management team to discuss how we can serve you better
          </p>
          <a
            href="tel:7526074042"
            className="inline-block bg-white text-[#ff6b35] font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            CONTACT US NOW
          </a>
        </div>
      </div>
    </div>
  );
}