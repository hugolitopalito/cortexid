import React from 'react'
import hamburguer from '../assets/hamburguer.png'

export const Header = () => {
  return (
    <div>
        <nav className='bg-light-nav flex justify-around items-center'>
        <h1 className='font-Oswald font-bold'>CortexID</h1>
        <img className='  w-auto h-auto max-w-50px max-h-50px' src={hamburguer} alt="ícone de mais opções" />
      </nav>
    </div>
  )
}
