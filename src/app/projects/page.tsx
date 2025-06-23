'use client';

import ProjectCard from '@/components/ProjectCard';
import { ProjectCardData } from '@/data/ProjectCardData';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <div className="mx-12 xl:mx-24 my-8">
      <h1>Projects</h1>
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8`}>
        {ProjectCardData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            <ProjectCard
              title={project.title}
              href={project.href}
              coverSrc={project.coverSrc}
              description={project.description}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
