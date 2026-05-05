"use client";

import type { Project } from "@/types";
import { members } from "@/data/members";
import { getStageColor, formatDate } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const member = members.find((m) => m.id === project.memberId);
  const stageColor = getStageColor(project.stage);

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-slate-200 hover:border-blue-300 hover:-translate-y-1">
      {/* 카드 헤더 */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
            {project.projectName}
          </h3>
          <p className="text-sm text-slate-500 mt-1 font-medium">{member?.name || "Unknown"}</p>
        </div>
        <span
          className={`px-3 py-1.5 rounded-full text-xs font-bold ${stageColor} shadow-sm`}
        >
          {project.stage}
        </span>
      </div>

      {/* 프로젝트 설명 */}
      <p className="text-sm text-slate-600 mb-5 line-clamp-2 leading-relaxed">
        {project.summary}
      </p>

      {/* 진행률 섹션 */}
      <div className="mb-5">
        <div className="flex justify-between text-sm mb-2">
          <span className="font-semibold text-slate-500">진행률</span>
          <span className={`font-bold ${project.progress >= 90 ? 'text-green-600' : project.progress >= 70 ? 'text-blue-600' : project.progress >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
            {project.progress}%
          </span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
          <div
            className={`h-3 rounded-full transition-all duration-500 ${project.progress >= 90 ? 'bg-gradient-to-r from-green-400 to-green-500' : project.progress >= 70 ? 'bg-gradient-to-r from-blue-400 to-blue-500' : project.progress >= 50 ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' : 'bg-gradient-to-r from-red-400 to-red-500'}`}
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      {/* 상세 정보 섹션 */}
      <div className="space-y-4 mb-5">
        {/* 주간 목표 */}
        <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
          <p className="text-xs font-bold text-blue-600 mb-1">🎯 주간 목표</p>
          <p className="text-sm text-slate-700 font-medium">{project.weeklyGoal}</p>
        </div>

        {/* 주간 결과 */}
        {project.weeklyResult && (
          <div className="bg-green-50 rounded-xl p-3 border border-green-100">
            <p className="text-xs font-bold text-green-600 mb-1">✅ 이번 주 결과</p>
            <p className="text-sm text-slate-700">{project.weeklyResult}</p>
          </div>
        )}

        {/* 차단 사항 */}
        {project.blockedPoint && (
          <div className="bg-red-50 rounded-xl p-3 border border-red-100">
            <p className="text-xs font-bold text-red-600 mb-1">🚧 막힌 지점</p>
            <p className="text-sm text-slate-700">{project.blockedPoint}</p>
          </div>
        )}

        {/* 도움 요청 */}
        {project.helpRequest && (
          <div className="bg-orange-50 rounded-xl p-3 border border-orange-100">
            <p className="text-xs font-bold text-orange-600 mb-1">🙋 도움 요청</p>
            <p className="text-sm text-slate-700">{project.helpRequest}</p>
          </div>
        )}
      </div>

      {/* 푸터 */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-400 font-medium">
          업데이트: {formatDate(project.updatedAt)}
        </span>
        {project.linkUrl && (
          <a
            href={project.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline transition-all group/link"
          >
            {project.linkLabel || "링크 보기"}
            <span className="group-hover/link:translate-x-1 transition-transform">→</span>
          </a>
        )}
      </div>
    </div>
  );
}
