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
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-5 border border-gray-200">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-gray-900">{project.projectName}</h3>
          <p className="text-sm text-gray-500">{member?.name || "Unknown"}</p>
        </div>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${stageColor}`}
        >
          {project.stage}
        </span>
      </div>

      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
        {project.summary}
      </p>

      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-500">진행률</span>
            <span className="font-medium">{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        <div className="text-sm">
          <p className="text-gray-500 mb-1">주간 목표</p>
          <p className="text-gray-700">{project.weeklyGoal}</p>
        </div>

        {project.blockedPoint && (
          <div className="text-sm">
            <p className="text-red-500 mb-1">차단 사항</p>
            <p className="text-gray-700">{project.blockedPoint}</p>
          </div>
        )}

        {project.helpRequest && (
          <div className="text-sm">
            <p className="text-orange-500 mb-1">도움 요청</p>
            <p className="text-gray-700">{project.helpRequest}</p>
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs text-gray-400">
          업데이트: {formatDate(project.updatedAt)}
        </span>
        {project.linkUrl && (
          <a
            href={project.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:text-blue-600 font-medium"
          >
            {project.linkLabel || "링크 보기"} →
          </a>
        )}
      </div>
    </div>
  );
}
