import Github from '../assets/Github.png'
import Linkedin from '../assets/Linkedin.png'
import Instagram from '../assets/Instagram.png'
import { Header } from './Header'

export const Contato = () => {
  return (
    <div>
        <Header/>
        <div className='flex items-center justify-center flex-col pt-25'>
            <div className='bg-light-blue h-50 rounded-full w-55'>
                <img src="" alt="" />
            </div>
            <div className='pt-10'>
                <span className='text-4xl font-Oswald font-bold text-blue'>Hugo Santos</span>
            </div>
            <div className='pt-10 pr-10'> 
            <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold' ><img src={Instagram} alt="" /><span>hugolitopalito</span></a>
            </div>
            <div className='pt-10 pr-10'> 
            <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold' ><img src={Linkedin} alt="" /><span>Hugo Santos</span></a>
            </div>
            <div className='pt-10 pr-10'> 
            <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold'><img src={Github} alt="" /><span>hugolitopalito</span></a>
            </div>
            

            <div className='bg-light-blue h-50 rounded-full w-55 mt-10'>
                <img src="" alt="" />
            </div>
            <div className='pt-10'>
                <span className='text-4xl font-Oswald font-bold text-blue'>Letícia Matos</span>
            </div>
            <div className='pt-10 pr-10'> 
            <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold'><img src={Instagram} alt="" /><span>leeticia_matoos</span></a>
            </div>
            <div className='pt-10 pr-10'> 
            <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold'><img src={Linkedin} alt="" /><span>Leticia Matos</span></a>
            </div>
            <div className='pt-10 pr-10'> 
            <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold'><img src={Github} alt="" /><span>lelematos</span></a>
            </div>
            
            <div className='bg-light-blue h-50 rounded-full w-55 mt-10'>
                <img src="" alt="" />
            </div>
            <div className='pt-10'>
                <span className='text-4xl font-Oswald font-bold text-blue'>Maria Heloisa</span>
            </div>
            <div className='pt-10 pr-10'> 
            <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold'><img src={Instagram} alt="" /><span>marihlss</span></a>
            </div>
            <div className='pt-10 pr-10'> 
            <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold'><img src={Linkedin} alt="" /><span>Maria Heloisa Seco</span></a>
            </div>
            <div className='pt-10 pr-10 mb-6'> 
            <a href="" className='text-blue text-3xl flex items-center gap-5 font-bold'><img src={Github} alt="" /><span>kworitos</span></a>
            </div>
        </div>
    </div>
 )
}
