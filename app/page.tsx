import Header from "@/components/dashboard/header";
import ProjectBoard from "@/components/dashboard/project-board";
import KnowHowSection from "@/components/dashboard/knowhow-section";
import MeetingBoard from "@/components/dashboard/meeting-board";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        {/* 헤더 섹션 */}
        <Header />
        
        {/* 프로젝트 보드 - 메인 콘텐츠 */}
        <ProjectBoard />
        
        {/* 하단 섹션 - 2 컬럼 레이아웃 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <KnowHowSection />
          <MeetingBoard />
        </div>
      </div>
    </main>
  );
}
