import Programme from "@/components/Programme";
export const metadata = {
    metadatabase: new URL("https://acme.com"),
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
