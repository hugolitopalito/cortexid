import { useState } from 'react'
import { Header } from './Header'
import instalar from '../assets/Download.png'
import { useTema } from '../context/ThemeContext'

export const Referencias = () => {

  const {tema} = useTema()

  return (
    <div data-theme={tema}>
      <Header />
      <div className='flex flex-col justify-center items-center dark:bg-purple h-screen'>
        <div className='px-4'>
          <h1 className='font-bold font-OpenSans text-4xl text-center mt-20 dark:text-whiteBg'>Referências</h1>
          <div className='mt-10 dark:text-whiteBg'>
            <div>
              <h2 className='font-bold text-lg items-center max-w-md break-words'>Prosopagnosia após ferimento por arma de fogo</h2>
            </div>
            <div className='mt-2'>
              <a href="https://www.thieme-connect.com/products/ejournals/pdf/10.1055/s-0038-1623044.pdf" className='block break-all underline'>https://www.thieme-connect.com/products/ejournals/pdf/10.1055/s-0038-1623044.pdf</a>
            </div>
            <div className='mt-4'>
              <button className='bg-light-blue flex  rounded-4xl py-1 px-5'><img src={instalar} alt="" className='h-6 w-8' /></button>
            </div>
          </div>
          <div className='mt-10 dark:text-whiteBg'>
            <div>
              <h2 className='font-bold text-lg items-center max-w-md break-words'>Congenital prosopagnosia</h2>
            </div>
            <div className='mt-2'>
              <a href="https://www.scielo.br/j/dn/a/Ncsxn5BQRvYqKCXRMrDVxcH/?format=pdf&lang=en" className='block break-all underline'>https://www.scielo.br/j/dn/a/Ncsxn5BQRvYqKCXRMrDVxcH/?format=pdf&lang=en</a>
            </div>
            <div className='mt-4'>
              <button className='bg-light-blue flex  rounded-4xl py-1 px-5'><img src={instalar} alt="" className='h-6 w-8' /></button>
            </div>
          </div>
          <div className='mt-10 dark:text-whiteBg'>
            <div>
              <h2 className='font-bold text-lg items-center max-w-md break-words'>Developmental prosopagnosia and adaptative compensatory strategies</h2>
            </div>
            <div className='mt-2'>
              <a href="https://www.scielo.br/j/dn/a/YtwSzRg5bz6VPdWwytJH36C/?format=pdf&lang=en" className='block break-all underline'>https://www.scielo.br/j/dn/a/YtwSzRg5bz6VPdWwytJH36C/?format=pdf&lang=en</a>
            </div>
            <div className='mt-4'>
              <button className='bg-light-blue flex  rounded-4xl py-1 px-5'><img src={instalar} alt="" className='h-6 w-8' /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

