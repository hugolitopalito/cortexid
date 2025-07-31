import { Link } from 'react-router-dom'
import chapeu from '../assets/chapeu.png'
import chapeuBranco from '../assets/chapeuBranco.png'
import { useTema } from '../context/ThemeContext'

export const HomeMain = () => {

    const { tema, alternarTema } = useTema()

    return (
        <div data-theme={tema}>
            <div className='flex h-screen justify-center items-center flex-col bg-whiteBg dark:bg-purple md:flex-row-reverse md:justify-between md:mx-30'>
                <div className='justify-center rounded-full  drop-shadow-blue drop-shadow-2xl/70 dark:drop-shadow-whiteBg dark:drop-shadow-2xl/70 '>
                    <img src={tema == 'dark' ? chapeuBranco : chapeu} className='w-xs md:w-xl' alt="Imagem do chapéu" />
                </div>
                <div className='md:gap-4'>
                    <div className='md:items-center md:justify-center '>
                        <h2 className='font-OpenSans font-bold text-blue text-3xl w-xs dark:text-whiteBg md:text-4xl md:w-sm'>Você reconhece todo mundo & eles não</h2>
                        <p className='font-Roboto justify-items-start mt-4 w-xs dark:text-whiteBg md:w-2xl'>Ajude a devolver rostos às memórias.
                            Milhões de pessoas vivem com prosopagnosia, a “cegueira facial”.
                            Elas não reconhecem rostos — nem de amigos, nem da própria família.
                            Para elas, cada encontro é um primeiro encontro
                        </p>
                    </div>
                    <div className='flex justify-center pt-10 md:items-start md:justify-start '>
                        <button className='font-OpenSans font-bold  bg-blue rounded-full w-3xs p-2 dark:bg-light-blue md:p-4 md:w-2xs'>
                            <Link to="/login" className='text-white text-center text-2xl md:text-3xl'>Saiba Mais</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
