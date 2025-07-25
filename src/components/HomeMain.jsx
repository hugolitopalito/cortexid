import React from 'react'
import chapeu from '../assets/chapeu.png'

export const HomeMain = () => {
    return (
        <div className='px-3 '>
            <div className='flex justify-center'>
            <img className=' pt-5' src={chapeu} alt="Imagem do chapéu" />
            </div>
            <div>
            <h2 className='font-Open Sans font-bold text-blue w-3xs text-3xl'>Você reconhece todo mundo & eles não</h2>
            <p className='font-Roboto justify-items-start mt-4 w-2xs'>Ajude a devolver rostos às memórias.
                Milhões de pessoas vivem com prosopagnosia, a “cegueira facial”.
                Elas não reconhecem rostos — nem de amigos, nem da própria família.
                Para elas, cada encontro é um primeiro encontro
            </p>
            </div>
            <div className='flex justify-center pt-10'>
            <button className='font-Open Sans font-bold text-xl bg-blue rounded-full px-20 py-2 '>
            <a href="../src/components/Cadastro.jsx" className='text-white text-center '>Saiba mais</a>
            </button>
            </div>
        </div>
    )
}
