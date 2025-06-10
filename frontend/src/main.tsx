import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/adaptive.scss'
import './assets/styles/global.scss'
import Router from './router/router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)