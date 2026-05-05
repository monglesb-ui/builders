import KnowHowSection from '@/components/dashboard/knowhow-section';
import MeetingBoard from '@/components/dashboard/meeting-board';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* 메인 레이아웃 - 사이드바 + 콘텐츠 */}
      <div className="flex">
        {/* 사이드바 */}
        <aside className="fixed left-0 top-0 h-full w-72 bg-white shadow-xl border-r border-slate-200 p-6 overflow-y-auto">
          {/* 로고 영역 */}
          <div className="mb-8">
            <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              빌더스
            </h1>
            <p className="text-xs text-slate-500 mt-1">Vibe Coding Dashboard</p>
          </div>

          {/* 네비게이션 */}
          <nav className="space-y-2 mb-8">
            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-bold shadow-md">
              <span>📊</span>
              <span>대시보드</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-xl font-medium transition-colors">
              <span>👥</span>
              <span>멤버</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-xl font-medium transition-colors">
              <span>💡</span>
              <span>노하우</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-xl font-medium transition-colors">
              <span>📅</span>
              <span>모임</span>
            </a>
          </nav>

          {/* 통계 카드 - 세로 배치 */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium opacity-90">총 멤버</span>
                <span className="text-lg">👥</span>
              </div>
              <p className="text-2xl font-extrabold">7 명</p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-4 text-white shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium opacity-90">주간 목표 달성</span>
                <span className="text-lg">✅</span>
              </div>
              <p className="text-2xl font-extrabold">5 명</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium opacity-90">월간 배포 완료</span>
                <span className="text-lg">🚀</span>
              </div>
              <p className="text-2xl font-extrabold">3 명</p>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl p-4 text-white shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium opacity-90">월간 수익 발생</span>
                <span className="text-lg">💰</span>
              </div>
              <p className="text-2xl font-extrabold">2 명</p>
            </div>

            <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl p-4 text-white shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium opacity-90">현재 라운드</span>
                <span className="text-lg">📍</span>
              </div>
              <p className="text-lg font-extrabold">4 주차</p>
            </div>
          </div>

          {/* 하단 정보 */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-4 border border-slate-200">
              <p className="text-xs text-slate-500 font-medium">오늘의 날짜</p>
              <p className="text-sm font-bold text-slate-800 mt-1">
                {new Date().toLocaleDateString("ko-KR", {
                  month: 'long',
                  day: 'numeric',
                  weekday: 'long'
                })}
              </p>
            </div>
          </div>
        </aside>

        {/* 메인 콘텐츠 영역 */}
        <main className="flex-1 ml-72 p-8">
          <div className="max-w-7xl mx-auto">
            {/* 상단 헤더 */}
            <header className="mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-extrabold text-slate-800">프로젝트 대시보드</h2>
                  <p className="text-slate-600 mt-2 text-lg">7 명의 참가자가 진행 중인 프로젝트 현황</p>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-slate-200">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-slate-600">실시간 업데이트</span>
                </div>
              </div>
            </header>

            {/* 프로젝트 보드 */}
            <section className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {/* ProjectBoard 컴포넌트의 내용을 직접 렌더링 */}
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-md p-6 border border-slate-200">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-800">프로젝트 {i + 1}</h3>
                        <p className="text-sm text-slate-500 mt-1">멤버 {i + 1}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">진행중</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">프로젝트 설명이 들어갑니다.</p>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium text-slate-500">진행률</span>
                        <span className="font-bold text-blue-600">{70 + i * 5}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full" style={{ width: `${70 + i * 5}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 하단 섹션 - 2 컬럼 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 노하우 섹션 */}
              <KnowHowSection />
              
              {/* 모임 진행 보드 */}
              <MeetingBoard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
