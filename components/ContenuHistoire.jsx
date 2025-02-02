import Image from 'next/image';

function ContenuHistoire({ section, showSection, toggleSection }) {
    return (
        <div key={section.id}>
            <button onClick={() => toggleSection(section.id)} className="mb-4">
                <h2 className="text-xl sm:text-2xl font-semibold text-customcolor1 mb-4">{section.toggleText}</h2>
            </button>
            {showSection[section.id] && (
                <section className="mb-8">
                    {section.images ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {section.images.map((img, idx) => (
                                <Image key={idx} src={require(`../public/img/${img.src}.webp`)} alt={img.alt} className="w-full" />
                            ))}
                        </div>
                    ) : (
                        <Image src={require(`../public/img/${section.image}.webp`)} alt={section.altText} className="w-full" />
                    )}
                    <p className="text-base sm:text-lg leading-relaxed">{section.text}</p>
                </section>
            )}
        </div>
    );
}

export default ContenuHistoire;