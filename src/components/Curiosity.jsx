import React from 'react'
import { Header } from './Header'
import { useTema } from '../context/ThemeContext'

export const Curiosity = () => {

  const { tema } = useTema()

  return (
    <div data-theme={tema}>
      <Header />
      <div className='bg-whiteBg dark:bg-purple h-screen pt-20'>
        <div className='font-Roboto flex flex-col items-center justify-center gap-4 text-justify'>
          <div>
            <h1 className='font-bold font-OpenSans text-4xl md:pt-15 md:text-5xl'>
              Curiosidades
            </h1>
          </div>
          <div className='md:flex md:gap-40 md:pt-15 ' >
            <div className='flex flex-col items-center gap-3 w-xs font-Roboto md:text-xl font-Roboto md:w-3xl'>
              <p >
                Prosopagnosia consiste em uma desordem neurológica em que o indivíduo perde a capacidade de reconhecer faces, sem reconhecer a fisionomia das pessoas, e até mesmo do seu próprio rosto, até que outro estímulo (como o sonoro, pela voz) seja identificado.
              </p>
              <p>
                O intuito do projeto é criar um chapéu com câmera integrada para auxiliar pessoas com dificuldades de reconhecimento facial. O dispositivo captura e armazena imagens de pessoas escolhidas em um banco de dados e, depois, consegue reconhecê-las automaticamente.
              </p>
              <p>
                O foco é oferecer mais autonomia no dia a dia, permitindo que identifiquem pessoas de forma prática e discreta.
              </p>
            </div>
            <div className='flex items-center justify-center'>
              <iframe className='h-45 rounded-3xl mt-5 md:mt-0 md:h-95 md:w-2xl' src="https://www.youtube.com/embed/c8rgT7UU2tM?si=nWQRBWTJwdNkQWhL&amp;start=53" frameBorder="0" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
