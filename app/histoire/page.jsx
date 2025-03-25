import Histoire from "@/components/Histoire.jsx";
export const metadata = {
    metadatabase: new URL("https://acme.com"),
    title: "Abissa | Histoire",
    description: "Présentation de l'histoire de Abissa",
    openGraph: {
        title: "Abissa | Histoire",
        description: "Présentation de l'histoire de Abissa",
        images: ["./logo_transparent.webp"],
    },
};
export default function Page() {
    return <Histoire/>;
}
