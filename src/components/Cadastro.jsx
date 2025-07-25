import camera from '../assets/camera.png'
import email from '../assets/email.png'
import senha from '../assets/senha.png'
import confirmacao from '../assets/confirmacao.png'

export const Cadatro = () => {
  return (
    <div className='h-screen'>
      <div className='bg-blue text-whiteBg'>
        <form>
          <h1 className='text-center text-3xl font-bold font-Oswald text-whiteBg'>Cadastre-se</h1>
          <div className='w-sm font-Open Sans'>
            <div className='flex'>
            <img src={email} alt="foto de caixa de mensagens" />
            <input type="email" placeholder='E-mail ' />
            </div>
           <div className='flex'>
           <img src={senha} alt="foto de caixa de mensagens" />
           <input type="password" placeholder='Senha ' />
           </div>
            <div className='flex'>
            <img src={confirmacao} alt="foto de caixa de mensagens" />
            <input type="password" placeholder='Confirme sua senha' />
            </div>
           <div className='flex'>
           <img src={camera} alt="foto de caixa de mensagens" />
           <input type="" placeholder='Imagem de perfil' />
           </div>
            <button className='bg-whiteBg text-blue font-bold font-Open Sans rounded-full px-10 py-2 justify-content'>
            <input type="submit" value="Cadastrar" />
            </button>
          </div>
        </form>
        <span>Já possui uma conta?<a href="" className='text-light-blue'>Entrar</a></span>
      </div>
    </div>
  )
}
