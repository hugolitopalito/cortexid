import { Header } from './Header'
import { imagemData } from '../data/imagemData'
import { useState } from "react";
import { useTema } from '../context/ThemeContext';
import voltarDireita from '../assets/voltarDireita.png'
import voltarEsquerda from '../assets/voltarEsquerda.png'
import voltarDireitaBranco from '../assets/voltarDireitaBranco.png'
import voltarEsquerdaBranco from '../assets/voltarEsquerdaBranco.png'

export const Items = () => {

  const { tema, alternarTema } = useTema()

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
    <div data-theme={tema}>
      <Header />
      <div className="h-screen flex items-center justify-center bg-whiteBg dark:bg-purple">
        <button className='flex h-auto w-auto cursor-pointer' onClick={imagemAnterior}>
          <img src={tema == 'dark' ? voltarEsquerdaBranco : voltarEsquerda} alt="" />
        </button>
        <div className='w-full relative text-center w-xs'>
          <h1 className='py-5 font-bold text-2xl text-dark-blue font-OpenSans dark:text-whiteBg'>{imagemAtual.name}Nome dele</h1>
          <img src={imagemAtual.image} className='bg-blue rounded-4xl dark:bg-whiteBg'></img>
          <p className='py-5 font-OpenSans text-xl dark:text-whiteBg'>R${imagemAtual.price},00</p>
        </div>
        <button className='h-auto w-auto cursor-pointer' onClick={proximaImagem}>
          <img src={tema == 'dark' ? voltarDireitaBranco : voltarDireita} alt="" />
        </button>
      </div>
    </div>

  )
}