import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
