export type Member = {
  id: string
  name: string
}

export type ProjectStage = "기획" | "제작중" | "테스트중" | "배포준비" | "배포완료" | "판매시작"

export type Project = {
  id: string
  memberId: string
  projectName: string
  summary: string
  stage: ProjectStage
  weeklyGoal: string
  progress: number
  weeklyResult: string
  blockedPoint: string
  helpRequest: string
  linkLabel: string
  linkUrl: string
  updatedAt: string
}

export type KnowHow = {
  id: string
  title: string
  authorId: string
  tag: string
  tip: string
  createdAt: string
}

export type MeetingSummary = {
  totalMembers: number
  weeklyGoalAchieved: number
  monthlyDeployed: number
  monthlySelling: number
  currentRound: string
}

export type Meeting = {
  id: string
  title: string
  hostId: string
  participants: string[]
  date: string
  summary: string
  createdAt: string
}

export type KnowHowTag = "프롬프트" | "기획" | "개발" | "배포" | "수익화" | "디자인" | "운영"
