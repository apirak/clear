import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/student')({
  component: StudentPage,
})

function StudentPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-(--surface-0)">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-(--sea-ink)">Student View</h1>
        <p className="mt-2 text-(--sea-ink-soft)">Coming soon</p>
      </div>
    </div>
  )
}
