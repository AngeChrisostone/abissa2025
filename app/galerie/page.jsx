import Photos from "@/components/Photos.jsx";
export const metadata = {
    metadatabase: new URL("https://acme.com"),
    title: "Abissa | Galerie",
    description: "Présentation de la galerie photo",
    openGraph: {
        title: "Abissa | Galerie",
        description: "Présentation de la galerie photo",
        images: ["./logo_transparent.webp"],
    },
};
export default function Page() {
    return <Photos />;
}
