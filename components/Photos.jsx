import Image from 'next/image';
import Femmes from '@/public/img/femmes.jpg'
import ImageSect1 from '@/public/img/danse2.jpg'
import Danse from '@/public/img/danse.jpg'
import Image4 from '@/public/img/filleAbissa.jpg'
import Image5 from '@/public/img/hommes.jpg'
import Image6 from '@/public/img/petit.jpg'
import Image7 from '@/public/img/fille2.jpg'
import Image8 from '@/public/img/danse7.jpg'
import Image9 from '@/public/img/roi7.jpg'
import Image10 from '@/public/img/reine.jpg'
import Image11 from '@/public/img/can.jpg'
import Image12 from '@/public/img/roi 6.jpg'
import Image13 from '@/public/img/danseur.jpg'
import Image14 from '@/public/img/comian2.jpg'
import Image15 from '@/public/img/comian.jpg'
import Image16 from '@/public/img/groupefilles.jpg'
import Image17 from '@/public/img/groupe.jpg'
import Image18 from '@/public/img/hommegroupe.jpg'
export default function Photos() {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Titre de la page */}
            <section className="text-center py-10 bg-[#035B87] text-white">
                <h1 className="text-4xl font-bold">Galerie des Festivités de l'Abissa</h1>
                <p className="mt-2 text-lg">Découvrez les moments forts en images et en vidéos</p>
            </section>

            {/* Galerie Photos */}
            <section className="max-w-7xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-semibold text-[#035B87] mb-6 text-center"> Photos des Festivités</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Image 1 */}
                    <div className="overflow-hidden rounded-lg shadow-lg group">
                        <Image
                            src={Femmes} // Remplace avec ton image
                            alt="Photo Abissa 1"
                             className="group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Image 2 */}
                    <div className="overflow-hidden rounded-lg shadow-lg group">
                        <Image
                            src={ImageSect1}
                            alt="Photo Abissa 2"
                            className="group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Image 3 */}
                    <div className="overflow-hidden rounded-lg shadow-lg group">
                        <Image
                            src={Danse}
                            alt="Photo Abissa 3"
                            className="group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                     {/* Image 4 */}
                     <div className="overflow-hidden rounded-lg shadow-lg group">
                        <Image
                            src={Image4}
                            alt="Photo Abissa 4"
                            className="group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                     {/* Image 5 */}
                     <div className="overflow-hidden rounded-lg shadow-lg group">
                        <Image
                            src={Image5}
                            alt="Photo Abissa 5"
                            className="group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                     {/* Image 6 */}
                     <div className="overflow-hidden rounded-lg shadow-lg group">
                        <Image
                            src={Image6}
                            alt="Photo Abissa 6"
                            className="group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                     {/* Image 7 */}
                     <div className="overflow-hidden rounded-lg shadow-lg group">
                        <Image
                            src={Image7}
                            alt="Photo Abissa 7"
                            className="group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                     {/* Image 8 */}
                     <div className="overflow-hidden rounded-lg shadow-lg group">
                        <Image
                            src={Image8}
                            alt="Photo Abissa 8"
                            className="group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                     {/* Image 9 */}
                     <div className="overflow-hidden rounded-lg shadow-lg group">
                        <Image
                            src={Image9}
                            alt="Photo Abissa 9"
                            className="group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                     {/* Image 10 */}
                     <div className="overflow-hidden rounded-lg shadow-lg group">
                        <Image
                            src={Image10}
                            alt="Photo Abissa 10"
                            className="group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                     {/* Image 11 */}
                     <div className="overflow-hidden rounded-lg shadow-lg group">
                        <Image
                            src={Image11}
                            alt="Photo Abissa 11"
                            className="group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                     {/* Image 12 */}
                     <div className="overflow-hidden rounded-lg shadow-lg group">
                        <Image
                            src={Image12}
                            alt="Photo Abissa 12"
                            className="group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                     {/* Image 13 */}
                     <div className="overflow-hidden rounded-lg shadow-lg group">
                        <Image
                            src={Image13}
                            alt="Photo Abissa 13"
                            className="group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                     {/* Image 14 */}
                     <div className="overflow-hidden rounded-lg shadow-lg group">
                        <Image
                            src={Image14}
                            alt="Photo Abissa 14"
                            className="group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                     {/* Image 15 */}
                     <div className="overflow-hidden rounded-lg shadow-lg group">
                        <Image
                            src={Image15}
                            alt="Photo Abissa 16"
                            className="group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    {/* Image 16 */}
                    <div className="overflow-hidden rounded-lg shadow-lg group">
                        <Image
                            src={Image16}
                            alt="Photo Abissa 16"
                            className="group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    {/* Image 17 */}
                    <div className="overflow-hidden rounded-lg shadow-lg group">
                        <Image
                            src={Image17}
                            alt="Photo Abissa 17"
                            className="group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    {/* Image 18 */}
                    <div className="overflow-hidden rounded-lg shadow-lg group">
                        <Image
                            src={Image18}
                            alt="Photo Abissa 18"
                            className="group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                </div>
            </section>

            {/* Galerie Vidéos */}
            <section className="max-w-7xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-semibold text-[#035B87] mb-6 text-center"> Vidéos des Festivités</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Vidéo 1 */}
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <iframe
                            className="w-full h-60"
                            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FAbissaofficiel%2Fvideos%2F1080813234047911%2F&show_text=false&width=269&t=0"
                            title="Vidéo Abissa 1"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Vidéo 2 */}
                    <div className="overflow-hidden rounded-lg shadow-lg">
                    <iframe
                            className="w-full h-60"
                            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FEdomgboleCrouw%2Fvideos%2F1180036169875173%2F&show_text=false&width=224&t=0"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Vidéo 3 */}
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <iframe
                            className="w-full h-60"
                            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FEdomgboleCrouw%2Fvideos%2F1670391343531962%2F&show_text=false&width=224&t=0"
                            title="Vidéo Abissa 3"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                     {/* Vidéo 4 */}
                     <div className="overflow-hidden rounded-lg shadow-lg">
                        <iframe
                            className="w-full h-60"
                            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FAbissaofficiel%2Fvideos%2F8091297300921862%2F&show_text=false&width=267&t=0"
                            title="Vidéo Abissa 4"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                     {/* Vidéo 5 */}
                     <div className="overflow-hidden rounded-lg shadow-lg">
                        <iframe
                            className="w-full h-60"
                            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FAbissaofficiel%2Fvideos%2F1080822529759700%2F&show_text=false&width=267&t=0"
                            title="Vidéo Abissa 5"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                     {/* Vidéo 6 */}
                     <div className="overflow-hidden rounded-lg shadow-lg">
                        <iframe
                            className="w-full h-60"
                            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FAbissaofficiel%2Fvideos%2F714176787254342%2F&show_text=false&width=267&t=0"
                            title="Vidéo Abissa 6"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                     {/* Vidéo 7 */}
                     <div className="overflow-hidden rounded-lg shadow-lg">
                        <iframe
                            className="w-full h-60"
                            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FAbissaofficiel%2Fvideos%2F229030990196258%2F&show_text=false&width=267&t=0"
                            title="Vidéo Abissa 7"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                     {/* Vidéo 8 */}
                     <div className="overflow-hidden rounded-lg shadow-lg">
                        <iframe
                            className="w-full h-60"
                            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FAbissaofficiel%2Fvideos%2F666068318996850%2F&show_text=false&width=267&t=0"
                            title="Vidéo Abissa 8"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                     {/* Vidéo 9 */}
                     <div className="overflow-hidden rounded-lg shadow-lg">
                        <iframe
                            className="w-full h-60"
                            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FAbissaofficiel%2Fvideos%2F1453064871918629%2F&show_text=false&width=560&t=0"
                            title="Vidéo Abissa 9"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}
