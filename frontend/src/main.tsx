import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/global.scss'
import Router from './router/router'
import Header from './components/header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Router />
  </StrictMode>,
)