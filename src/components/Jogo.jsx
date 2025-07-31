import React from 'react'
import jogar from '../assets/jogar.png'
import { Header } from './Header'
import { useTema } from '../context/ThemeContext'

export const Jogo = () => {

  const {tema} = useTema()

  return (
    <div data-theme={tema}>
      <Header />
      <div className='h-screen pt-25 dark:bg-purple'>
        <div className='flex flex-col items-center justify-center'>
          <div className='text-blue font-OpenSans w-sm dark:text-whiteBg'>
            <h1 className='font-bold text-3xl text-center'>Prepare-se para embarcar em uma jornada mágica e cheia de diversão!</h1>
            <p className='text-center px-10 py-5'>Em CortexID, você escolhe seu
              personagem favorito e parte em uma missão mágica pela floresta.
              Colete itens especiais para montar o chapéu mais incrível de todos!</p>
          </div>
          <iframe className='objetc-fill max-w-xm min-h-50 rounded-3xl mt-3' src="https://www.youtube.com/embed/c8rgT7UU2tM?si=nWQRBWTJwdNkQWhL&amp;start=53" frameborder="0" ></iframe>
          <a className='flex items-center justify-center gap-4 text-whiteBg text-3xl bg-blue rounded-4xl px-10 py-3 mt-5 dark:bg-light-blue' href="https://www.google.com/?hl=pt_BR">Jogar <img src={jogar} alt="" /></a>
        </div>
      </div>
    </div>
  )
}
