import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './route'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)