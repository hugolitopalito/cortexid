import { useState } from 'react'
import { Header } from './Header'
import instalar from '../assets/Download.png'
import { useTema } from '../context/ThemeContext'

export const Referencias = () => {

  const { tema } = useTema()

  return (
    <div data-theme={tema}>
      <Header />
      <div className='flex flex-col justify-center items-center bg-whiteBg dark:bg-purple h-screen '>
        <div className='px-4'>
          <h1 className='font-bold font-OpenSans text-4xl text-center mt-20 dark:text-whiteBg md:text-5xl md:my-5'>Referências</h1>
          <div className='flex flex-col md:gap-15'>
            <div className='mt-10 dark:text-whiteBg md:flex md:gap-20'>
              <div>
                <h2 className='font-bold text-lg items-center max-w-md break-words md:text-2xl md:max-w-xl'>Prosopagnosia após ferimento por arma de fogo</h2>
                <a href="https://www.thieme-connect.com/products/ejournals/pdf/10.1055/s-0038-1623044.pdf" className='block break-all underline cursor-pointer'>https://www.thieme-connect.com/products/ejournals/pdf/10.1055/s-0038-1623044.pdf</a>
              </div>
              <div className='mt-4 '>
              <a href="../../../public/ArmaDeFogo.pdf" download ><button className='bg-light-blue flex  rounded-4xl py-1 px-5 md:py-2 md:px-10 cursor-pointer' ><img src={instalar} alt="" className='h-6 w-8' /></button></a>
              </div>
            </div>
            <div className='mt-10 dark:text-whiteBg md:flex md:justify-between'>
              <div>
                <h2 className='font-bold text-lg items-center max-w-md break-words md:text-2xl md:max-w-xl'>Congenital prosopagnosia</h2>
                <a href="https://www.scielo.br/j/dn/a/Ncsxn5BQRvYqKCXRMrDVxcH/?format=pdf&lang=en" className='block break-all underline cursor-pointer'>https://www.scielo.br/j/dn/a/Ncsxn5BQRvYqKCXRMrDVxcH/?format=pdf&lang=en</a>
              </div>
              <div className='mt-4'>
              <a href="../../../public/Adquirida.pdf" download ><button className='bg-light-blue flex  rounded-4xl py-1 px-5 md:py-2 md:px-10 cursor-pointer' ><img src={instalar} alt="" className='h-6 w-8' /></button></a>
              </div>
            </div>
            <div className='mt-10 dark:text-whiteBg md:flex md:justify-between'>
              <div>
                <h2 className='font-bold text-lg items-center max-w-md break-words md:text-2xl md:max-w-xl'>Developmental prosopagnosia and adaptative compensatory strategies</h2>
                <a href="https://www.scielo.br/j/dn/a/YtwSzRg5bz6VPdWwytJH36C/?format=pdf&lang=en" className='block break-all underline cursor-pointer'>https://www.scielo.br/j/dn/a/YtwSzRg5bz6VPdWwytJH36C/?format=pdf&lang=en</a>
              </div>
              <div className='mt-4'>
                <a href="../../../public/Desenvolvida.pdf" download ><button className='bg-light-blue flex  rounded-4xl py-1 px-5 md:py-2 md:px-10 cursor-pointer' ><img src={instalar} alt="" className='h-6 w-8' /></button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

