import {
  Wrench,
  Droplets,
  Sparkles,
  Car,
  Settings,
  Target,
  Scale,
  ShoppingCart,
} from "lucide-react";

const servicesData = {
  service1: {
    title: "CAR REPARING SERVICE",
    icon: Wrench,
    heroImage:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200",
    description: (
      <p>
        At our *Car Service and Repairing Center*, we provide comprehensive care
        for all types of vehicles, from luxury cars to everyday models. Our team
        of skilled and certified technicians uses modern tools and advanced
        diagnostic equipment to ensure your car runs safely, efficiently, and
        smoothly. <br />
        <br />
        We offer a full range of services including routine maintenance like oil
        changes and filter replacements, mechanical and electrical repairs,
        brake and suspension work, AC and cooling system servicing, wheel
        alignment and balancing, as well as bodywork, denting, and paint
        touch-ups. <br />
        <br />
        With a focus on quality, transparency, and customer satisfaction, we
        deliver timely and reliable service at affordable prices. No matter the
        brand or model, you can trust us to keep your car in top condition. Book
        a service with us today and experience professional, trustworthy car
        care.
      </p>
    ),
    features: [
      {
        title: "Routine Maintenance",
        description: "Oil changes, filter replacements, fluid top-ups",
      },
      {
        title: "Mechanical Repairs",
        description: "Engine, transmission, brakes, suspension, and more",
      },
      {
        title: "Electrical Repairs",
        description: "Battery, lights, sensors, and wiring issues",
      },
      {
        title: "Bodywork & Denting",
        description: "Minor scratches, dents, and paint touch-ups",
      },
      {
        title: "Wheel & Tyre Care",
        description: "Alignment, balancing, and replacements",
      },
      {
        title: "AC & Cooling System Service",
        description: "Complete AC inspection & performance enhancement",
      },
    ],
    faqs: [
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
    ],
    highlights: [
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
    ],
  },
  service2: {
    title: "CAR FOAM WASH",
    icon: Droplets,
    heroImage:
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1200",

    description: (
      <p>
        Our <strong>Car Foam Wash</strong> service is designed to give your
        vehicle a deep, gentle, and premium cleaning experience. Using advanced
        foam technology, we safely remove dirt, grime, and contaminants without
        harming the paint surface. The thick foam layer loosens stubborn
        particles, ensuring a spotless exterior while preserving your car’s
        shine and paint quality. High-pressure rinsing and microfiber finishing
        provide a refreshed, glossy, and showroom-like appearance.
      </p>
    ),

    features: [
      {
        title: "Advanced Foam Technology",
        description:
          "Soft foam gently lifts dirt and grime without scratching the paint, ensuring safe and effective cleaning.",
      },
      {
        title: "High-Pressure Rinse",
        description:
          "Controlled pressure removes all foam, dust, and residue from hidden and hard-to-reach areas.",
      },
      {
        title: "Premium Shampoo & Products",
        description:
          "We use pH-neutral, high-quality foam shampoos that protect your car’s paint and enhance shine.",
      },
      {
        title: "Microfiber Finishing",
        description:
          "Soft microfiber towels ensure streak-free drying and a polished, glossy finish.",
      },
      {
        title: "Paint-Safe & Eco-Friendly",
        description:
          "Gentle on paint, seals, and trims while using eco-friendly cleaning solutions.",
      },
      {
        title: "Quick & Professional Service",
        description:
          "Fast turnaround time with expert cleaning delivered by trained professionals.",
      },
    ],

    highlights: [
      { text: "Safe pH-Balanced Foam", icon: "🧼" },
      { text: "Scratch-Free Cleaning", icon: "✨" },
      { text: "Premium Drying & Finishing", icon: "🧽" },
      { text: "Fast Turnaround Service", icon: "⚡" },
    ],

    faqs: [
      {
        q: "What is the difference between normal washing and foam washing?",
        a: "Foam washing uses thick foam that loosens dirt gently, reducing scratches—unlike regular pressure or bucket washes.",
      },
      {
        q: "How often should I get a foam wash?",
        a: "Every 1–2 weeks depending on driving conditions and car usage.",
      },
      {
        q: "Is foam washing safe for the paint?",
        a: "Yes, our foam is pH-balanced and paint-safe, protecting the clear coat and shine.",
      },
      {
        q: "Do you clean underbody during foam wash?",
        a: "Underbody wash is available as an add-on service.",
      },
      {
        q: "Does foam wash remove scratches?",
        a: "No. It removes dirt and stains. Scratch removal requires polishing or rubbing.",
      },
      {
        q: "How long does a foam wash take?",
        a: "Usually 20–30 minutes depending on car size and condition.",
      },
      {
        q: "What products do you use?",
        a: "Premium foam shampoos, wax-based cleaners, microfiber cloths, and professional-grade equipment.",
      },
      {
        q: "Is interior cleaning included?",
        a: "Interior cleaning is not included but can be added separately.",
      },
    ],
  },

  single1: {
    title: "INTERIOR CLEANING",
    icon: Sparkles,
    heroImage:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1920&q=80",
    description: (
      <p>
        Our Interior Cleaning service is designed to give your vehicle a fresh,
        hygienic, and spotless cabin environment. Using premium cleaning
        solutions, vacuuming tools, steam sanitization, and microfiber
        detailing, we deep-clean every corner of your car’s interior. From seats
        and carpets to dashboard, door panels, and roof lining — we ensure your
        car feels new, smells fresh, and looks perfectly maintained. This
        service removes dust, stains, bacteria, and bad odors to improve overall
        comfort and hygiene.
      </p>
    ),

    features: [
      {
        title: "Deep Interior Cleaning",
        description:
          "Complete cleaning of seats, mats, carpets, dashboard, door trims, and boot space using professional tools.",
      },
      {
        title: "Premium Products & Sanitization",
        description:
          "Safe, high-quality cleaners and steam sanitization to eliminate germs, stains, and odors.",
      },
      {
        title: "Upholstery & Fabric Care",
        description:
          "Special treatment for fabric, leather, and vinyl surfaces to restore shine and freshness without damage.",
      },
      {
        title: "Professional Vacuuming & Detailing",
        description:
          "High-suction vacuuming with fine detailing ensures dust-free and spotless interiors.",
      },
      {
        title: "Odor Removal",
        description:
          "We treat unpleasant smells caused by moisture, food spills, and bacteria to leave a fresh fragrance.",
      },
      {
        title: "Safe & Eco-Friendly",
        description: "Non-toxic, eco-friendly products safe for kids and pets.",
      },
    ],

    highlights: [
      {
        text: "Complete interior cleaning and detailing",
        icon: "✨",
      },
      {
        text: "Steam sanitization for germs and bacteria",
        icon: "🧼",
      },
      {
        text: "Premium care for fabric, leather, and vinyl",
        icon: "🛋️",
      },
      {
        text: "High-suction vacuum and microfiber finishing",
        icon: "🧹",
      },
    ],

    faqs: [
      {
        q: "What is included in interior cleaning?",
        a: "Vacuuming, dashboard cleaning, seat cleaning, mat washing, door panel cleaning, glass cleaning, and boot area cleaning.",
      },
      {
        q: "Do you clean leather seats?",
        a: "Yes, we use specialized leather cleaners and conditioners that remove dirt and restore shine without harming the material.",
      },
      {
        q: "How long does interior cleaning take?",
        a: "A standard interior cleaning takes 45–90 minutes, depending on the car size and condition.",
      },
      {
        q: "Will interior cleaning remove stains?",
        a: "Light to moderate stains can be removed. Deep stains may require interior shampooing or detailing.",
      },
      {
        q: "Do you provide sanitization?",
        a: "Yes, we offer steam sanitization that kills germs, bacteria, and removes bad odors.",
      },
      {
        q: "How often should I get interior cleaning done?",
        a: "Every 2–4 weeks depending on usage, kids, pets, and overall vehicle cleanliness.",
      },
      {
        q: "Does interior cleaning include AC vent cleaning?",
        a: "Basic interior cleaning includes outer vent cleaning. Deep AC duct cleaning is available as an add-on service.",
      },
      {
        q: "Do you clean the roof lining?",
        a: "Yes, roof lining is cleaned carefully using non-moisture techniques to avoid sagging or damage.",
      },
    ],
  },
  single2: {
    title: "DENTING & PAINTING",
    icon: Car,
    heroImage:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=80",

    description: (
      <p>
        Our <strong>Denting & Painting Service</strong> is designed to fully
        restore your vehicle’s exterior body and paint finish. From minor dents
        to complete repainting jobs, our expert technicians use premium paints,
        modern tools, and high-precision techniques to give your car a
        showroom-quality appearance. <br />
        <br />
        With high-grade materials and skilled workmanship, we ensure
        long-lasting durability and a flawless finish that enhances your
        vehicle’s look and value.
      </p>
    ),

    features: [
      {
        title: "Certified & Experienced Technicians",
        description:
          "Your vehicle is handled by trained experts skilled in advanced automotive repair and diagnostics.",
      },
      {
        title: "Premium Quality Service",
        description:
          "We use high-grade tools, original parts, and industry-standard paint techniques for long-lasting results.",
      },
      {
        title: "Transparent Pricing",
        description:
          "Clear, upfront costing with no hidden charges — you pay only for what’s required.",
      },
      {
        title: "Quick Turnaround Time",
        description:
          "Fast and efficient repairs so your vehicle is back on the road as soon as possible.",
      },
      {
        title: "Advanced Tools & Technology",
        description:
          "Modern machinery, precision dent repair tools, and computerized color-matching systems.",
      },
      {
        title: "Customer-Focused Approach",
        description:
          "Personalized service, honest guidance, and complete customer satisfaction.",
      },
    ],

    highlights: [
      {
        text: "Factory-Finish Paint Matching",
        icon: "🎨",
      },
      {
        text: "Premium Quality Automotive Paints",
        icon: "🖌️",
      },
      {
        text: "Advanced Dent Repair Tools",
        icon: "🔧",
      },
      {
        text: "Warranty on Paint & Workmanship",
        icon: "⭐",
      },
    ],

    faqs: [
      {
        q: "How long does a denting and painting job take?",
        a: "Minor scratches take 1–2 days, while full panel or full-body painting takes 3–5 days.",
      },
      {
        q: "Do you use original paint codes for color matching?",
        a: "Yes. We use manufacturer-approved paint codes to ensure perfect color matching.",
      },
      {
        q: "Will the repaired panel look different from the rest of the car?",
        a: "No. Our advanced color-matching system blends new paint seamlessly.",
      },
      {
        q: "Can deep scratches be completely removed?",
        a: "Yes. Deep scratches are filled, primed, and repainted for a flawless surface.",
      },
      {
        q: "Is the paint long-lasting?",
        a: "Absolutely. We use UV-resistant, durable premium paints that last for years.",
      },
      {
        q: "Do you provide full-body repainting?",
        a: "Yes, complete with sanding, primer, base-coat & clear-coat finishing.",
      },
      {
        q: "Will denting affect car body strength?",
        a: "No. Professional dent repair restores original shape without weakening the panel.",
      },
      {
        q: "Do you offer warranty?",
        a: "Yes. Paint quality and workmanship are covered under warranty.",
      },
      {
        q: "How can I book an appointment?",
        a: "You can call us, fill the online form, or visit our service center.",
      },
    ],
  },

  single3: {
    title: "CAR MODIFICATION",
    icon: Settings,
    heroImage:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200",
    description: (
      <p>
        At our workshop, we transform ordinary vehicles into extraordinary
        machines. Our car modification services cover performance upgrades,
        aesthetic enhancements, and customizations tailored to your style and
        needs. From body kits, alloy wheels, and LED lighting to engine tuning
        and exhaust upgrades, our skilled technicians combine expertise with
        precision, delivering quality modifications that stand out on the road.
      </p>
    ),

    features: [
      {
        title: "Expert Technicians",
        description:
          "Certified professionals with years of experience ensuring top-notch workmanship.",
      },
      {
        title: "Customized Solutions",
        description:
          "Personalized modifications tailored to your taste, for performance, aesthetics, or both.",
      },
      {
        title: "Quality Parts",
        description:
          "Premium-quality components for durability, safety, and long-lasting performance.",
      },
      {
        title: "Latest Technology",
        description:
          "Advanced tools and diagnostic equipment for precise modifications.",
      },
      {
        title: "Affordable Pricing",
        description: "Competitive pricing without compromising on quality.",
      },
      {
        title: "Customer Satisfaction",
        description:
          "We prioritize your vision, delivering results that exceed expectations.",
      },
    ],

    highlights: [
      {
        text: "Performance Upgrades",
        icon: "⚡",
      },
      {
        text: "Aesthetic Enhancements",
        icon: "🎨",
      },
      {
        text: "Custom Designs & Colors",
        icon: "🖌️",
      },
      {
        text: "Engine & Exhaust Tuning",
        icon: "🔧",
      },
    ],

    faqs: [
      {
        q: "Can you modify any car model?",
        a: "Yes, we cater to a wide range of car brands and models, ensuring every modification is compatible and safe.",
      },
      {
        q: "How long does a car modification take?",
        a: "Minor aesthetic upgrades may take a few hours, while full performance modifications could take several days depending on the extent of the work.",
      },
      {
        q: "Will modifications affect my car’s warranty?",
        a: "We recommend checking with your car manufacturer. Our modifications are designed to minimize warranty risks and ensure safety.",
      },
      {
        q: "Do you offer performance tuning?",
        a: "Yes, we provide engine tuning, exhaust upgrades, suspension enhancements, and more to improve your car’s performance.",
      },
      {
        q: "Can I choose custom designs or colors?",
        a: "Absolutely. Options include paint jobs, decals, wraps, lighting, interiors, and more to reflect your unique style.",
      },
      {
        q: "Is financing available for modifications?",
        a: "Yes, we offer flexible payment plans to make your dream modifications more accessible.",
      },
    ],
  },
  single4: {
    title: "WHEEL ALIGNMENT",
    icon: Target,
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",

    description: (
      <p>
        Our <strong>Wheel Alignment</strong> service ensures your vehicle drives
        smoothly, safely, and efficiently. Over time, wheels fall out of
        alignment due to potholes, rough roads, or daily wear. Misaligned wheels
        cause uneven tyre wear, vibration, reduced mileage, and poor handling.
        <br />
        <br />
        Using advanced computerized alignment systems, we precisely adjust
        camber, caster, and toe angles to restore manufacturer-recommended
        settings. This results in a smoother ride, better fuel efficiency,
        improved steering control, and extended tyre life.
      </p>
    ),

    features: [
      {
        title: "Computerized Alignment Systems",
        description:
          "We use modern 3D/laser alignment machines for accurate measurements and precise adjustments.",
      },
      {
        title: "Improved Driving Stability",
        description:
          "Correct alignment enhances steering response, reduces pulling, and ensures a smoother drive.",
      },
      {
        title: "Extended Tyre Life",
        description:
          "Proper alignment prevents uneven tyre wear, saving you money on premature replacements.",
      },
      {
        title: "Enhanced Fuel Efficiency",
        description:
          "Aligned wheels reduce rolling resistance, helping your car use less fuel.",
      },
      {
        title: "Expert Technicians",
        description:
          "Trained professionals ensure camber, caster, and toe angles are calibrated with precision.",
      },
      {
        title: "Quick & Hassle-Free Service",
        description:
          "Fast alignment with detailed before-and-after reports for full transparency.",
      },
    ],

    highlights: [
      { text: "Advanced 3D / Laser Alignment", icon: "🎯" },
      { text: "Perfect Steering Calibration", icon: "🛞" },
      { text: "Improved Mileage & Tyre Life", icon: "⚡" },
      { text: "Professional Certified Technicians", icon: "👨‍🔧" },
    ],

    faqs: [
      {
        q: "How do I know if my car needs wheel alignment?",
        a: "Common signs include steering pulling to one side, uneven tyre wear, vibration, or an off-center steering wheel.",
      },
      {
        q: "How often should wheel alignment be done?",
        a: "Every 5,000–10,000 km or whenever you notice driving or handling issues.",
      },
      {
        q: "Does wheel alignment improve mileage?",
        a: "Yes. Correct alignment reduces friction and helps your vehicle use less fuel.",
      },
      {
        q: "What causes wheel misalignment?",
        a: "Potholes, rough roads, speed breakers, accidents, or worn suspension components.",
      },
      {
        q: "How long does a wheel alignment take?",
        a: "Typically 20–30 minutes depending on vehicle type and adjustments required.",
      },
      {
        q: "Is wheel balancing the same as wheel alignment?",
        a: "No. Alignment corrects wheel angles; balancing corrects tyre weight distribution. Both are important.",
      },
      {
        q: "Will alignment fix steering vibration?",
        a: "If misalignment is the cause, yes. Otherwise, balancing or tyre inspection may be required.",
      },
      {
        q: "Do you provide alignment reports?",
        a: "Yes, we provide detailed before-and-after alignment readings for full transparency.",
      },
    ],
  },
  single5: {
    title: "WHEEL BALANCING",
    icon: Scale,
    heroImage:
      "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=1200",

    description: (
      <p>
        Our <b>Wheel Balancing</b> service ensures a smooth, stable, and
        vibration-free driving experience. Over time, tyres develop uneven
        weight distribution due to road impact, tyre wear, or aging. This
        imbalance can cause vibration at high speeds, uneven tyre wear, reduced
        suspension life, and poor driving comfort. <br />
        <br />
        Using advanced <b>digital balancing machines</b>, our technicians detect
        even the smallest weight differences and apply precise clip-on or
        stick-on weights. This restores perfect wheel balance, resulting in
        better stability, improved tyre life, and enhanced vehicle performance.
        <br />
        <br />
        Our high-speed balancing simulation ensures accurate balancing even at
        highway speeds. Quick, reliable, and expertly handled — our service
        keeps your vehicle running smoother and safer.
      </p>
    ),

    features: [
      {
        title: "Advanced Digital Balancing Machines",
        description:
          "High-precision balancing equipment that detects even the smallest weight differences.",
      },
      {
        title: "Smooth & Vibration-Free Drive",
        description:
          "Eliminates steering vibration and improves overall ride comfort.",
      },
      {
        title: "Longer Tyre & Suspension Life",
        description:
          "Balanced wheels reduce stress on tyres, bearings, and suspension components.",
      },
      {
        title: "High-Speed Precision Balancing",
        description:
          "Simulates real driving conditions to ensure stability at high speeds.",
      },
      {
        title: "Expert Technician Calibration",
        description:
          "Trained professionals ensure accurate weight placement for perfect wheel harmony.",
      },
      {
        title: "Quick & Reliable Service",
        description:
          "Fast tyre removal, balancing, and refitting with complete safety checks.",
      },
    ],

    faqs: [
      {
        q: "What are the signs that my wheels need balancing?",
        a: "Vibration in steering, uneven tyre wear, wobbling at high speeds, and increased road noise.",
      },
      {
        q: "How often should wheel balancing be done?",
        a: "Every 5,000–8,000 km or whenever tyres are changed, rotated, or repaired.",
      },
      {
        q: "Is wheel balancing different from wheel alignment?",
        a: "Yes. Balancing fixes uneven weight; alignment adjusts wheel angles. Both are essential for smooth driving.",
      },
      {
        q: "Can unbalanced wheels damage my car?",
        a: "Yes. Long-term imbalance can damage tyres, bearings, suspension parts, and reduce fuel efficiency.",
      },
      {
        q: "How long does wheel balancing take?",
        a: "Around 10–20 minutes per wheel depending on tyre size and weight adjustment.",
      },
      {
        q: "Do you use clip-on or stick-on weights?",
        a: "We use both types depending on wheel design for secure and long-lasting balancing.",
      },
      {
        q: "Will balancing improve fuel efficiency?",
        a: "Yes. Balanced wheels reduce rolling resistance, improving mileage.",
      },
      {
        q: "Should I balance wheels after hitting a pothole?",
        a: "Yes. A strong impact can disturb weight distribution and balancing is recommended.",
      },
    ],

    highlights: [
      { text: "High-Precision Digital Machines", icon: "🎯" },
      { text: "Vibration-Free Smooth Driving", icon: "🚗" },
      { text: "Extended Tyre & Suspension Life", icon: "🛞" },
      { text: "Fast & Professional Service", icon: "⚡" },
    ],
  },

  single6: {
    title: "AC & Electrical Services",
    icon: ShoppingCart,
    heroImage:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200",

    description: (
      <p>
        Our <strong>AC & Electrical Services</strong> ensure your vehicle
        remains comfortable, efficient, and safe in every driving condition.
        From restoring cooling performance to fixing electrical faults, our
        certified technicians use advanced diagnostic tools and high-quality
        components to deliver precise, long-lasting solutions. Whether it’s AC
        gas leakage, compressor issues, blower malfunction, battery problems,
        wiring faults, or sensor failures—we provide complete inspection,
        repair, and optimization to keep your car running smoothly.
      </p>
    ),

    features: [
      {
        title: "Expert AC & Electrical Technicians",
        description:
          "Certified professionals skilled in handling complex AC systems, wiring, circuits, and electrical diagnostics.",
      },
      {
        title: "Advanced Diagnostic Tools",
        description:
          "Computerized scanners, multimeters, AC gauges, and leak detectors for accurate fault identification.",
      },
      {
        title: "High-Quality Components",
        description:
          "100% genuine compressors, condensers, relays, sensors, wiring, and electrical parts for long-term reliability.",
      },
      {
        title: "Complete AC Performance Optimization",
        description:
          "Cooling efficiency tests, airflow checks, compressor inspection, and full-system tuning.",
      },
      {
        title: "Transparent Pricing",
        description:
          "Clear estimates, fair pricing, and complete explanations with no hidden charges.",
      },
      {
        title: "Quick & Reliable Solutions",
        description:
          "Fast, efficient repairs that minimize downtime without compromising service quality.",
      },
    ],

    highlights: [
      { text: "Accurate Computerized AC Diagnostics", icon: "🧊" },
      { text: "Genuine Electrical Components", icon: "🔌" },
      { text: "Advanced Leak Detection Tools", icon: "🛠️" },
      { text: "Warranty on AC & Electrical Repairs", icon: "⭐" },
    ],

    faqs: [
      {
        q: "Why is my car AC not cooling properly?",
        a: "Low refrigerant, compressor issues, cooling coil blockage, or gas leakage may be the reason. We perform a full AC pressure test to identify the issue.",
      },
      {
        q: "How often should I get my car AC serviced?",
        a: "A complete AC service is recommended every 12 months or if cooling decreases.",
      },
      {
        q: "Do you check for AC gas leaks?",
        a: "Yes. We use leak-detection tools to identify leaks in the compressor, hose, condenser, or cooling coil.",
      },
      {
        q: "What electrical problems do you repair?",
        a: "Battery, alternator, fuses, relays, wiring faults, sensors, lighting issues, and ECU/electrical system faults.",
      },
      {
        q: "Why does my car battery drain quickly?",
        a: "Weak battery, alternator malfunction, wiring short circuits, or accessories drawing excess power. We perform a full charging system test.",
      },
      {
        q: "Do you use genuine electrical parts?",
        a: "Yes. Only high-quality, manufacturer-approved electrical components are used.",
      },
      {
        q: "How do I know if my car’s compressor needs replacement?",
        a: "Weak cooling, unusual noise, or high-pressure readings indicate compressor failure. We perform a compressor performance test.",
      },
      {
        q: "How long does an AC service take?",
        a: "Basic AC service takes 1–2 hours. Major repairs like compressor or wiring may take longer.",
      },
      {
        q: "Do you offer warranty on AC & electrical repairs?",
        a: "Yes. Warranty is provided on major AC and electrical repair work.",
      },
    ],
  },
};
export default servicesData;
