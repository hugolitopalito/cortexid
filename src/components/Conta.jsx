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
            <div className='flex justify-center items-center h-screen bg-whiteBg dark:bg-purple pt-15'>
                <div className='bg-blue text-whiteBg rounded-4xl pt-10 px-5 w-2xs dark:bg-dark-blue md:w-md'>
                    <div className='text-center justify-center items-center flex flex-col gap-2'>
                        <img src="#" className='bg-whiteBg h-30 w-32 rounded-full md:h-50 md:w-52' alt="" />
                        <button className='underline md:text-xl'>Alterar imagem</button>
                    </div>
                    <div className='flex justify-between items-center pt-8 border-b'>
                        <img className='h-8 md:h-10' src={nome} alt="" />
                        <p className='md:text-xl'>Nome</p>
                        <button>
                        <img src={editar} className='md:h-8 md:w-9' alt="" />
                        </button>
                    </div>
                    <div className='flex justify-between items-center pt-10 border-b'>
                        <img className='h-7 md:h-10 md:w-9' src={email} alt="" />
                        <p className='md:text-xl'>E-mail</p>
                        <button>
                        <img src={editar} className='md:h-8 md:w-9' alt="" />
                        </button>
                    </div>
                    <div className='flex justify-between items-center pt-10 border-b'>
                        <img  src={senha} className='md:h-8 md:h-9' alt="" />
                        <p className='md:text-xl'>Senha</p>
                        <button>
                        <img src={editar} className='md:h-8 md:w-9' alt="" />
                        </button>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className='bg-whiteBg text-blue text-lg font-OpenSans font-bold py-4 px-20 rounded-4xl my-10 dark:bg-light-blue dark:text-whiteBg md:text-2xl'>
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
