"use client";

import { knowhows } from "@/data/knowhows";
import { members } from "@/data/members";
import type { KnowHowTag } from "@/types";

const tagColors: Record<KnowHowTag, string> = {
  프롬프트: "bg-purple-100 text-purple-700 border-purple-200",
  기획: "bg-blue-100 text-blue-700 border-blue-200",
  개발: "bg-green-100 text-green-700 border-green-200",
  배포: "bg-orange-100 text-orange-700 border-orange-200",
  수익화: "bg-yellow-100 text-yellow-700 border-yellow-200",
  디자인: "bg-pink-100 text-pink-700 border-pink-200",
  운영: "bg-gray-100 text-gray-700 border-gray-200",
};

export default function KnowHowSection() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
      {/* 섹션 헤더 */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">💡 노하우 공유</h2>
          <p className="text-sm text-slate-500 mt-1">멤버들의 실전 팁과 인사이트</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-bold rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all">
          <span>+</span>
          <span>작성하기</span>
        </button>
      </div>
      
      {/* 노하우 리스트 */}
      <div className="space-y-4">
        {knowhows.map((knowhow) => {
          const author = members.find((m) => m.id === knowhow.authorId);
          const tagColor = tagColors[knowhow.tag as KnowHowTag];

          return (
            <div
              key={knowhow.id}
              className="group bg-gradient-to-br from-slate-50 to-white rounded-xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${tagColor}`}>
                  {knowhow.tag}
                </span>
                <span className="text-sm font-semibold text-slate-600">{author?.name}</span>
                <span className="text-xs text-slate-400 ml-auto">
                  {new Date(knowhow.createdAt).toLocaleDateString("ko-KR")}
                </span>
              </div>
              <h3 className="font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                {knowhow.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {knowhow.tip}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
