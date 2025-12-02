import React from 'react';
import { Wrench, Shield, Clock, ThumbsUp, Target, Lightbulb, Heart, TrendingUp, CheckCircle, Star } from 'lucide-react';

export default function AboutUsPage() {
  const milestones = [
    { year: "2000", title: "Journey Begins", description: "Star Motors founded with a vision to revolutionize car care" },
    { year: "2005", title: "Expansion", description: "Opened our second service center and expanded team to 25+" },
    { year: "2010", title: "Technology Upgrade", description: "Introduced state-of-the-art diagnostic equipment" },
    { year: "2015", title: "Award Recognition", description: "Received 'Best Service Center' award in Lucknow" },
    { year: "2020", title: "Digital Transformation", description: "Launched online booking and customer portal" },
    { year: "2025", title: "10,000+ Customers", description: "Serving thousands of satisfied customers across the region" }
  ];

  const whyChooseUs = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Expert Technicians",
      description: "Certified professionals with 10+ years of experience"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guaranteed on all our services"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Service",
      description: "Fast turnaround time without compromising quality"
    },
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      title: "Affordable Pricing",
      description: "Transparent pricing with no hidden charges"
    }
  ];

  const achievements = [
    { number: "25+", label: "Years of Excellence" },
    { number: "10,000+", label: "Happy Customers" },
    { number: "50+", label: "Expert Team Members" },
    { number: "15+", label: "Services Offered" }
  ];

  const coreValues = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Our Mission",
      description: "To provide exceptional automotive care that exceeds customer expectations through quality service, skilled expertise, and unwavering dedication to excellence."
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Our Vision",
      description: "To be the most trusted and preferred automotive service provider in the region, setting industry standards for quality, innovation, and customer satisfaction."
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Our Values",
      description: "Integrity, excellence, customer-first approach, continuous improvement, and building lasting relationships with our community."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-chakra">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/30 via-[#ff6b35]/10 to-transparent"></div>
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
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            About <span className="text-[#ff6b35]">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your Trusted Partner in Automotive Excellence Since 2000
          </p>
          <div className="h-1 w-32 bg-[#ff6b35] mx-auto"></div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className=" px-4 sm:px-6 lg:px-20 py-10 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#ff6b35]/20 to-[#ff6b35]/0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop"
              alt="Star Motors Workshop"
              className="relative rounded-2xl w-full h-[400px] object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Who <span className="text-[#ff6b35]">We Are</span>
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Star Motors is Lucknow's premier automotive service center, dedicated to providing 
              top-quality car care and maintenance services. With over 25 years of experience, 
              we've built our reputation on trust, expertise, and exceptional customer service.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our state-of-the-art facility is equipped with the latest diagnostic tools and 
              equipment, ensuring your vehicle receives the best possible care. From routine 
              maintenance to complex repairs, our team of certified technicians handles it all 
              with precision and professionalism.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-[#ff6b35]">
                <CheckCircle className="w-5 h-5" />
                <span>Certified Technicians</span>
              </div>
              <div className="flex items-center gap-2 text-[#ff6b35]">
                <CheckCircle className="w-5 h-5" />
                <span>Modern Equipment</span>
              </div>
              <div className="flex items-center gap-2 text-[#ff6b35]">
                <CheckCircle className="w-5 h-5" />
                <span>Quality Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="bg-[#1a1a1a] py-10 md:py-20">
        <div className="px-4 sm:px-6 lg:px-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-5">
            Our <span className="text-[#ff6b35]">Foundation</span>
          </h2>
            <div className="flex items-center justify-center mb-10">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <div className="mx-3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((item, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 rounded-2xl p-8 hover:border-[#ff6b35] transition-all duration-500 hover:shadow-2xl hover:shadow-[#ff6b35]/20 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#ff6b35]/10 border-2 border-[#ff6b35] rounded-full mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <div className="text-[#ff6b35]">
                    {item.icon}
                  </div>
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

      {/* Why Choose Us */}
      <div className=" px-4 sm:px-6 lg:px-20 py-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-5">
          Why Choose <span className="text-[#ff6b35]">Star Motors?</span>
        </h2>
           <div className="flex items-center justify-center mb-10">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <div className="mx-3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-[#1a1a1a] via-[#121212] to-[#0a0a0a] border border-gray-800/50 rounded-2xl p-6 hover:border-[#ff6b35]/80 hover:scale-105 hover:-translate-y-1 transition-all duration-500 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/0 via-[#ff6b35]/0 to-[#ff6b35]/0 group-hover:from-[#ff6b35]/5 group-hover:via-[#ff6b35]/10 group-hover:to-[#ff6b35]/5 transition-all duration-500 rounded-2xl" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6b35]/10 border-2 border-[#ff6b35] rounded-full mb-4 group-hover:scale-110 transition-all duration-300">
                  <div className="text-[#ff6b35]">
                    {item.icon}
                  </div>
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

      {/* Our Journey Timeline */}
      <div className="bg-[#1a1a1a] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-5">
            Our <span className="text-[#ff6b35]">Journey</span>
          </h2>
             <div className="flex items-center justify-center mb-10">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <div className="mx-3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#ff6b35] to-transparent hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-[#ff6b35] transition-all duration-500 hover:shadow-xl hover:shadow-[#ff6b35]/20">
                      <div className="text-[#ff6b35] text-3xl font-bold mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="w-12 h-12 bg-[#ff6b35] rounded-full flex items-center justify-center border-4 border-[#0f0f0f] shadow-lg shadow-[#ff6b35]/50">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-5">
          Our <span className="text-[#ff6b35]">Achievements</span>
        </h2>

           <div className="flex items-center justify-center mb-10">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <div className="mx-3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((stat, idx) => (
            <div
              key={idx}
              className="relative group bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 rounded-2xl p-8 text-center hover:border-[#ff6b35] transition-all duration-500 hover:shadow-2xl hover:shadow-[#ff6b35]/20 overflow-hidden"
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
      <div className="bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-[#ff6b35]">Expert Team</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At Star Motors, our greatest asset is our team of skilled professionals. 
                Each technician is certified, continuously trained, and passionate about 
                delivering excellence in every service.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We invest in ongoing training and the latest technology to ensure our team 
                stays ahead of industry developments, providing you with cutting-edge service 
                for all vehicle makes and models.
              </p>
              <a
                href="#management"
                className="inline-block bg-[#ff6b35] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#ff8c35] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#ff6b35]/50"
              >
                MEET OUR TEAM
              </a>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ff6b35]/20 to-[#ff6b35]/0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop"
                alt="Our Team"
                className="relative rounded-2xl w-full h-[400px] object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className=" px-4 sm:px-6 lg:px-20 py-20">
  <div className=" border border-gray-800 rounded-2xl p-12 text-center"
        >          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the <span className='text-orange-500'> Star Motors </span> Difference
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their vehicles. 
              Enquiry your service today and discover why we're Lucknow's #1 choice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7526074042"
                className="inline-block bg-white text-[#ff6b35] font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                CALL NOW
              </a>
              <a
                href="#contactus"
                className="inline-block bg-transparent border-2 border-white text-white font-bold px-10 py-4 rounded-lg hover:bg-white hover:text-[#ff6b35] transition-all duration-300 hover:scale-105"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}