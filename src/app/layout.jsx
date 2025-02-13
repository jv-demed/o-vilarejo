import { Header } from '@/components/elements/Header';
import '@/styles/globals.css';

export const metadata = {
    title: 'O Vilarejo'
};

export default function RootLayout({ children }){
    return (
        <html lang='pt-br'>
            <body className={`
                bg-gunmetal text-mintCream 
                max-w-md mx-auto    
            `}>
                <Header />
                {children}
            </body>
        </html>
    );
}