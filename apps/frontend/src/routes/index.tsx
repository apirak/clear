import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  return (
    <div className="flex h-screen items-center justify-center bg-(--surface-0)">
      <div className="text-center">
        <h1 className="mb-2 text-3xl font-bold text-(--sea-ink)">Clear</h1>
        <p className="mb-8 text-(--sea-ink-soft)">เลือกบทบาทของคุณ</p>
        <div className="flex gap-4">
          <Link
            to="/teacher"
            className="rounded-2xl border border-[rgba(79,184,178,0.3)] bg-[rgba(79,184,178,0.14)] px-10 py-6 text-center no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]"
          >
            <div className="text-lg font-semibold text-(--lagoon-deep)">ครู</div>
            <div className="mt-1 text-sm text-(--sea-ink-soft)">Teacher</div>
          </Link>
          <Link
            to="/student"
            className="rounded-2xl border border-[rgba(47,106,74,0.2)] bg-white/50 px-10 py-6 text-center no-underline transition hover:-translate-y-0.5 hover:border-[rgba(47,106,74,0.35)]"
          >
            <div className="text-lg font-semibold text-(--sea-ink)">นักเรียน</div>
            <div className="mt-1 text-sm text-(--sea-ink-soft)">Student</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
