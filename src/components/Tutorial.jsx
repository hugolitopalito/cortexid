import React from 'react'
import { useTema } from '../context/ThemeContext'
import { Header } from './Header'

export const Tutorial = () => {

    const { tema } = useTema()

    return (
        <div data-theme={tema}>
            <Header />
            <div className='flex items-center flex-col pt-20 h-screen bg-whiteBg dark:bg-purple md:flex md:flex-row md:pt-0 md:px-30 md:justify-between'>
                <div className='w-sm md:w-2xl md:mb-20'>
                    <div className='py-5 text-center md:text-start md:pl-5 md:pb-10'>
                        <h1 className='text-4xl font-OpenSans font-bold dark:text-whiteBg md:text-6xl'>Como usar?</h1>
                    </div>
                    <div className='flex-row flex gap-5 pt-3 dark:text-whiteBg'>
                        <h2 className='text-3xl  font-Oswald font-bold md:text-5xl'>1.</h2>
                        <p className='text-left font-Roboto md:text-xl'>Ajuste o chapéu para que fique de forma confortável para a sua utilização</p>
                    </div>
                    <div className='flex gap-5 items-center py-3 dark:text-whiteBg'>
                        <h2 className='text-3xl font-Oswald font-bold md:text-5xl'>2.</h2>
                        <p className='text-left font-Roboto md:text-xl'>Clique no botão instalado na lateral esquerda do chapéu para realizar o reconhecimento facial </p>
                    </div>
                    <div className='flex gap-5 items-center py-3 dark:text-whiteBg'>
                        <h2 className='text-3xl font-Oswald font-bold md:text-5xl'>3.</h2>
                        <p className='text-left font-Roboto md:text-xl'>Clique duas vezes no botão para cadastrar um novo rosto</p>
                    </div >
                    <div className='flex gap-5 items-center py-3 dark:text-whiteBg'>
                        <h2 className='text-3xl font-Oswald font-bold md:text-5xl'>4.</h2>
                        <p className='text-left font-Roboto md:text-xl'>Abra nosso aplicativo (CortexID) para nomear o rosto que deseja cadastrar</p>
                    </div>
                </div>
                <iframe className='h-45 rounded-3xl mt-5 md:mt-0 md:h-95 md:w-[45%]' src="https://www.youtube.com/embed/c8rgT7UU2tM?si=nWQRBWTJwdNkQWhL&amp;start=53" frameBorder="0" ></iframe>
            </div>
        </div>
    )
}
