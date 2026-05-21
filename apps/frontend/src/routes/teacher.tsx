import { createFileRoute } from '@tanstack/react-router'
import { TeacherInbox } from '../features/teacher/TeacherInbox'

export const Route = createFileRoute('/teacher')({
  component: TeacherPage,
})

function TeacherPage() {
  return <TeacherInbox />
}
