import React from 'react'
import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-whiteBg text-dark-blue'>
      <h1 className='font-bold font-Oswald text-3xl'>Página não encontrada :(</h1>
      <p className='font-Inter '>Por favor, tenter outra página</p>
    </div>
  )
}
