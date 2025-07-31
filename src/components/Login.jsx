import React from 'react'
import { Link } from 'react-router-dom'
import email from '../assets/email.png'
import senha from '../assets/senha.png'

export const Login = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-whiteBg'>
            <div className='bg-blue text-whiteBg rounded-4xl py-10 px-5'>
                <form className='flex text-center items-center flex-col w-3xs md:w-xs'>
                    <h1 className='text-3xl font-Oswald font-bold md:text-5xl'>Login</h1>
                    <div className='flex gap-3 border-b-1 mt-10 md:text-xl md:mt-15'>
                        <img src={email} alt="foto de caixa de mensagens " className='h-full w-full ' />
                        <input type="email" placeholder='E-mail ' className='outline-none' />
                    </div>
                    <div className='flex pt-5 gap-2 border-b-1 md:text-xl md:pt-8 md:mb-10'>
                        <img src={senha} alt="senha" className='h-full w-full' />
                        <input type="password" placeholder='Senha ' className='outline-none' />
                    </div>
                    <div className='pt-8 gap-3 md:py-4'>
                        <button className='bg-whiteBg text-blue font-bold text-xl font-Open Sans rounded-full px-25 py-4 justify-content md:text-2xl cursor-pointer'>
                            <Link to='/'><input type="submit" value="Entrar" className='cursor-pointer'/></Link>
                        </button>
                    </div>
                </form>
                <span className='flex justify-center items-center py-5  md:text-xl'>Não possui uma conta?<Link to="/cadastro" className='text-light-blue'>Cadastre-se</Link></span>
            </div>
        </div>
    )
}
