import Programme from "@/components/Programme";
export const metadata = {
    title: "Abissa | Programme",
    description: "Présentation du programme de Abissa",
    openGraph: {
        title: "Abissa | Programme",
        description: "Présentation du programme de Abissa",
        images: ["./logo_transparent.webp"],
    },
};
export default function Page() {
    return <Programme/>;
}
