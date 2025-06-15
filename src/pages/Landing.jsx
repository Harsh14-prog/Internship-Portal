import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";

const Landing = () => {
  return (
    <div
      className="relative w-full min-h-screen"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
     
      <div className="absolute inset-0 bg-black/50" />

     
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4 pt-[100px] pb-24 min-h-[calc(100vh-64px)]"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Find the Right Internship for You
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-xl text-slate-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Browse top internships in tech, design, content, and more — all in one
          place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link to="/internships">
            <button className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg text-white text-lg font-medium shadow-md transition">
              Browse Internships
            </button>
          </Link>
        </motion.div>

        <motion.div
          className="absolute bottom-10 text-white/70 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <ArrowDownCircle size={32} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Landing;
