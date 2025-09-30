"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TechTag from "./TechTag";
import Link from "next/link";
export default function ProjectsList({ projects }) {
  
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
        projects.map(({ id, fields: project }, index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card hover:shadow-xl transition-all duration-300 group"
          >
            <Link href={`/projects/${project.slug}`}>
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <Image
                  src={`https:${project.coverImage?.fields.file.url}`}
                  alt={project.name}
                  width={300}
                  height={200}
                />
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-900 transition-colors">
                {project.name}
              </h3>

              <p className="text-gray-600 mb-4">
                {/* {project.description} */}
              </p>

              {project.technologies && (
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <TechTag
                      key={tech.fields.name}
                      name={tech.fields.name}
                      logoUrl={tech.fields.technologyLogo.fields.file.url}
                    />
                  ))}
                </div>
              )}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
