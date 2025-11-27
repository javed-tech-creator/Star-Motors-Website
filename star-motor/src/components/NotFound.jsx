import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-6">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[120px] font-extrabold text-gray-800 leading-none"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl text-gray-700 max-w-lg mt-3"
      >
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex gap-4"
      >
        <Link
          to="/"
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl shadow hover:bg-blue-700 transition-all"
        >
          <Home size={20} />
          Go Home
        </Link>

        <Link
          to={-1}
          className="flex items-center gap-2 bg-gray-200 text-gray-800 px-5 py-3 rounded-xl shadow hover:bg-gray-300 transition-all"
        >
          <ArrowLeft size={20} />
          Go Back
        </Link>
      </motion.div>

      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        src="https://cdni.iconscout.com/illustration/premium/thumb/404-error-illustration-download-in-svg-png-gif-file-formats--website-page-not-found-pack-illustrations-6694972.png"
        alt="Not Found"
        className="w-80 mt-10 drop-shadow-lg"
      />
    </div>
  );
}
