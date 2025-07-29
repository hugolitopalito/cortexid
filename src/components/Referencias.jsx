import { useState } from 'react'
import { Header } from './Header'
import instalar from '../assets/Download.png'

export const Referencias = () => {
  return (
    <div>
      <Header />
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold font-Open Sans text-4xl text-center mt-25'>Referências</h1>
        <div className='items-center justify-center mt-10 w-xs'>
          <div className='flex '>
            <h2 className='font-bold text-lg'>Prosopagnosia após ferimento por arma de fogo</h2>
            <button className='bg-light-blue w-30 h-8 flex justify-center items-center rounded-4xl mt-4'><img src={instalar} alt="" /></button>
          </div>
          <a href="https://www.thieme-connect.com/products/ejournals/pdf/10.1055/s-0038-1623044.pdf">https://www.thieme-connect.com/products/ejournals/pdf/10.1055/s-0038-1623044.pdf</a>
        </div>
        <div className='items-center justify-center mt-10 w-xs'>
          <div className='flex items-center justify-between'>
            <h2 className='font-bold text-lg'>Congenital prosopagnosia</h2>
            <button className='bg-light-blue w-18 h-8 flex justify-center items-center rounded-4xl mt-4'><img src={instalar} alt="" /></button>
          </div>
          <a href="https://www.thieme-connect.com/products/ejournals/pdf/10.1055/s-0038-1623044.pdf">https://www.thieme-connect.com/products/ejournals/pdf/10.1055/s-0038-1623044.pdf</a>
        </div>
        <div className='items-center justify-center mt-10 w-xs'>
          <div className='flex '>
            <h2 className='font-bold text-lg'>Prosopagnosia após ferimento por arma de fogo</h2>
            <button className='bg-light-blue w-30 h-8 flex justify-center items-center rounded-4xl mt-4'><img src={instalar} alt="" /></button>
          </div>
          <a href="https://www.thieme-connect.com/products/ejournals/pdf/10.1055/s-0038-1623044.pdf">https://www.thieme-connect.com/products/ejournals/pdf/10.1055/s-0038-1623044.pdf</a>
        </div>
      </div>
    </div>
  )
}
