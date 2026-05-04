# 빌더클럽 바이브코딩 대시보드 PRD

## 1. 제품명
빌더클럽 바이브코딩 대시보드

## 2. 제품 목적
7명의 참가자가 각자 진행 중인 프로그램/서비스를 공개적으로 관리하고, 매주 목표·진척·막힘·노하우를 공유하며, 4주 안에 실제 배포 또는 판매까지 도달하도록 돕는 운영형 대시보드

## 3. 핵심 문제
일반적인 기록 도구는 많지만, 이 모임에 필요한 것은 단순 기록이 아니라 아래입니다.

- 누가 무엇을 만들고 있는지 한눈에 보기
- 이번 주 목표와 실제 결과 비교
- 막힌 점과 도움 요청 공개
- 노하우 축적
- 배포/판매까지의 긴장감 유지

## 4. 핵심 사용자

### 관리자
- 모임 전체를 운영하는 사람
- 전체 프로젝트 상태 확인
- 회차 및 상단 지표 관리
- 노하우 정리

### 참가자
- 자신의 프로젝트 상태 업데이트
- 노하우 작성
- 다른 사람의 진행 상황 확인

## 5. MVP 목표
첫 버전은 모임에서 바로 사용할 수 있는 수준이면 충분합니다.

### MVP 성공 기준
- 7명의 프로젝트 카드가 한 화면에서 보인다
- 각 카드의 목표/진척/막힘이 바로 읽힌다
- 노하우 공유가 가능하다
- 토요일 모임 때 이 화면 하나로 진행 가능하다

## 6. 핵심 화면

### A. 헤더 영역
표시 요소:
- 서비스명
- 모임 설명
- 요약 통계 카드 5개

통계 카드:
- 참여자 7명
- 이번 주 목표 달성
- 이번 달 배포 완료
- 판매 시작
- 현재 회차

### B. 참가자 프로젝트 보드
가장 큰 핵심 화면

#### 카드 필드
- 이름
- 프로젝트명
- 한 줄 설명
- 상태
- 이번 주 목표
- 진척률
- 이번 주 결과
- 막힌 지점
- 도움 요청
- 링크 버튼
- 마지막 업데이트 일시

#### 상태값
- 기획
- 제작중
- 테스트중
- 배포준비
- 배포완료
- 판매시작

### C. 노하우 공유
리스트형 권장

#### 항목
- 제목
- 작성자
- 태그
- 한 줄 팁

#### 태그 예시
- 프롬프트
- 기획
- 개발
- 배포
- 수익화
- 디자인
- 운영

### D. 이번 주 모임 진행 보드
#### 구성
- 오늘의 진행 순서
- 공통 질문
- 운영 원칙 배너

예:
- 10:00~10:10 전체 현황 확인
- 10:10~11:10 7명 진행 공유
- 11:10~11:40 문제 해결 / 노하우 공유
- 11:40~12:00 다음 주 목표 확정

## 7. 기능 요구사항

### 필수 기능
1. 프로젝트 카드 조회
2. 프로젝트 카드 수정
3. 노하우 목록 조회
4. 노하우 등록/수정/삭제
5. 상단 통계 카드 표시
6. 진행률 표시
7. 상태 변경

### 후순위 기능
1. 로그인
2. 권한 분리
3. 프로젝트 상세 페이지
4. 검색/필터
5. 모바일 최적화 강화
6. 회차별 히스토리

## 8. 비기능 요구사항
- 한 화면에서 핵심 정보가 보여야 함
- UI는 심플하고 강해야 함
- 카드 가독성이 최우선
- 페이지 로딩이 빨라야 함
- 수정 흐름이 복잡하지 않아야 함

## 9. 데이터 모델

### Member
```ts
type Member = {
  id: string
  name: string
}
```

### Project
```ts
type Project = {
  id: string
  memberId: string
  projectName: string
  summary: string
  stage: "기획" | "제작중" | "테스트중" | "배포준비" | "배포완료" | "판매시작"
  weeklyGoal: string
  progress: number
  weeklyResult: string
  blockedPoint: string
  helpRequest: string
  linkLabel: string
  linkUrl: string
  updatedAt: string
}
```

### KnowHow
```ts
type KnowHow = {
  id: string
  title: string
  authorId: string
  tag: string
  tip: string
  createdAt: string
}
```

### MeetingSummary
```ts
type MeetingSummary = {
  totalMembers: number
  weeklyGoalAchieved: number
  monthlyDeployed: number
  monthlySelling: number
  currentRound: string
}
```

## 10. 추천 기술 스택

### 프론트엔드
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui

### 상태관리
- useState로 시작
- 필요 시 Zustand

### 저장 방식
- 1차: 로컬 더미 데이터
- 2차: Supabase

### 배포
- Vercel

## 11. 폴더 구조 초안
```bash
app/
  page.tsx

components/
  dashboard/
    header.tsx
    summary-cards.tsx
    project-board.tsx
    project-card.tsx
    knowhow-section.tsx
    meeting-board.tsx

data/
  members.ts
  projects.ts
  knowhows.ts
  meeting-summary.ts

types/
  member.ts
  project.ts
  knowhow.ts
  meeting.ts

lib/
  utils.ts
```

## 12. 개발 단계

### 1단계
정적 UI 완성

### 2단계
더미 데이터 연결

### 3단계
프로젝트 수정 모달 추가

### 4단계
노하우 등록 기능 추가

### 5단계
Supabase 연결

### 6단계
로그인/권한 분리

## 13. Claude Code / Codex 시작 프롬프트
```text
Next.js, TypeScript, Tailwind CSS, shadcn/ui로
'빌더클럽 바이브코딩 대시보드' 웹앱 MVP를 만들어줘.

요구사항:
- 메인 페이지 1개로 시작
- 상단에 서비스 제목과 통계 카드 5개
- 중앙에 7명의 프로젝트 카드가 보이는 grid
- 하단 왼쪽에 노하우 공유 리스트
- 하단 오른쪽에 이번 주 모임 진행 보드
- 각 프로젝트 카드는 이름, 프로젝트명, 설명, 상태, 이번 주 목표, 진행률, 이번 주 결과, 막힌 지점, 도움 요청, 링크 버튼 포함
- 더미 데이터는 별도 data 폴더에서 관리
- 컴포넌트 분리
- 심플하고 고급스러운 SaaS 대시보드 스타일
- 추후 수정 모달을 쉽게 붙일 수 있게 구조화
```

## 14. 가장 중요한 구현 원칙
이 대시보드는 예쁜 관리툴이 아니라 결과물을 배포하게 만드는 실행 보드여야 합니다.

그래서 모든 UI는 아래 질문에 답해야 합니다.

- 지금 누가 어디까지 왔는가
- 이번 주 무엇을 끝내야 하는가
- 무엇이 막히고 있는가
- 무엇을 도와야 하는가
- 배포/판매에 얼마나 가까워졌는가
