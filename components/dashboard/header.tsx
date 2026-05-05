"use client";

import { meetingSummary } from "@/data/meeting";
import SummaryCards from "./summary-cards";

export default function Header() {
  return (
    <header className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">빌더스 대시보드</h1>
          <p className="text-gray-600 mt-1">{meetingSummary.currentRound}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">오늘의 날짜</p>
          <p className="text-lg font-semibold text-gray-900">
            {new Date().toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
              weekday: "long",
            })}
          </p>
        </div>
      </div>
      <SummaryCards />
    </header>
  );
}
