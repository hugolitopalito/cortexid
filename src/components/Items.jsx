import {Header} from './Header'
import { imagemData } from '../data/imagemData'
import { useState } from "react";
import voltarDireita from '../assets/voltarDireita.png'
import voltarEsquerda from '../assets/voltarEsquerda.png'

export const Items = () => {
  const [indice, setIndice] = useState(0)

  const proximaImagem = () => {
    setIndice((prev) => (prev + 1) % imagemData.length)
    console.log("avancei a imagem")
  }

  const imagemAnterior = () => {
    setIndice((prev) => (prev - 1 + imagemData.length) % imagemData.length)
    console.log("voltei a imagem")
  }

  const imagemAtual = imagemData[indice]
  return (
    <div>
      <Header />
      <div className="h-screen flex items-center justify-center">
        <button className='flex h-auto w-auto' onClick={imagemAnterior}>
          <img src={voltarEsquerda} alt="" />
        </button>
        <div className='w-full relative text-center w-xs'>
          <h1 className='py-5 font-bold text-2xl text-dark-blue font-Open Sans'>{imagemAtual.name}Nome dele</h1>
          <img src={imagemAtual.image} className='bg-blue rounded-4xl'></img>
          <p className='py-5 font-Open Sans text-xl'>R${imagemAtual.price},00</p>
        </div>
        <button className='h-auto w-auto ' onClick={proximaImagem}>
          <img src={voltarDireita} alt="" />
        </button>
      </div>
    </div>

  )
}
