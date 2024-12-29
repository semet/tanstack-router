import { createFileRoute } from '@tanstack/react-router'

import { HoverSvg } from '@/components'

export const Route = createFileRoute('/hover-svg')({
  component: RouteComponent
})

function RouteComponent() {
  return <HoverSvg />
}
