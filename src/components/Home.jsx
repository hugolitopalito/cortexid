import React from 'react'
import { Header } from './Header'
import { HomeMain } from './HomeMain'

export const Home = () => {
  return (
    <div className="h-screen mb-25">
      <Header/>
      <HomeMain />
    </div>
  )
}
