import { useState } from 'react'
import hamburguer from '../assets/hamburguer.png'
import voltar from '../assets/voltar.png'
import modoClaroMobile from '../assets/modoClaroMobile.png'

export const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  const Menu = ()=>{
    if(showMenu === false){
      setShowMenu(true)
    }else{
      setShowMenu(false)
    }
  }
  return (
    <div className='w-xl'>
      <nav className='bg-light-blue-nav flex justify-between items-center px-2 fixed w-full h-auto z-50'>
        <span className='font-Oswald font-bold text-3xl' >CortexID</span>
        <button>
          <img className='py-3' src={hamburguer} alt="ícone de mais opções" onClick={Menu} />
        </button>
      </nav>
      {showMenu && <div className=' bg-blue/96 h-screen flex flex-col fixed w-2/3 ml-30 px-3 gap-6 z-50' >
        <div className='flex gap-10 items-center'>
          <button>
            <img className='object-contain h-10 w-10' src={voltar} alt="botão de voltar" onClick={Menu}/>
          </button>
          <button>
            <img className='object-contain h-20 w-20' src={modoClaroMobile} alt="botão de alterar tema" />
          </button>
        </div>
        <div className='flex flex-col text-whiteBg gap-6 text-Open Sans font-bold px-3 text-xl'>
          <span>Items</span>
          <span>Tutorial</span>
          <span>Contato</span>
          <span>Referência</span>
          <span>Jogo</span>
        </div>
      </div>}
    </div>
  )
}
