import { createFileRoute } from '@tanstack/react-router'

import {
  About,
  Experience,
  Footer,
  Header,
  HeroSection,
  Portfolio
} from '@/components/portfolio'

export const Route = createFileRoute('/portfolio')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <main className="relative overflow-x-clip">
      <Header />
      <HeroSection />
      <Portfolio />
      <Experience />
      <About />
      <Footer />
    </main>
  )
}
