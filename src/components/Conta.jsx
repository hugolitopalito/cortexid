import React from 'react'
import { Header } from './Header'
import email from '../assets/email.png'
import senha from '../assets/senha.png'
import editar from '../assets/editar.png'
import nome from '../assets/nome.png'

export const Conta = () => {
    return (
        <div>
            <Header />
            <div className='flex justify-center items-center h-screen'>
                <div className='bg-blue text-whiteBg rounded-4xl py-15 px-5 w-2xs'>
                    <div className='text-center justify-center items-center flex flex-col'>
                        <img src="" className='bg-whiteBg h-30 w-32 rounded-full' alt="" />
                        <button className='border-b'>Alterar imagem</button>
                    </div>
                    <div className='flex justify-between items-center pt-10 border-b'>
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
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}
