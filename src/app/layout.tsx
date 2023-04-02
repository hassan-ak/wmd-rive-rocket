import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Rive - Rocket Animation',
  description: 'Rive animation with next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-[#124D70]'>
        <div>
          <Navbar></Navbar>
          {children}
        </div>
      </body>
    </html>
  );
}
