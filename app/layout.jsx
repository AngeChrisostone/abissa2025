
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { metadata } from '@/components/Metadata';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
    

    return (
        <html lang='en'>
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </head>

            <body className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">
                   {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
