import camera from '../assets/camera.png'
import email from '../assets/email.png'
import senha from '../assets/senha.png'
import confirmacao from '../assets/confirmacao.png'

export const Cadatro = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='bg-blue text-whiteBg rounded-4xl py-10 px-5 m-10'>
        <form className='flex text-center justify-center items-center flex-col w-3xs'>
          <h1 className='text-center text-3xl font-bold font-Oswald text-whiteBg'>Cadastre-se</h1>
          <div className='flex gap-3 border-b-1 mt-10'>
            <img src={email} alt="foto de caixa de mensagens " className='h-full w-full '/>
            <input type="email" placeholder='E-mail 'className='outline-none'/>
          </div>
          <div className='flex pt-5 gap-2 border-b-1'>
            <img src={senha} alt="senha" className='h-full w-full'/>
            <input type="password" placeholder='Senha ' className='outline-none'/>
          </div>
          <div className='flex pt-5 gap-2 border-b-1'>
            <img src={confirmacao} alt="confirmação de senha" className='h-full w-full'/>
            <input type="password" placeholder='Confirme sua senha' className='outline-none'/>
          </div>
          <div className='flex pt-5 gap-3'>
            <img src={camera} alt="foto de perfil" className='h-full w-full'/>
            <input type="" placeholder='Imagem de perfil' className='outline-none'/>
          </div>
          <div className='pt-5 gap-3'>
            <button className='bg-whiteBg text-blue font-bold text-xl font-Open Sans rounded-full px-20 py-4 justify-content'>
              <input type="submit" value="Cadastrar" />
            </button>
          </div>
        </form>
        <span className='flex justify-center items-center p-5 '>Já possui uma conta?<a href="" className='text-light-blue'>Entrar</a></span>
      </div>
    </div>
  )
}
