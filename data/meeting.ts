import { MeetingSummary } from '@/types'

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
