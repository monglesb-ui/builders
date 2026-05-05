"use client";

import { meetings, meetingSchedule, commonQuestions, operatingPrinciples } from "@/data/meeting";
import { members } from "@/data/members";
import { formatDate } from "@/lib/utils";

export default function MeetingBoard() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
      {/* 섹션 헤더 */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">📅 모임 진행 현황</h2>
        <p className="text-sm text-slate-500 mt-1">매주 토요일, 함께 성장하는 시간</p>
      </div>
      
      {/* 진행 일정 카드 */}
      <div className="mb-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-5 border border-indigo-100">
        <h3 className="font-bold text-indigo-800 mb-4 flex items-center gap-2">
          <span>⏰</span>
          오늘의 진행 순서
        </h3>
        <div className="space-y-3">
          {meetingSchedule.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-sm font-bold text-indigo-600 bg-white px-3 py-1 rounded-full shadow-sm min-w-[100px] text-center">
                {item.time}
              </span>
              <span className="text-sm font-medium text-slate-700">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 공통 질문 카드 */}
      <div className="mb-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-100">
        <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2">
          <span>❓</span>
          공통 질문
        </h3>
        <ul className="space-y-2">
          {commonQuestions.map((question, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">{index + 1}.</span>
              <span className="text-sm text-slate-700">{question}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 운영 원칙 카드 */}
      <div className="mb-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-100">
        <h3 className="font-bold text-emerald-800 mb-4 flex items-center gap-2">
          <span>🎯</span>
          운영 원칙
        </h3>
        <ul className="space-y-2">
          {operatingPrinciples.map((principle, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-emerald-500">•</span>
              <span className="text-sm text-slate-700 font-medium">{principle}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* 회의 기록 테이블 */}
      <div>
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span>📝</span>
          지난 모임 기록
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                  날짜
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                  내용
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                  발표자
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                  비고
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {meetings.map((meeting) => {
                const presenter = members.find(
                  (m) => m.id === meeting.presenterId
                );
                return (
                  <tr key={meeting.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 text-sm text-slate-600 font-medium">
                      {formatDate(meeting.date)}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-800 font-medium">
                      {meeting.topic}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-700">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                        {presenter?.name || "TBD"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-500">
                      {meeting.note || "-"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
