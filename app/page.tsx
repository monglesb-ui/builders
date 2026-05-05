import Header from "@/components/dashboard/header";
import ProjectBoard from "@/components/dashboard/project-board";
import KnowHowSection from "@/components/dashboard/knowhow-section";
import MeetingBoard from "@/components/dashboard/meeting-board";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <ProjectBoard />
        <KnowHowSection />
        <MeetingBoard />
      </div>
    </main>
  );
}
