"use client";

import { motion } from "framer-motion";

export function AboutMe() {
  return (
  
      <div className=" container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">About</h2>
        </motion.div>

        {/* <div className="grid lg:grid-cols-2 gap-12 items-start"> */}
          {/* Left Section - Person Icon and Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="card grid grid-cols-1 lg:grid-cols-[150px_1fr] gap-4"
          >
            {/* Person Icon */}
            <div className="flex justify-center lg:justify-start col-span-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-8"
              >
                <div className="relative inline-block ">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-600">TS</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-white rounded-full px-3 py-1 shadow-md border border-gray-200">
                    <span className="text-sm font-medium text-gray-700">
                      Taher Said
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Text Content */}
            <div className="text-black space-y-4 shrink ">
              <p className="text-lg leading-relaxed">
                {`I’m a full-stack developer who believes in always learning and growing.
                 I have a strong passion for JavaScript, React, and everything related to web development.
                  What excites me most is the mix of creativity, problem-solving, and technology—there’s always something new to explore. Outside of coding,
                   I enjoy reading and staying active.`}
              </p>
            </div>
          </motion.div>

          {/* Right Section - Instagram Style Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >

              
          </motion.div>
        {/* </div> */}
      </div>
  );
}
