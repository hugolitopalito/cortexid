import React from 'react'
import { Link } from 'react-router-dom'
import chapeu from '../assets/chapeu.png'
export const HomeMain = () => {
    return (
        <div className='flex justify-center items-center flex-col pt-20'>
            <div className='justify-center rounded-full w-3xs h-3xs drop-shadow-blue drop-shadow-2xl/70'>
            <img className='' src={chapeu} alt="Imagem do chapéu" />
            </div>
            <div>
            <h2 className='font-Open Sans font-bold text-blue w-3xs text-3xl'>Você reconhece todo mundo & eles não</h2>
            <p className='font-Roboto justify-items-start mt-4 w-xs text-lg'>Ajude a devolver rostos às memórias.
                Milhões de pessoas vivem com prosopagnosia, a “cegueira facial”.
                Elas não reconhecem rostos — nem de amigos, nem da própria família.
                Para elas, cada encontro é um primeiro encontro
            </p>
            </div>
            <div className='flex justify-center pt-10'>
            <button className='font-Open Sans font-bold  bg-blue rounded-full w-3xs p-2 '>
            
            <Link to="/login" className='text-white text-center text-2xl'>Saiba Mais</Link>
            </button>
            </div>
        </div>
    )
}
