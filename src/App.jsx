import React from 'react'
import { Home } from './components/Home'
import { useTema } from './context/ThemeContext'
import './index.css'

export const App = () => {

  const { tema, alternarTema } = useTema()

  return (
    <div className='bg-whiteBg dark:bg-purple' data-theme={tema}>
      <meta className="viewport" content="width=device-width, initial-scale=1.0" />
      <Home/>
    </div>
  )
}
