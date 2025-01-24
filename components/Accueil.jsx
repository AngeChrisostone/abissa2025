import Image from 'next/image'
import Banniere from '@/public/img/roi2.webp'
import Presentation from './Presentation'
import Invitation from './Invitation'
import Informations from './Informations'
import Annexes from './Annexes'

export default function Accueil() {
    return (
        <div>
            {/* Bannière */}
            <Image
                src={Banniere}
                alt='Image du roi'
                layout='responsive'
                objectFit='cover'
            />
            <Presentation/>
            <Invitation/>
            <Informations/>
            <Annexes/>
        </div>
    );
}
