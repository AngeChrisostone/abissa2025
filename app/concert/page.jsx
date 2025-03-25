import Concert from "@/components/Concert";
export const metadata = {
    metadatabase: new URL("https://acme.com"),
    title: "Abissa | Concert",
    description: "Présentation du concert d'Abissa",
    openGraph: {
        title: "Abissa | Concert",
        description: "Présentation du concert d'Abissa",
        images: ["./logo_transparent.webp"],
    },
};

export default function page() {
    return <Concert />;
}