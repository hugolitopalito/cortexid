import React from 'react'
import { Header } from './Header'
import { HomeMain } from './HomeMain'
import { useTema } from '../context/ThemeContext'

export const Home = () => {

  const { tema, alternarTema } = useTema()

  return (
    <div data-theme={tema}>
      <div className="h-screen bg-whiteBg dark:bg-purple">
        <Header />
        <HomeMain />
      </div>
    </div>
  )
}
