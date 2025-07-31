import React from 'react'
import { useTema } from '../context/ThemeContext'
import { Header } from './Header'

export const Tutorial = () => {

    const { tema, alternarTema } = useTema()

    return (
        <div data-theme={tema}>
            <Header />
            <div className='flex items-center flex-col pt-20 h-screen dark:bg-purple'>
                <div className='py-5'>
                    <h1 className='text-4xl font-Oswald font-bold dark:text-whiteBg'>Como usar?</h1>
                </div>
                <div className='flex-row flex gap-5 px-15 pt-3 w-md dark:text-whiteBg'>
                    <h2 className='text-3xl  font-Oswald font-bold'>1.</h2>
                    <p className='text-left font-Roboto'>Ajuste o chapéu para que fique de forma confortável para a sua utilização</p>
                </div>
                <div className='flex gap-5 items-center px-15 py-3 w-md dark:text-whiteBg'>
                    <h2 className='text-3xl font-Oswald font-bold'>2.</h2>
                    <p className='text-left font-Roboto'>Clique no botão instalado na lateral esquerda do chapéu para realizar o reconhecimento facial </p>
                </div>
                <div className='flex gap-5 items-center px-15 py-3 w-md dark:text-whiteBg'>
                    <h2 className='text-3xl font-Oswald font-bold'>3.</h2>
                    <p className='text-left font-Roboto'>Clique duas vezes no botão para cadastrar um novo rosto</p>
                </div >
                <div className='flex gap-5 items-center px-15 py-3 w-md dark:text-whiteBg'>
                    <h2 className='text-3xl font-Oswald font-bold'>4.</h2>
                    <p className='text-left font-Roboto'>Abra nosso aplicativo (CortexID) para nomear o rosto que deseja cadastrar</p>
                </div>
                <iframe className='objetc-fill h-45 rounded-3xl mt-5' src="https://www.youtube.com/embed/c8rgT7UU2tM?si=nWQRBWTJwdNkQWhL&amp;start=53" frameborder="0" ></iframe>
            </div>
        </div>
    )
}
