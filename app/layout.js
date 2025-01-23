import Footer from '@/components/Footer';
import './globals.css';


export const metadata = {
    title: 'Next 15',
    description: 'A Next.js 15 Project',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen">
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
