import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Router } from "react-router-dom"

import { App } from './App.jsx'
import { ErrorPage } from './components/ErrorPage.jsx'
import { Items } from './components/Items.jsx'
import { Tutorial } from './components/Tutorial.jsx'
import { Contato } from './components/Contato.jsx'
import { Referencias } from './components/Referencias.jsx'
import { Jogo } from './components/Jogo.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { WidthContext } from './context/WidthContext.jsx'
import { Curiosity } from './components/Curiosity.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: 'itens',
    element: <Items />
  },
  {
    path: 'tutorial',
    element: <Tutorial />
  },
  {
    path: 'contato',
    element: <Contato />
  },
  {
    path: 'referencias',
    element: <Referencias />
  },
  {
    path: 'jogo',
    element: <Jogo />
  },
  {
    path: 'curiosidade',
    element: <Curiosity />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <WidthContext>
        <RouterProvider router={router} />
      </WidthContext>
    </ThemeProvider>
  </StrictMode>,
)


