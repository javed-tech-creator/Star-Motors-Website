import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#0f0f0f] text-white">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[120px] font-extrabold leading-none text-[#ffb400]"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl text-gray-300 max-w-xl mt-3"
      >
        Sorry! The page you're looking for doesn't exist or may have been moved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex gap-4"
      >
        <Link
          to="/"
          className="flex items-center gap-2 bg-[#ffb400] text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-[#ffcc4d] transition-all"
        >
          <Home size={20} />
          Go Home
        </Link>

        <Link
          to={-1}
          className="flex items-center gap-2 bg-white/10 border border-white/20 text-gray-200 px-6 py-3 rounded-xl shadow hover:bg-white/20 transition-all"
        >
          <ArrowLeft size={20} />
          Go Back
        </Link>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        src="https://cdni.iconscout.com/illustration/premium/thumb/404-error-illustration-download-in-svg-png-gif-file-formats--website-page-not-found-pack-illustrations-6694972.png"
        alt="Not Found"
        className="w-72 mt-10 drop-shadow-[0_0_20px_rgba(255,180,0,0.4)]"
      />
    </div>
  );
}
