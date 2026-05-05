import { MeetingSummary, Meeting } from '@/types'

export const meetings: Meeting[] = [
  {
    id: 1,
    date: '2024-01-15',
    topic: '프로젝트 기획 및 기술 스택 선정',
    presenterId: '1',
    note: '기본 환경 설정 완료',
  },
  {
    id: 2,
    date: '2024-01-22',
    topic: 'MVP 개발 및 배포 전략',
    presenterId: '2',
    note: '초안 배포 예정',
  },
  {
    id: 3,
    date: '2024-01-29',
    topic: '유저 피드백 반영 및 개선',
    presenterId: '3',
    note: '',
  },
  {
    id: 4,
    date: '2024-02-05',
    topic: '마케팅 및 홍보 전략',
    presenterId: '4',
    note: 'SNS 채널 개설',
  },
]

export const meetingSummary: MeetingSummary = {
  totalMembers: 7,
  weeklyGoalAchieved: 5,
  monthlyDeployed: 3,
  monthlySelling: 1,
  currentRound: '4 회차',
}

export const meetingSchedule = [
  { time: '10:00~10:10', title: '전체 현황 확인' },
  { time: '10:10~11:10', title: '7 명 진행 공유' },
  { time: '11:10~11:40', title: '문제 해결 / 노하우 공유' },
  { time: '11:40~12:00', title: '다음 주 목표 확정' },
]

export const commonQuestions = [
  '이번 주 목표를 달성했나요?',
  '막힌 점은 무엇인가요?',
  '다른 멤버에게 어떤 도움을 줄 수 있나요?',
  '다음 주까지 무엇을 끝낼 건가요?',
]

export const operatingPrinciples = [
  '공개적으로 공유하세요',
  '완벽함보다 속도를 우선하세요',
  '막힘은 빨리 알리세요',
  '노하우는 바로 기록하세요',
  '배포/판매까지가 미션입니다',
]
