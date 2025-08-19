import { Header } from './Header';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; 
import { items } from '../utils/Items.js';
import { useTema } from '../context/ThemeContext';
import { useWidth } from '../context/WidthContext';
import { useRef } from 'react';

// Importe suas imagens de seta
import voltarDireita from '../assets/voltarDireita.png';
import voltarEsquerda from '../assets/voltarEsquerda.png';
import voltarDireitaBranco from '../assets/voltarDireitaBranco.png';
import voltarEsquerdaBranco from '../assets/voltarEsquerdaBranco.png';

export const Items = () => {
  const { tema } = useTema();
  const { isMobile } = useWidth();
  const splideRef = useRef(null);

  const splideOptions = {
    type: 'loop',
    perPage: isMobile ? 1 : 3,
    pagination: true,
    arrows: false,
    gap: '2rem',
  };

  const handleNext = () => {
    if (splideRef.current) {
      splideRef.current.go('>');
    }
  };

  const handlePrev = () => {
    if (splideRef.current) {
      splideRef.current.go('<');
    }
  };

  return (
    <div data-theme={tema}>
      <Header />
      <div className="h-screen flex items-center justify-center bg-whiteBg dark:bg-purple">
        {/* Botão de voltar */}
        <button className='h-auto w-auto cursor-pointer p-4' onClick={handlePrev}>
          <img src={tema === 'dark' ? voltarEsquerdaBranco : voltarEsquerda} alt="Anterior" />
        </button>

        {/* Contêiner do carrossel: Removido o posicionamento absoluto das setas */}
        <div className='w-full max-w-4xl text-center items-center justify-center'>
          <Splide options={splideOptions} ref={splideRef}>
            {items.map((item, index) => (
              <SplideSlide key={index}>
                <div className='flex flex-col items-center p-4'>
                  <h1 className='py-5 font-bold text-2xl text-dark-blue font-OpenSans dark:text-whiteBg'>
                    {item.name}
                  </h1>
                  <img 
                    src={item.image} 
                    className='bg-blue rounded-4xl dark:bg-whiteBg h-64 w-auto' 
                    alt={item.name} 
                  />
                  <p className='py-5 font-OpenSans text-xl dark:text-whiteBg'>
                    R${item.price},00
                  </p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>

        {/* Botão de avançar */}
        <button className='h-auto w-auto cursor-pointer p-4' onClick={handleNext}>
          <img src={tema === 'dark' ? voltarDireitaBranco : voltarDireita} alt="Próximo" />
        </button>
      </div>
    </div>
  );
};