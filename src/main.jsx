import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider, Router} from "react-router-dom"

import {App} from './App.jsx'
import { Cadatro } from './components/Cadastro.jsx'
import { ErrorPage } from './components/ErrorPage.jsx'


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
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)


