import { useState } from 'react'
import { Link } from 'react-router-dom'
import hamburguer from '../assets/hamburguer.png'
import voltar from '../assets/voltar.png'
import modoClaroMobile from '../assets/modoClaroMobile.png'

export const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  const Menu = () => {
    if (showMenu === false) {
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }
  return (
    <div className='w-xl'>
      <nav className='bg-light-blue-nav flex justify-between items-center px-2 fixed w-full h-auto z-50'>
        <Link to="/" ><span className='font-Oswald font-bold text-3xl' >CortexID</span></Link>
        <button>
          <img className='py-3' src={hamburguer} alt="ícone de mais opções" onClick={Menu} />
        </button>
      </nav>
      {showMenu && <div className='w-1/2 bg-blue/96 h-screen fixed right-0 z-50' >
        <div className='flex justify-between pb-5'>
          <button >
            <img className='object-contain h-10 w-20' src={voltar} alt="botão de voltar" onClick={Menu} />
          </button>
          <button>
            <img className='object-contain h-20 w-25' src={modoClaroMobile} alt="botão de alterar tema" />
          </button>
        </div>
        <div className='flex flex-col text-whiteBg gap-10 text-Open Sans font-bold px-5 text-xl'>
          <Link to="/itens"><span>Items</span></Link>
          <Link to='/tutorial'> <span>Tutorial</span></Link>
          <Link to='/contato'><span>Contato</span></Link>
          <Link to='/referencias'><span>Referência</span></Link>
          <Link to='/jogo'><span>Jogo</span></Link>
          <Link><span>Conta</span></Link>
        </div>
      </div>}
    </div>
  )
}
