"use client";

import { projects } from "@/data/projects";
import ProjectCard from "./project-card";

export default function ProjectBoard() {
  return (
    <section className="mb-10">
      {/* 섹션 헤더 */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">프로젝트 보드</h2>
          <p className="text-slate-500 mt-1">7 명의 참가자가 진행 중인 프로젝트 현황</p>
        </div>
        <div className="hidden md:flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-slate-200">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-slate-600">실시간 업데이트</span>
        </div>
      </div>
      
      {/* 프로젝트 카드 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
