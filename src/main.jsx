import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider, Router} from "react-router-dom"

import {App} from './App.jsx'
import { Cadatro } from './components/Cadastro.jsx'
import { ErrorPage } from './components/ErrorPage.jsx'
import { Login } from './components/Login.jsx'
import { Items } from './components/Items.jsx'
import { Tutorial } from './components/Tutorial.jsx'
import { Contato } from './components/Contato.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path:'cadastro',
    element: <Cadatro/>
  },
  {
    path:'login',
    element: <Login/>
  },
  {
    path:'itens',
    element: <Items/>
  },
  {
    path:'tutorial',
    element: <Tutorial/>
  },
  {
    path:'contato',
    element: <Contato/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)


