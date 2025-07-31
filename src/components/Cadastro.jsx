import { Link } from 'react-router-dom'

import camera from '../assets/camera.png'
import email from '../assets/email.png'
import senha from '../assets/senha.png'
import confirmacao from '../assets/confirmacao.png'

export const Cadatro = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-whiteBg'>
      <div className='bg-blue text-whiteBg rounded-4xl py-10 px-5 md:py-10'>
        <form className='flex text-center justify-center items-center flex-col w-3xs md:w-md'>
          <h1 className='text-center text-3xl font-bold font-Oswald md:text-5xl'>Cadastre-se</h1>
          <div className='flex gap-3 border-b-1 mt-10 md:text-xl md:mt-15'>
            <img src={email} alt="foto de caixa de mensagens " className='h-full w-full '/>
            <input type="email" placeholder='E-mail 'className='outline-none'/>
          </div>
          <div className='flex pt-5 gap-2 border-b-1 md:text-xl md:pt-8'>
            <img src={senha} alt="senha" className='h-full w-full'/>
            <input type="password" placeholder='Senha ' className='outline-none'/>
          </div>
          <div className='flex pt-5 gap-2 border-b-1 md:text-xl md:pt-8'>
            <img src={confirmacao} alt="confirmação de senha" className='h-full w-full'/>
            <input type="password" placeholder='Confirme sua senha' className='outline-none'/>
          </div>
          <div className='flex pt-5 gap-3 md:text-xl md:pt-8'>
            <img src={camera} alt="foto de perfil" className='h-full w-full'/>
            <input type="" placeholder='Imagem de perfil' className='outline-none'/>
          </div>
          <div className='pt-5 gap-3 md:py-10 '>
            <button className='bg-whiteBg text-blue font-bold text-xl font-OpenSans rounded-full px-20 py-4 justify-content md:text-2xl'>
              <Link to='/' ><input type="submit" value="Cadastrar" /></Link>
            </button>
          </div>
        </form>
        <span className='flex justify-center items-center p-5 md:text-xl'>Já possui uma conta?<Link to="/login" className='text-light-blue'>Entrar</Link></span>
      </div>
    </div>
  )
}
