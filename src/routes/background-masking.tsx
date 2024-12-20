import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/background-masking')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <section className="relative h-screen">
      <div
        className="absolute inset-0 bg-white"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23c3b7d7' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          maskImage:
            'linear-gradient(180deg, rgba(15,63,106,0) 0%, rgba(0,212,255,1) 82%)'
        }}
      />
      <Header />
      <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/3 transform gap-4 px-12">
        <div className="flex w-[50%] flex-col items-start gap-4">
          <h1 className="text-8xl font-bold text-slate-800">Rocking JS</h1>
          <p className="text-slate-500">
            This is a simple example of background masking using CSS.
          </p>
          <div className="flex gap-4">
            <button className="h-fit rounded-full bg-sky-400 px-6 py-3 text-white hover:bg-sky-500">
              Getting Started
            </button>
            <div className="flex gap-4 rounded bg-slate-200 px-4 py-3">
              <pre className="text-slate-600">npx create rocking-js</pre>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <TerminalWindow />
        </div>
      </div>
    </section>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white p-4 px-12">
      <h1 className="text-2xl font-bold text-slate-800">RJS</h1>
      <nav>
        <ul className="flex gap-4">
          {MENUS.map((menu) => (
            <li key={menu.id}>
              <Link
                href={menu.link}
                className="text-slate-500 hover:text-indigo-600"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

function TerminalWindow() {
  return (
    <div className="flex h-72 flex-col gap-4 rounded-md bg-slate-800 text-white shadow-lg">
      <div className="flex items-center gap-4 border-b border-slate-700 p-4">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
      <div className="p-4">
        <pre className="text-slate-400">~/rocking-js</pre>
        <pre className="text-slate-400">❯ npx create rocking-js</pre>
        <pre className="text-green-400">
          ❯ project name:{' '}
          <span className="text-white">
            awesome-project
            <motion.span
              animate={{
                opacity: [0, 1, 0],
                transition: { duration: 1.5, repeat: Infinity }
              }}
              className="font-black"
            >
              _
            </motion.span>
          </span>
        </pre>
        <pre className="text-slate-400">
          =========================================================
        </pre>
      </div>
    </div>
  )
}

const MENUS = [
  {
    id: 1,
    name: 'Docs',
    link: '/'
  },
  {
    id: 2,
    name: 'Components',
    link: '/components'
  },
  {
    id: 3,
    name: 'Blog',
    link: '/blog'
  },
  {
    id: 4,
    name: 'Showcase',
    link: '/showcase'
  }
]
