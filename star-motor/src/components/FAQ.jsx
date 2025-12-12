// import { useState } from "react";

// export default function FAQ({ service }) {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
//       {service?.faqs?.map((faq, i) => (
//         <div
//           key={i}
//           className="bg-[#0f0f0f] rounded-xl border border-gray-800 transition-all overflow-hidden "
//         >
//           <button
//             className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
//             onClick={() => toggleFAQ(i)}
//           >
//             <p className="text-lg font-semibold">{faq.q}</p>
//             <span className="text-xl transition-transform duration-300">
//               {openIndex === i ? "−" : "+"}
//             </span>
//           </button>
//           <div
//             className={`px-6 text-gray-400 overflow-hidden transition-all duration-300 ${
//               openIndex === i ? "max-h-96 py-4" : "max-h-0"
//             }`}
//           >
//             {faq.a}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
