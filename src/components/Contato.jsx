import Github from '../assets/Github.png'
import Linkedin from '../assets/Linkedin.png'
import Instagram from '../assets/Instagram.png'
import LinkedinBranco from '../assets/LinkedinBranco.png'
import InstagramBranco from '../assets/instagramBranco.png'
import GithubBranco from '../assets/GithubBranco.png'
import EuEManoPlipo from '../assets/EuEManoPlipo.jpeg'
import { Header } from './Header'
import { useTema } from '../context/ThemeContext'

export const Contato = () => {

    const { tema, alternarTema } = useTema()
    return (
        <div data-theme={tema} className='bg-whiteBg dark:bg-purple'>
            <Header />
            <div className='md:h-screen md:flex md:items-center md:justify-between md:px-20'>
                <div className='flex items-center justify-center flex-col pt-15 md:pt-0'>
                    <div className='mt-8 md:mt-0'>
                        <img src={EuEManoPlipo} alt="" className='object-fill rounded-full w-55 h-50'/>
                    </div>
                    <div className='pt-10 '>
                        <span className='text-4xl font-Oswald font-bold text-blue dark:text-whiteBg'>Hugo Santos</span>
                    </div>
                    <div className='w-xs px-3 flex flex-col justify-start'>
                        <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold dark:text-whiteBg pt-10'>{tema === 'dark' ? <img src={InstagramBranco} alt="" className='h-15 w-15'/> : <img src={Instagram} alt="" className='h-15 w-15' />}<span>hugolitopalito</span></a>
                        <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold dark:text-whiteBg pt-10'>{tema === 'dark' ? <img src={LinkedinBranco} alt="" className='h-15 w-15'/> : <img src={Linkedin} alt="" className='h-15 w-15' />}<span>Hugo Santos</span></a>
                        <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold dark:text-whiteBg pt-10'>{tema === 'dark' ? <img src={GithubBranco} alt="" className='h-15 w-15'/> : <img src={Github} alt="" className='h-15 w-15' />}<span>hugolitopalito</span></a>
                    </div>
                </div>
                <div className='flex items-center justify-center flex-col pt-5 dark:bg-purple md:pt-0'>
                    <div className='mt-8 md:mt-0'>
                        <img src="#" alt="" className='object-fill rounded-full w-55 h-50'/>
                    </div>
                    <div className='pt-10'>
                        <span className='text-4xl font-Oswald font-bold text-blue dark:text-whiteBg'>Letícia Matos</span>
                    </div>
                    <div className='w-xs flex flex-col justify-start px-3'>
                        <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold dark:text-whiteBg pt-10'>{tema === 'dark' ? <img src={InstagramBranco} alt="" className='h-15 w-15'/> : <img src={Instagram} alt="" className='h-15 w-15' />}<span>leeticia_matoos</span></a>
                        <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold dark:text-whiteBg pt-10'>{tema === 'dark' ? <img src={LinkedinBranco} alt="" className='h-15 w-15'/> : <img src={Linkedin} alt="" className='h-15 w-15' />}<span>Leticia Matos</span></a>
                        <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold dark:text-whiteBg pt-10'>{tema === 'dark' ? <img src={GithubBranco} alt="" className='h-15 w-15'/> : <img src={Github} alt="" className='h-15 w-15' />}<span>lelematos</span></a>
                    </div>
                </div>
                <div className='flex items-center justify-center flex-col pt-5 dark:bg-purple md:pt-3'>
                    <div className='mt-8 md:mt-0'>
                        <img src="#" alt="" className='object-fill rounded-full w-55 h-50'/>
                    </div>
                    <div className='pt-10'>
                        <span className='text-4xl font-Oswald font-bold text-blue dark:text-whiteBg'>Maria Heloisa</span>
                    </div>
                    <div className='w-xs flex flex-col justify-start px-3'>
                        <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold dark:text-whiteBg pt-10'>{tema === 'dark' ? <img src={InstagramBranco} alt="" className='h-15 w-15'/> : <img src={Instagram} alt="" className='h-15 w-15' />}<span>marihlss</span></a>
                        <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold dark:text-whiteBg pt-10'>{tema === 'dark' ? <img src={LinkedinBranco} alt="" className='h-15 w-15'/> : <img src={Linkedin} alt="" className='h-15 w-15' />}<span>Maria Heloisa Seco</span></a>
                        <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold dark:text-whiteBg pt-10'>{tema === 'dark' ? <img src={GithubBranco} alt="" className='h-15 w-15'/> : <img src={Github} alt="" className='h-15 w-15' />}<span>kworitos</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
