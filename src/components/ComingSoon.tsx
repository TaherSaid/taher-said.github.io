'use client'
import React from "react";
import { motion } from "framer-motion";

export function ComingSoon() {
  return (
    <div className="min-h-96 flex items-center justify-center">
      <motion.h1
        className="text-4xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Coming Soon
      </motion.h1>
    </div>
  );
}