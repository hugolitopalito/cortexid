import React from 'react'
import jogar from '../assets/jogar.png'
import { Header } from './Header'
import { useTema } from '../context/ThemeContext'
import { useWidth } from '../context/WidthContext'

export const Jogo = () => {

  const { isMobile } = useWidth()

  const { tema } = useTema()

  return (
    <div data-theme={tema}>
      <Header />
      <div className='h-screen pt-25 dark:bg-purple bg-whiteBg md:pt-35'>
        <div className='flex flex-col items-center justify-center md:flex-row md:px-20'>
          <div className='text-blue font-OpenSans w-sm dark:text-whiteBg md:w-4xl md:items-start'>
            <h1 className='font-bold text-3xl text-center md:text-5xl md:w-3xl'>Prepare-se para embarcar em uma jornada mágica e cheia de diversão!</h1>
            <p className='text-center px-10 py-5 text-lg md:text-3xl md:w-3xl md:py-10'>Em CortexID Game, você escolhe seu
              personagem favorito e parte em uma missão mágica pela floresta.
              Colete itens especiais para montar o chapéu mais incrível de todos!</p>
          </div>
          <div className='md:pt-30'>
          <iframe className='objetc-fill max-w-xm min-h-50 rounded-3xl mt-3 md:w-2xl md:min-h-90' src="https://www.youtube.com/embed/gFEj54TF_fc?si=snX4qNUSXRmIwffp&amp;start=60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            {isMobile == true ? <a className='flex items-center justify-center gap-4 text-whiteBg text-3xl bg-blue rounded-4xl px-10 py-3 mt-10 dark:bg-light-blue' href="https://www.google.com/?hl=pt_BR">Jogar <img src={jogar} alt="" /></a> :
             <div className='flex items-center justify-center'><a className='flex items-center justify-center gap-4 text-whiteBg text-3xl bg-blue rounded-4xl px-15 py-3 mt-10 dark:bg-light-blue' href="https://www.google.com/?hl=pt_BR">Jogar <img src={jogar} alt="" /></a></div>}
          </div>
        </div>
      </div>
    </div>
  )
}

