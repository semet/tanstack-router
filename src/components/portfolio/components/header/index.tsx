import { Link } from '@tanstack/react-router'

export const Header = () => {
  return (
    <header className="fixed top-0 z-[9999] w-full bg-white/60 px-14 py-4">
      <nav className="flex w-full justify-between">
        <h1 className="text-2xl font-black tracking-wider text-slate-600">
          Logo
        </h1>
        <ul className="flex gap-4">
          {MENUS.map((menu) => (
            <li key={menu.id}>
              <Link
                href={menu.href}
                className="text-slate-600"
              >
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

const MENUS = [
  {
    id: 1,
    label: 'Home',
    href: '/portfolio'
  },
  {
    id: 2,
    label: 'About',
    href: '/portfolio/#about'
  },
  {
    id: 3,
    label: 'Contact',
    href: '/portfolio/#contact'
  },
  {
    id: 4,
    label: 'Projects',
    href: '/portfolio/#projects'
  }
]
