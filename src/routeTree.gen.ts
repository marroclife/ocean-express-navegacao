import { Route as RootRoute } from './routes/__root'
import { createRouter } from '@tanstack/react-router'

export const router = createRouter({
  routeTree: RootRoute,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}