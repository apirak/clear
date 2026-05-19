import { createFileRoute } from '@tanstack/react-router'
import { VariantA } from '../prototype/variant-a'

export const Route = createFileRoute('/prototype/teacher-view')({
  component: PrototypePage,
})

function PrototypePage() {
  return <VariantA />
}
