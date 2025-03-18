import Concert from "@/components/Concert";
export const metadata = {
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