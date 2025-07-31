import React from 'react'
import { Header } from './Header'
import email from '../assets/email.png'
import senha from '../assets/senha.png'
import editar from '../assets/editar.png'
import nome from '../assets/nome.png'
import { useTema } from '../context/ThemeContext'

export const Conta = () => {

    const {tema} = useTema()

    return (
        <div data-theme={tema}>
            <Header />
            <div className='flex justify-center items-center h-screen dark:bg-purple pt-15'>
                <div className='bg-blue text-whiteBg rounded-4xl pt-10 px-5 w-2xs dark:bg-dark-blue '>
                    <div className='text-center justify-center items-center flex flex-col gap-2'>
                        <img src="#" className='bg-whiteBg h-30 w-32 rounded-full' alt="" />
                        <button className='underline'>Alterar imagem</button>
                    </div>
                    <div className='flex justify-between items-center pt-8 border-b'>
                        <img className='h-8' src={nome} alt="" />
                        <p className='text-start'>Nome</p>
                        <button>
                        <img src={editar} alt="" />
                        </button>
                    </div>
                    <div className='flex justify-between items-center pt-10 border-b'>
                        <img className='h-7' src={email} alt="" />
                        <p className='text-start'>E-mail</p>
                        <button>
                        <img src={editar} alt="" />
                        </button>
                    </div>
                    <div className='flex justify-between items-center pt-10 border-b'>
                        <img  src={senha} alt="" />
                        <p className='text-start'>Senha</p>
                        <button>
                        <img src={editar} alt="" />
                        </button>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className='bg-whiteBg text-blue text-lg font-OpenSans font-bold py-4 px-20 rounded-4xl my-10 dark:bg-light-blue dark:text-whiteBg'>
                            Salvar
                        </button>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}
