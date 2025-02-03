import Image from 'next/image'
import Banniere from '@/public/img/roi2.webp'
import Presentation from './Presentation'
import Invitation from './Invitation'
import Informations from './Informations'
import Annexes from './Annexes'

export default function Accueil({ changePage }) {
    return (
        <div>
            <div>
                {/* Bannière */}
                <Image
                    src={Banniere}
                    alt='Image du roi'
                    layout='responsive'
                    objectFit='cover'
                />
            </div>
            <div className='max-w-screen-xl mx-auto px-4'>
                <Presentation />
                <Invitation />
                <Informations changePage={changePage} />
                <Annexes changePage={changePage}/>
            </div>
        </div>
    );
}
