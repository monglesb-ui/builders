"use client";

import { meetingSummary } from "@/data/meeting";
import SummaryCards from "./summary-cards";

export default function Header() {
  return (
    <header className="mb-10">
      {/* 상단 타이틀 영역 */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
        <div>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            빌더스 대시보드
          </h1>
          <p className="text-slate-600 mt-2 text-lg font-medium">{meetingSummary.currentRound}</p>
        </div>
        <div className="text-right bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-4 border border-slate-200">
          <p className="text-sm text-slate-500 font-medium">오늘의 날짜</p>
          <p className="text-xl font-bold text-slate-800 mt-1">
            {new Date().toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
              weekday: "long",
            })}
          </p>
        </div>
      </div>
      
      {/* 통계 카드 섹션 */}
      <SummaryCards />
    </header>
  );
}
