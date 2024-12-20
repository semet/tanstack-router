import Lenis from '@studio-freight/lenis'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useEffect, useRef } from 'react'
export const Route = createRootRoute({
  component: App
})

function App() {
  const lenisRef = useRef<Lenis | null>(null)
  useEffect(() => {
    const lenis = new Lenis()

    lenisRef.current = lenis

    // Animation frame loop
    const onRaf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(onRaf)
    }
    requestAnimationFrame(onRaf)

    return () => lenis.destroy()
  }, [])
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
}
