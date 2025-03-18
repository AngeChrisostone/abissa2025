import Image from 'next/image';

function Contenu1Concert({ artists }) {
    return (
        <div className="space-y-8">
            {artists.map((artist, index) => (
                <div key={index} className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="md:w-1/2">
                        <h2 className="text-xl sm:text-2xl text-customcolor1 text-center mb-2 font-semibold">{artist.name}</h2>
                        <p className="text-white-600 text-sm sm:text-base">{artist.bio}</p>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center">
                        <Image src={artist.imageSrc} alt={`Image de l'artiste ${artist.name}`} width={250} height={400} layout="intrinsic" className="max-w-full h-auto" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Contenu1Concert;