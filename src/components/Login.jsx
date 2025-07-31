import React from 'react'
import { Link } from 'react-router-dom'
import email from '../assets/email.png'
import senha from '../assets/senha.png'

export const Login = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-whiteBg'>
            <div className='bg-blue text-whiteBg rounded-4xl py-10 px-5'>
                <form className='flex text-center items-center flex-col w-3xs'>
                    <h1 className='text-3xl font-Oswald font-bold'>Login</h1>
                    <div className='flex gap-3 border-b-1 mt-10'>
                        <img src={email} alt="foto de caixa de mensagens " className='h-full w-full ' />
                        <input type="email" placeholder='E-mail ' className='outline-none' />
                    </div>
                    <div className='flex pt-5 gap-2 border-b-1'>
                        <img src={senha} alt="senha" className='h-full w-full' />
                        <input type="password" placeholder='Senha ' className='outline-none' />
                    </div>
                    <div className='pt-8 gap-3'>
                        <button className='bg-whiteBg text-blue font-bold text-xl font-Open Sans rounded-full px-25 py-4 justify-content'>
                            <Link to='/'><input type="submit" value="Entrar" /></Link>
                        </button>
                    </div>
                </form>
                <span className='flex justify-center items-center py-5 '>Não possui uma conta?<Link to="/cadastro" className='text-light-blue'>Cadastre-se</Link></span>
            </div>
        </div>
    )
}
