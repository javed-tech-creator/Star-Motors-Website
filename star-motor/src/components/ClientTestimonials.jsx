import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Business Owner",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "Exceptional service! They repaired my Mercedes with great attention to detail. The team was professional and the work was completed on time. Highly recommend!",
      car: "Mercedes-Benz C-Class"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "Best car service center in the city! They took care of my BMW like it was their own. The pricing was transparent and reasonable. Will definitely come back!",
      car: "BMW 3 Series"
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Entrepreneur",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      text: "Outstanding experience from start to finish. The staff was knowledgeable and explained everything clearly. My Audi runs like new again!",
      car: "Audi A4"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "Doctor",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      text: "Impressed with their professionalism and quality of work. They fixed my Honda's issues quickly and efficiently. Great customer service!",
      car: "Honda City"
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Marketing Manager",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      rating: 5,
      text: "Fantastic service center! They handled my Toyota's maintenance perfectly. The waiting area was comfortable and staff very courteous.",
      car: "Toyota Fortuner"
    },
    {
      id: 6,
      name: "Anjali Gupta",
      role: "Teacher",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      text: "Very satisfied with their work. They diagnosed and fixed the problem with my Hyundai quickly. Fair pricing and excellent quality!",
      car: "Hyundai Creta"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  //  Auto-slide added here
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Auto-slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#111111] py-10 overflow-hidden font-chakra">
      <div className=" px-5 lg:px-20">
      
        {/* Testimonials Slider */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full shrink-0 px-2 md:px-6">
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-linear-to-br from-gray-900/80 to-black/60 backdrop-blur-lg rounded-3xl border border-gray-800/50 p-4  md:p-12 relative overflow-hidden group hover:border-orange-500/50 transition-all duration-300">

                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Quote size={80} className="text-orange-500" />
                      </div>

                      {/* Content */}
                      <div className="relative z-10">

                        {/* Rating */}
                        <div className="flex gap-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={24} className="fill-orange-500 text-orange-500" />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                          "{testimonial.text}"
                        </p>

                        {/* Client Info */}
                        <div className="flex items-center gap-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full border-2 border-orange-500/50 object-cover"
                          />
                          <div>
                            <h4 className="text-white font-semibold text-lg">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-400 text-sm">{testimonial.role}</p>
                            <p className="text-orange-500 text-sm mt-1">
                              {testimonial.car}
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? 'bg-orange-500 w-8 h-3'
                  : 'bg-gray-600 w-3 h-3 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

      

      </div>
    </section>
  );
}
