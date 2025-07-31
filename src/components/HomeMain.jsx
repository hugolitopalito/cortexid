import { Link } from 'react-router-dom'
import chapeu from '../assets/chapeu.png'
import chapeuBranco from '../assets/chapeuBranco.png'
import { useTema } from '../context/ThemeContext'

export const HomeMain = () => {

    const { tema, alternarTema } = useTema()

    return (
    <div data-theme={tema}>
         <div className='flex justify-center items-center flex-col pt-10 bg-whiteBg dark:bg-purple'>
            <div className='justify-center rounded-full  drop-shadow-blue drop-shadow-2xl/70 dark:drop-shadow-whiteBg dark:drop-shadow-2xl/70'>
                <img src={tema == 'dark' ? chapeuBranco : chapeu} className='w-xs' alt="Imagem do chapéu" />
            </div>
            <div>
                <h2 className='font-OpenSans font-bold text-blue text-3xl w-xs dark:text-whiteBg'>Você reconhece todo mundo & eles não</h2>
                <p className='font-Roboto justify-items-start mt-4 w-xs dark:text-whiteBg'>Ajude a devolver rostos às memórias.
                    Milhões de pessoas vivem com prosopagnosia, a “cegueira facial”.
                    Elas não reconhecem rostos — nem de amigos, nem da própria família.
                    Para elas, cada encontro é um primeiro encontro
                </p>
            </div>
            <div className='flex justify-center pt-10 '>
                <button className='font-OpenSans font-bold  bg-blue rounded-full w-3xs p-2 dark:bg-light-blue'>
                    <Link to="/login" className='text-white text-center text-2xl'>Saiba Mais</Link>
                </button>
            </div>
        </div>
    </div>
    )
}
