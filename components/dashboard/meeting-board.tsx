"use client";

import { meetings } from "@/data/meeting";
import { members } from "@/data/members";
import { formatDate } from "@/lib/utils";

export default function MeetingBoard() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">모임 진행 현황</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  날짜
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  내용
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  발표자
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  비고
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {meetings.map((meeting) => {
                const presenter = members.find(
                  (m) => m.id === meeting.presenterId
                );
                return (
                  <tr key={meeting.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {formatDate(meeting.date)}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {meeting.topic}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {presenter?.name || "TBD"}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">
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
