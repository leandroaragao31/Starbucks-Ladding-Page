import { useState,useEffect , useTransition} from 'react';
import Face from '../../Assets/facebook-f.svg'
import Twitter from '../../Assets/twitter (1).svg'
import Insta from '../../Assets/instagram.svg'
import * as S from './styles.jsx'

const Footer = () => {
    const [open, setOpen] = useState(false)
    const [isPending, startTransition] = useTransition();

    const Corpo = document.body

    useEffect(() => {
        console.log(Corpo)
        startTransition(() => {
            if(Corpo.style.backgroundColor === '#036635'){
                setOpen(false)
            }else{
                setOpen(true)
            }
        })
        console.log(open)
    }, [])


   
    return (
        <S.ContainerFooter>
            <S.BoxImg backFig='#303030' >
            <img className='face' src={Face} alt='' />
            </S.BoxImg>
            <S.BoxImg backFig='#303030'>
            <img className='twitter' src={Twitter} alt='' />
            </S.BoxImg>
            <S.BoxImg backFig='#303030'>
            <img className='insta' src={Insta} alt='' />
            </S.BoxImg>
     
        </S.ContainerFooter>
    );
}

export default Footer;
