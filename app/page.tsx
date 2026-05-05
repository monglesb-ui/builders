import Header from '@/components/dashboard/header';
import ProjectBoard from '@/components/dashboard/project-board';
import KnowHowSection from '@/components/dashboard/knowhow-section';
import MeetingBoard from '@/components/dashboard/meeting-board';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* 메인 레이아웃 - 단일 컬럼 */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* 헤더 영역 */}
        <Header />

        {/* 참가자 프로젝트 보드 */}
        <section className="mt-8">
          <ProjectBoard />
        </section>

        {/* 하단 섹션 - 2 컬럼 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* 노하우 섹션 */}
          <KnowHowSection />
          
          {/* 모임 진행 보드 */}
          <MeetingBoard />
        </div>
      </div>
    </div>
  );
}
