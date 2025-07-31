import Github from '../assets/Github.png'
import Linkedin from '../assets/Linkedin.png'
import Instagram from '../assets/Instagram.png'
import { Header } from './Header'
import { useTema } from '../context/ThemeContext'

export const Contato = () => {

    const { tema, alternarTema } = useTema()

    return (
        <div data-theme={tema}>
            <Header />
            <div className='flex items-center justify-center flex-col pt-15 dark:bg-purple'>
                <div className='bg-light-blue h-50 rounded-full w-55 mt-10 dark:bg-whiteBg'>
                    <img src="#" alt="" />
                </div>
                <div className='pt-10'>
                    <span className='text-4xl font-Oswald font-bold text-blue dark:text-whiteBg'>Hugo Santos</span>
                </div>
                <div className='w-xm px-3'>
                    <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold dark:text-whiteBg pt-10'><img src={Instagram} alt="" className='h-15 w-15'/><span>hugolitopalito</span></a>
                    <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold dark:text-whiteBg pt-10'><img src={Linkedin} alt="" className='h-15 w-15'/><span>Hugo Santos</span></a>
                    <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold dark:text-whiteBg pt-10'><img src={Github} alt="" className='h-15 w-15'/><span>hugolitopalito</span></a>
                </div>
            </div>
            <div className='flex items-center justify-center flex-col pt-5 dark:bg-purple'>
                <div className='bg-light-blue h-50 rounded-full w-55 mt-10 dark:bg-whiteBg'>
                    <img src="#" alt="" />
                </div>
                <div className='pt-10'>
                    <span className='text-4xl font-Oswald font-bold text-blue dark:text-whiteBg'>Letícia Matos</span>
                </div>
                <div className='w-xs flex flex-col justify-start px-3'>
                    <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold dark:text-whiteBg pt-10'><img src={Instagram} alt=""className='h-15 w-15' /><span>leeticia_matoos</span></a>
                    <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold dark:text-whiteBg pt-10'><img src={Linkedin} alt="" className='h-15 w-15'/><span>Leticia Matos</span></a>
                    <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold dark:text-whiteBg pt-10'><img src={Github} alt="" className='h-15 w-15'/><span>lelematos</span></a>
                </div>
            </div>
            <div className='flex items-center justify-center flex-col py-5 dark:bg-purple'>
                <div className='bg-light-blue h-50 rounded-full w-55 mt-10 dark:bg-whiteBg'>
                    <img src="#" alt="" />
                </div>
                <div className='pt-10'>
                    <span className='text-4xl font-Oswald font-bold text-blue dark:text-whiteBg'>Maria Heloisa</span>
                </div>
                <div className='w-xs flex flex-col justify-start px-3'>
                    <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold dark:text-whiteBg pt-10'><img src={Instagram} alt="" className='h-15 w-15'/><span>marihlss</span></a>
                    <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold dark:text-whiteBg pt-10'><img src={Linkedin} alt="" className='h-15 w-15'/><span>Maria Heloisa Seco</span></a>
                    <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold dark:text-whiteBg pt-10'><img src={Github} alt="" className='h-15 w-15' /><span>kworitos</span></a>
                </div>
            </div>
        </div>
    )
}
