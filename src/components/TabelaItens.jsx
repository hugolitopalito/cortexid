import { useState } from 'react'
import { useTema } from '../context/ThemeContext'
import { Link } from 'react-router-dom'

export const TabelaItens = () => {

    const { tema } = useTema()


    return (
        <div data-theme={tema}>
            <div className='h-screen bg-whiteBg'>
                <div className='flex justify-between items-center px-10 font-OpenSans'>
                    <h1 className='font-bold text-5xl text-blue'>Itens</h1>
                    <div className='font-bold text-3xl text-whiteBg bg-blue rounded-full w-50 h-10 text-center items-center cursor-pointer'>
                        <Link to='/cadastroItens'>Criar +</Link>
                    </div>
                </div>

                <div className='flex font-bold text-3xl gap-80 pl-50 pt-30 items-center text-blue'>
                    <h2>Nome</h2>
                    <h2>Preço</h2>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
