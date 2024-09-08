"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';

const AnimatedText = ({ text }) => {
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };
  
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };
  
  return (
    <motion.h2
      className="text-2xl md:text-3xl font-bold text-white text-center mb-4"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

const Component = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 rounded-xl shadow-2xl p-8 max-w-xl w-full"
      >
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-lg shadow-lg p-4 mb-6"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center flex items-center justify-center">
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 mr-2" />
            Drop Listed
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 ml-2" />
          </h1>
        </motion.div>
        
        <AnimatedText text="Congratulations!" />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white text-xl mb-8 text-center"
        >
          Your item has been successfully listed.
        </motion.p>
        
        {showButton && (
           <Link href="\clubshome"> 
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center"
          >
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              aria-label="Continue to next step"
            >
              Continue
            </button>
          </motion.div>
          </Link>
        )}
      </motion.div>
    </div>
  );
};

export default Component;