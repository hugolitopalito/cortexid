import React from 'react'
import { Header } from './Header'

export const Home = () => {
  return (
    <div className="h-screen bg-whiteBg">
      <Header/>
      <main className='p-0 10 '>
        <h2>
          Você reconhece todo mundo & eles não
        </h2>
        <p>Ajude a devolver rostos às memórias.
          Milhões de pessoas vivem com prosopagnosia, a “cegueira facial”.
          Elas não reconhecem rostos — nem de amigos, nem da própria família.
          Para elas, cada encontro é um primeiro encontro
        </p>
        <button className='bg-blue rounded-md'>
          <a href="" className='text-white text-center'>
            Saiba Mais
          </a>
          </button>
      </main>
    </div>
  )
}
