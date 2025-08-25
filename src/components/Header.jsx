import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import hamburguer from '../assets/hamburguer.png'
import hamburguerBranco from '../assets/hamburguerBranco.png'
import voltar from '../assets/voltar.png'
import modoClaroMobile from '../assets/modoClaroMobile.png'
import modoEscuroMobile from '../assets/modoEscuroMobile.png'
import { useTema } from '../context/ThemeContext'
import { useWidth } from '../context/WidthContext'

export const Header = () => {

  const { tema, alternarTema } = useTema()

  const [showMenu, setShowMenu] = useState(false)

  const Menu = () => {
    if (showMenu === false) {
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }

  const { isMobile } = useWidth()

  return (
    <div className='w-xl' data-theme={tema}>
      <nav className='bg-light-blue-nav flex justify-between items-center px-4 fixed w-full h-auto z-50 dark:bg-dark-blue'>
        <Link to="/" ><span className='font-Oswald font-bold text-3xl dark:text-whiteBg md:text-5xl' >CortexID</span></Link>
        {isMobile == true ? <button>
          <img className='py-3 cursor-pointer' src={tema == 'dark' ? hamburguerBranco : hamburguer} alt="ícone de mais opções" onClick={Menu} />
        </button> : <div className='flex items-center gap-30 justify-between'>
         <div className='flex gap-20 font-bold text-2xl font-OpenSans'>
         <NavLink to="/itens" className={({isActive})=>isActive ? 'text-blue dark:text-light-blue' : 'dark:text-whiteBg'}><span>Itens</span></NavLink>
          <NavLink to='/tutorial' className={({isActive})=>isActive ? 'text-blue dark:text-light-blue' : 'dark:text-whiteBg'}> <span>Tutorial</span></NavLink>
          <NavLink to='/contato' className={({isActive})=>isActive ? 'text-blue dark:text-light-blue' : 'dark:text-whiteBg'}><span>Contato</span></NavLink>
          <NavLink to='/referencias' className={({isActive})=>isActive ? 'text-blue dark:text-light-blue' : 'dark:text-whiteBg'}><span>Referência</span></NavLink>
          <NavLink to='/jogo' className={({isActive})=>isActive ? 'text-blue dark:text-light-blue' : 'dark:text-whiteBg'}><span>Jogo</span></NavLink>
         </div>
          <img className='object-contain h-20 w-25 cursor-pointer' src={tema == 'dark' ? modoEscuroMobile : modoClaroMobile} alt="botão de alterar tema" onClick={alternarTema} />
        </div>}
      </nav>
      {showMenu && isMobile && <div className='w-1/2 bg-blue/96 h-screen fixed right-0 z-50 dark:bg-light-blue/96' >
        <div className='flex justify-between pb-5'>
          <button >
            <img className='object-contain h-10 w-20' src={voltar} alt="botão de voltar" onClick={Menu} />
          </button>
          <button>
            <img className='object-contain h-20 w-25 cursor-pointer' src={tema == 'dark' ? modoEscuroMobile : modoClaroMobile} alt="botão de alterar tema" onClick={alternarTema} />
          </button>
        </div>
        <div className='flex flex-col text-whiteBg gap-10 text-Open Sans font-bold px-5 text-xl'>
          <NavLink to="/itens" className={({isActive})=>isActive ? 'text-light-blue dark:text-blue' : 'dark:text-whiteBg'}><span>Itens</span></NavLink>
          <NavLink to='/tutorial'className={({isActive})=>isActive ? 'text-light-blue dark:text-blue' : 'dark:text-whiteBg'}> <span>Tutorial</span></NavLink>
          <NavLink to='/contato' className={({isActive})=>isActive ? 'text-light-blue dark:text-blue' : 'dark:text-whiteBg'}><span>Contato</span></NavLink>
          <NavLink to='/referencias' className={({isActive})=>isActive ? 'text-light-blue dark:text-blue' : 'dark:text-whiteBg'}><span>Referência</span></NavLink>
          <NavLink to='/jogo' className={({isActive})=>isActive ? 'text-light-blue dark:text-blue' : 'dark:text-whiteBg'}><span>Jogo</span></NavLink>
        </div>
      </div>}
    </div>
  )
}
