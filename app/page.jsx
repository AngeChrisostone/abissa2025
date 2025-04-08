import Accueil from '@/components/Accueil';
export const metadata = {
    metadatabase: new URL("https://acme.com"),
    title: "Abissa | Accueil",
    description: "Présentation du festival Abissa",
    openGraph: {
        title: "Abissa | Accueil",
        description: "Présentation du festival Abissa",
        images: ["./logo_transparent.webp"],
    },
    manifest:'/manifest.json'
};

export default function Home() {
    return (
        <main className="flex-1">
            <Accueil/>
        </main>
    );
}
