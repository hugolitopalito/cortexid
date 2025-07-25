import React from 'react'
import hamburguer from '../assets/hamburguer.png'

export const Header = () => {
  return (
    <nav className='bg-light-blue-nav flex justify-between px items-center px-1 rem fixed w-full h-auto'>
        <span className='font-Oswald font-bold text-2xl' >CortexID</span>
        <img className='py-1' src={hamburguer} alt="ícone de mais opções" />
    </nav>
  )
}
