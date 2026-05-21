import { createFileRoute } from '@tanstack/react-router'
import { TeacherInbox } from '../features/teacher/TeacherInbox'

export const Route = createFileRoute('/prototype/teacher-view')({
  component: PrototypePage,
})

function PrototypePage() {
  return <TeacherInbox />
}
