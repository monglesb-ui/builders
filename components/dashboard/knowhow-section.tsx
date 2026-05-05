"use client";

import { knowhows } from "@/data/knowhows";
import { members } from "@/data/members";
import type { KnowHowTag } from "@/types";

const tagColors: Record<KnowHowTag, string> = {
  프롬프트: "bg-purple-100 text-purple-700",
  기획: "bg-blue-100 text-blue-700",
  개발: "bg-green-100 text-green-700",
  배포: "bg-orange-100 text-orange-700",
  수익화: "bg-yellow-100 text-yellow-700",
  디자인: "bg-pink-100 text-pink-700",
  운영: "bg-gray-100 text-gray-700",
};

export default function KnowHowSection() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">노하우 공유</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {knowhows.map((knowhow) => {
          const author = members.find((m) => m.id === knowhow.authorId);
          const tagColor = tagColors[knowhow.tag as KnowHowTag];

          return (
            <div
              key={knowhow.id}
              className="bg-white rounded-lg shadow-md p-5 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${tagColor}`}>
                  {knowhow.tag}
                </span>
                <span className="text-sm text-gray-500">{author?.name}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {knowhow.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                {knowhow.tip}
              </p>
              <p className="text-xs text-gray-400 mt-3">
                {new Date(knowhow.createdAt).toLocaleDateString("ko-KR")}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
