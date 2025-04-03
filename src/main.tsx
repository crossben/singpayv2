import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from '@/routes/router'
import Header from '@/shared/header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
  </StrictMode>,
)
