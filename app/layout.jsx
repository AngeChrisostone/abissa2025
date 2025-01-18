import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
const inter = Inter({ subsets: ['latin'] });
export const metadata = {
    title: 'Abissa',
    description: 'Abissa2025',
};
export default function RootLayout({ children }) {
    return (
        <html lang='en'>
        <body className={inter.className}>
            <Header/>
                 {children}
                 
            <Footer/>
        </body>
        </html>
    );
}
