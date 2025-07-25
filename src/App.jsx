import React from 'react'
import { Home } from './components/Home'
import { Items } from './components/Items'
import { Cadatro } from './components/Cadastro'
import './index.css'

export const App = () => {
  return (
    <div className='bg-whiteBg '>
      <meta className="viewport" content="width=device-width, initial-scale=1.0" />
      <Home/>
      <Items/>
      <Cadatro/>
    </div>
  )
}
