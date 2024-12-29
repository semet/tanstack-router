import { createFileRoute } from '@tanstack/react-router'

import { BasicGsapAnimation, SvgMorph } from '@/components'

export const Route = createFileRoute('/gsap-animation')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <main className="flex flex-col">
      <BasicGsapAnimation />
      <SvgMorph />
    </main>
  )
}
