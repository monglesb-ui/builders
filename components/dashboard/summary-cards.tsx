"use client";

import { meetingSummary } from "@/data/meeting";

export default function SummaryCards() {
  const stats = [
    {
      label: "총 멤버",
      value: `${meetingSummary.totalMembers}명`,
      color: "bg-blue-500",
    },
    {
      label: "주간 목표 달성",
      value: `${meetingSummary.weeklyGoalAchieved}명`,
      color: "bg-green-500",
    },
    {
      label: "월간 배포 완료",
      value: `${meetingSummary.monthlyDeployed}명`,
      color: "bg-purple-500",
    },
    {
      label: "월간 수익 발생",
      value: `${meetingSummary.monthlySelling}명`,
      color: "bg-orange-500",
    },
    {
      label: "현재 라운드",
      value: meetingSummary.currentRound.replace("현재 ", ""),
      color: "bg-pink-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.color} rounded-lg p-4 text-white shadow-md hover:shadow-lg transition-shadow`}
        >
          <p className="text-sm opacity-90">{stat.label}</p>
          <p className="text-2xl font-bold mt-1">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
