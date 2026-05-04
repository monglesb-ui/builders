export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 1) return '방금 전'
  if (diffMins < 60) return `${diffMins}분 전`
  if (diffHours < 24) return `${diffHours}시간 전`
  if (diffDays < 7) return `${diffDays}일 전`
  
  return date.toLocaleDateString('ko-KR', {
    month: 'short',
    day: 'numeric',
  })
}

export function getStageColor(stage: string): string {
  const colors: Record<string, string> = {
    '기획': 'bg-gray-100 text-gray-800',
    '제작중': 'bg-blue-100 text-blue-800',
    '테스트중': 'bg-yellow-100 text-yellow-800',
    '배포준비': 'bg-purple-100 text-purple-800',
    '배포완료': 'bg-green-100 text-green-800',
    '판매시작': 'bg-red-100 text-red-800',
  }
  return colors[stage] || 'bg-gray-100 text-gray-800'
}

export function getProgressColor(progress: number): string {
  if (progress >= 90) return 'bg-green-500'
  if (progress >= 70) return 'bg-blue-500'
  if (progress >= 50) return 'bg-yellow-500'
  return 'bg-red-500'
}

export function getTagColor(tag: string): string {
  const colors: Record<string, string> = {
    '프롬프트': 'bg-purple-100 text-purple-800',
    '기획': 'bg-blue-100 text-blue-800',
    '개발': 'bg-green-100 text-green-800',
    '배포': 'bg-orange-100 text-orange-800',
    '수익화': 'bg-red-100 text-red-800',
    '디자인': 'bg-pink-100 text-pink-800',
    '운영': 'bg-gray-100 text-gray-800',
  }
  return colors[tag] || 'bg-gray-100 text-gray-800'
}
