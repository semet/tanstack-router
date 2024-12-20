import { createLazyFileRoute } from '@tanstack/react-router'

import { DrawingSvg, MaskedSvgAnimation } from '@/components'

export const Route = createLazyFileRoute('/svg-animation')({
  component: SvgAnimation
})

function SvgAnimation() {
  return (
    <>
      <MaskedSvgAnimation />
      <DrawingSvg />
    </>
  )
}
