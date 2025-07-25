import React from 'react'
import { Home } from './components/Home'
import { Items } from './components/Items'
import './index.css'

export const App = () => {
  return (
    <div className=''>
      <meta className="viewport" content="width=device-width, initial-scale=1.0" />
      <Home/>
      <Items/>
    </div>
  )
}
