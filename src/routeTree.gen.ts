/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SplashDotsImport } from './routes/splash-dots'
import { Route as ReactTreeImport } from './routes/react-tree'
import { Route as PortfolioImport } from './routes/portfolio'
import { Route as HeroOneImport } from './routes/hero-one'
import { Route as HeroGridScrollImport } from './routes/hero-grid-scroll'
import { Route as BackgroundMaskingImport } from './routes/background-masking'
import { Route as AuroraGradientImport } from './routes/aurora-gradient'

// Create Virtual Routes

const SvgAnimationLazyImport = createFileRoute('/svg-animation')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const SvgAnimationLazyRoute = SvgAnimationLazyImport.update({
  id: '/svg-animation',
  path: '/svg-animation',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/svg-animation.lazy').then((d) => d.Route))

const SplashDotsRoute = SplashDotsImport.update({
  id: '/splash-dots',
  path: '/splash-dots',
  getParentRoute: () => rootRoute,
} as any)

const ReactTreeRoute = ReactTreeImport.update({
  id: '/react-tree',
  path: '/react-tree',
  getParentRoute: () => rootRoute,
} as any)

const PortfolioRoute = PortfolioImport.update({
  id: '/portfolio',
  path: '/portfolio',
  getParentRoute: () => rootRoute,
} as any)

const HeroOneRoute = HeroOneImport.update({
  id: '/hero-one',
  path: '/hero-one',
  getParentRoute: () => rootRoute,
} as any)

const HeroGridScrollRoute = HeroGridScrollImport.update({
  id: '/hero-grid-scroll',
  path: '/hero-grid-scroll',
  getParentRoute: () => rootRoute,
} as any)

const BackgroundMaskingRoute = BackgroundMaskingImport.update({
  id: '/background-masking',
  path: '/background-masking',
  getParentRoute: () => rootRoute,
} as any)

const AuroraGradientRoute = AuroraGradientImport.update({
  id: '/aurora-gradient',
  path: '/aurora-gradient',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/aurora-gradient': {
      id: '/aurora-gradient'
      path: '/aurora-gradient'
      fullPath: '/aurora-gradient'
      preLoaderRoute: typeof AuroraGradientImport
      parentRoute: typeof rootRoute
    }
    '/background-masking': {
      id: '/background-masking'
      path: '/background-masking'
      fullPath: '/background-masking'
      preLoaderRoute: typeof BackgroundMaskingImport
      parentRoute: typeof rootRoute
    }
    '/hero-grid-scroll': {
      id: '/hero-grid-scroll'
      path: '/hero-grid-scroll'
      fullPath: '/hero-grid-scroll'
      preLoaderRoute: typeof HeroGridScrollImport
      parentRoute: typeof rootRoute
    }
    '/hero-one': {
      id: '/hero-one'
      path: '/hero-one'
      fullPath: '/hero-one'
      preLoaderRoute: typeof HeroOneImport
      parentRoute: typeof rootRoute
    }
    '/portfolio': {
      id: '/portfolio'
      path: '/portfolio'
      fullPath: '/portfolio'
      preLoaderRoute: typeof PortfolioImport
      parentRoute: typeof rootRoute
    }
    '/react-tree': {
      id: '/react-tree'
      path: '/react-tree'
      fullPath: '/react-tree'
      preLoaderRoute: typeof ReactTreeImport
      parentRoute: typeof rootRoute
    }
    '/splash-dots': {
      id: '/splash-dots'
      path: '/splash-dots'
      fullPath: '/splash-dots'
      preLoaderRoute: typeof SplashDotsImport
      parentRoute: typeof rootRoute
    }
    '/svg-animation': {
      id: '/svg-animation'
      path: '/svg-animation'
      fullPath: '/svg-animation'
      preLoaderRoute: typeof SvgAnimationLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/aurora-gradient': typeof AuroraGradientRoute
  '/background-masking': typeof BackgroundMaskingRoute
  '/hero-grid-scroll': typeof HeroGridScrollRoute
  '/hero-one': typeof HeroOneRoute
  '/portfolio': typeof PortfolioRoute
  '/react-tree': typeof ReactTreeRoute
  '/splash-dots': typeof SplashDotsRoute
  '/svg-animation': typeof SvgAnimationLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/aurora-gradient': typeof AuroraGradientRoute
  '/background-masking': typeof BackgroundMaskingRoute
  '/hero-grid-scroll': typeof HeroGridScrollRoute
  '/hero-one': typeof HeroOneRoute
  '/portfolio': typeof PortfolioRoute
  '/react-tree': typeof ReactTreeRoute
  '/splash-dots': typeof SplashDotsRoute
  '/svg-animation': typeof SvgAnimationLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/aurora-gradient': typeof AuroraGradientRoute
  '/background-masking': typeof BackgroundMaskingRoute
  '/hero-grid-scroll': typeof HeroGridScrollRoute
  '/hero-one': typeof HeroOneRoute
  '/portfolio': typeof PortfolioRoute
  '/react-tree': typeof ReactTreeRoute
  '/splash-dots': typeof SplashDotsRoute
  '/svg-animation': typeof SvgAnimationLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/aurora-gradient'
    | '/background-masking'
    | '/hero-grid-scroll'
    | '/hero-one'
    | '/portfolio'
    | '/react-tree'
    | '/splash-dots'
    | '/svg-animation'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/aurora-gradient'
    | '/background-masking'
    | '/hero-grid-scroll'
    | '/hero-one'
    | '/portfolio'
    | '/react-tree'
    | '/splash-dots'
    | '/svg-animation'
  id:
    | '__root__'
    | '/'
    | '/aurora-gradient'
    | '/background-masking'
    | '/hero-grid-scroll'
    | '/hero-one'
    | '/portfolio'
    | '/react-tree'
    | '/splash-dots'
    | '/svg-animation'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AuroraGradientRoute: typeof AuroraGradientRoute
  BackgroundMaskingRoute: typeof BackgroundMaskingRoute
  HeroGridScrollRoute: typeof HeroGridScrollRoute
  HeroOneRoute: typeof HeroOneRoute
  PortfolioRoute: typeof PortfolioRoute
  ReactTreeRoute: typeof ReactTreeRoute
  SplashDotsRoute: typeof SplashDotsRoute
  SvgAnimationLazyRoute: typeof SvgAnimationLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AuroraGradientRoute: AuroraGradientRoute,
  BackgroundMaskingRoute: BackgroundMaskingRoute,
  HeroGridScrollRoute: HeroGridScrollRoute,
  HeroOneRoute: HeroOneRoute,
  PortfolioRoute: PortfolioRoute,
  ReactTreeRoute: ReactTreeRoute,
  SplashDotsRoute: SplashDotsRoute,
  SvgAnimationLazyRoute: SvgAnimationLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/aurora-gradient",
        "/background-masking",
        "/hero-grid-scroll",
        "/hero-one",
        "/portfolio",
        "/react-tree",
        "/splash-dots",
        "/svg-animation"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/aurora-gradient": {
      "filePath": "aurora-gradient.tsx"
    },
    "/background-masking": {
      "filePath": "background-masking.tsx"
    },
    "/hero-grid-scroll": {
      "filePath": "hero-grid-scroll.tsx"
    },
    "/hero-one": {
      "filePath": "hero-one.tsx"
    },
    "/portfolio": {
      "filePath": "portfolio.tsx"
    },
    "/react-tree": {
      "filePath": "react-tree.tsx"
    },
    "/splash-dots": {
      "filePath": "splash-dots.tsx"
    },
    "/svg-animation": {
      "filePath": "svg-animation.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
