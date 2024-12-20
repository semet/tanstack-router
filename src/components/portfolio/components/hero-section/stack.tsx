export const Stacks = () => {
  return (
    <div className="flex gap-10">
      {STACKS.map((stack) => (
        <div
          key={stack.id}
          className="flex items-center gap-2"
        >
          <img
            src={stack.image}
            alt={stack.title}
            className="h-8 w-8"
          />
          <span className="text-white">{stack.title}</span>
        </div>
      ))}
      {STACKS.map((stack) => (
        <div
          key={stack.id}
          className="flex items-center gap-2"
        >
          <img
            src={stack.image}
            alt={stack.title}
            className="h-8 w-8"
          />
          <span className="text-white">{stack.title}</span>
        </div>
      ))}
    </div>
  )
}

const STACKS = [
  {
    id: 1,
    title: 'React',
    image:
      'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png'
  },
  {
    id: 2,
    title: 'Next.js',
    image:
      'https://cdn1.iconfinder.com/data/icons/akar-vol-1/24/nextjs-fill-512.png'
  },
  {
    id: 3,
    title: 'Tailwind CSS',
    image:
      'https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg'
  },
  {
    id: 4,
    title: 'Remix',
    image: 'https://remix.run/_brand/remix-letter-glowing.png'
  },
  {
    id: 5,
    title: 'Vite',
    image: 'https://img.icons8.com/?size=96&id=YO3YqSaTOu5K&format=png'
  },
  {
    id: 6,
    title: 'TypeScript',
    image: 'https://cdn.worldvectorlogo.com/logos/typescript.svg'
  },
  {
    id: 7,
    title: 'JavaScript',
    image:
      'https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-1024.png'
  },
  {
    id: 8,
    title: 'Laravel',
    image:
      'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/194_Laravel_logo_logos-512.png'
  },
  {
    id: 9,
    title: 'PHP',
    image:
      'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/256_Php_logo-1024.png'
  },
  {
    id: 10,
    title: 'Jest',
    image:
      'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/jest-js-icon.png'
  },
  {
    id: 11,
    title: 'Node.js',
    image:
      'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'
  },
  {
    id: 12,
    title: 'MySql',
    image: 'https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-256.png'
  },
  {
    id: 13,
    title: 'Git',
    image:
      'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-1024.png'
  },
  {
    id: 14,
    title: 'Github',
    image:
      'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-1024.png'
  },
  {
    id: 15,
    title: 'Vue.js',
    image:
      'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/367_Vuejs_logo-512.png'
  },
  {
    id: 16,
    title: 'Nuxt',
    image: 'https://nuxt.com/assets/design-kit/icon-green.svg'
  },
  {
    id: 17,
    title: 'MUI',
    image: 'https://v4.mui.com/static/logo_raw.svg'
  }
]
