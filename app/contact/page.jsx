import Contact from "@/components/Contact.jsx";
export const metadata = {
    title: "Abissa | Contact",
    description: "Présentation de la page de contact",
    openGraph: {
        title: "Abissa | Contact",
        description: "Présentation de la page de contact",
        images: ["./logo_transparent.webp"],
    },
};

export default function Page() {
    return <Contact />;
}
