import '@/styles/globals.css';

export const metadata = {
    title: 'O Vilarejo'
};

export default function RootLayout({ children }){
    return (
        <html lang='pt-br'>
            <body className='bg-gunmetal text-mintCream'>
                {children}
            </body>
        </html>
    );
}