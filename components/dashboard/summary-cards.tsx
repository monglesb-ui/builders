"use client";

import { meetingSummary } from "@/data/meeting";

export default function SummaryCards() {
  const stats = [
    {
      label: "총 멤버",
      value: `${meetingSummary.totalMembers}명`,
      gradient: "from-blue-500 to-blue-600",
      icon: "👥",
    },
    {
      label: "주간 목표 달성",
      value: `${meetingSummary.weeklyGoalAchieved}명`,
      gradient: "from-green-500 to-emerald-600",
      icon: "✅",
    },
    {
      label: "월간 배포 완료",
      value: `${meetingSummary.monthlyDeployed}명`,
      gradient: "from-purple-500 to-purple-600",
      icon: "🚀",
    },
    {
      label: "월간 수익 발생",
      value: `${meetingSummary.monthlySelling}명`,
      gradient: "from-orange-500 to-amber-600",
      icon: "💰",
    },
    {
      label: "현재 라운드",
      value: meetingSummary.currentRound.replace("현재 ", ""),
      gradient: "from-pink-500 to-rose-600",
      icon: "📍",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-2xl p-5 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br ${stat.gradient}`}
        >
          {/* 배경 데코레이션 */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
          <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/10 rounded-full translate-y-4 -translate-x-4" />
          
          {/* 콘텐츠 */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium opacity-90">{stat.label}</span>
              <span className="text-xl">{stat.icon}</span>
            </div>
            <p className="text-3xl font-extrabold tracking-tight">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
