import React from 'react'
import { useTema } from '../context/ThemeContext'
import voltar from '../assets/voltar.png'
import { Link } from 'react-router-dom'

export const CadastroItens = () => {

    const { tema } = useTema

    return (
        <div data-theme={tema}>
            <div className=' h-screen bg-whiteBg flex justify-center items-center'>
                <div className='bg-blue rounded-4xl w-3xl py-10'>
                    <div className='flex gap-15 items-center pl-10'>
                        <Link to='/itens'><img className='w-15 h-12 cursor-pointer' src={voltar} alt="" /></Link>
                        <h1 className='text-3xl text-whiteBg font-bold font-OpenSans'>Cadastrar Item</h1>
                    </div>
                    <form className='flex flex-col items-center justify-center gap-5 py-20'>
                        <img src="" alt="" className='w-50 h-50 bg-whiteBg ' />
                        <input type="file" />
                        <div className='flex flex-col text-whiteBg'>
                            <label className='font-bold text-2xl text-whiteBg'> Nome do Item</label>
                            <input type="text" className='border-b-1 border-whiteBg outline-none w-90' />
                        </div>
                        <div className='flex flex-col text-whiteBg'>
                            <label className='font-bold text-2xl text-whiteBg'>Preço</label>
                            <input type="text" className='border-b-1 border-whiteBg text-whiteBg outline-none w-90 ' placeholder='R$' />
                        </div>
                        <div className='font-bold text-3xl text-blue bg-whiteBg rounded-full flex items-center justify-center w-60 h-10 cursor-pointer'>
                            <input type="submit" value='Cadastrar' className='cursor-pointer' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
