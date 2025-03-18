import Photos from "@/components/Photos.jsx";
export const metadata = {
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
