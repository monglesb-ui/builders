import { KnowHow } from '@/types'

export const knowhows: KnowHow[] = [
  {
    id: '1',
    title: 'Vercel 에서 Next.js 배포할 때 환경 변수 설정하는 법',
    authorId: '5',
    tag: '배포',
    tip: 'Dashboard > Settings > Environment Variables 에서 설정하면 됩니다. 재배포 필요!',
    createdAt: '2024-01-14T10:00:00',
  },
  {
    id: '2',
    title: '프롬프트 엔지니어링 팁 - 역할 부여하기',
    authorId: '1',
    tag: '프롬프트',
    tip: '"너는 전문가야" 라고만 하지 말고, 구체적인 역할과 맥락을 줘야 결과가 훨씬 좋아집니다.',
    createdAt: '2024-01-13T15:30:00',
  },
  {
    id: '3',
    title: '토스페이먼츠 심사에서 자주 거절되는 이유',
    authorId: '2',
    tag: '수익화',
    tip: '서비스 화면 캡처를 충분히 업로드하세요. 특히 결제 흐름이 명확해야 합니다.',
    createdAt: '2024-01-12T09:00:00',
  },
  {
    id: '4',
    title: 'Tailwind CSS 에서 커스텀 컬러 쓰는 법',
    authorId: '6',
    tag: '개발',
    tip: 'tailwind.config.js 에 colors 추가하거나, 인라인으로 style={{ backgroundColor }} 써도 됩니다.',
    createdAt: '2024-01-11T14:00:00',
  },
  {
    id: '5',
    title: '노션 API 로 데이터 연동할 때 주의점',
    authorId: '2',
    tag: '개발',
    tip: 'rate limit 이 있으므로, 캐싱을 꼭 구현하세요. Redis 나 메모리 캐시 추천!',
    createdAt: '2024-01-10T11:00:00',
  },
]
