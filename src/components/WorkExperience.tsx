"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { WorkExperience as ContentfulWorkExperience } from "@/lib/contentful";

export default function WorkExperience({
  workExperience,
}: {
  workExperience: ContentfulWorkExperience[];
}) {
  return (
    <div className="space-y-8">
      {workExperience.map((job, index) => (
        <motion.div
          key={`${job.company}-${job.title}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="card"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <Briefcase className="h-5 w-5 text-gray-700 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {job.title}
                </h3>
              </div>

              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="font-medium">{job.company}</span>
              </div>

              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{job.period}</span>
              </div>
            </div>
          </div>

          {job.description && (
            <div className="space-y-3">
              {job.description.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-start">
                  <div className="w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
