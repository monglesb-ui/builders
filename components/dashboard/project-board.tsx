"use client";

import { projects } from "@/data/projects";
import ProjectCard from "./project-card";

export default function ProjectBoard() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">프로젝트 보드</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
