import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './routeTree.gen'
import './index.css'

const root = document.getElementById('root')!
createRoot(root).render(
  <RouterProvider router={router} />
)