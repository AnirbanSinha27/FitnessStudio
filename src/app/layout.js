import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Fitness Studio by CHP Inc. | Fort Wayne, Indiana',
  description: 'Professional fitness studio offering diverse classes and personal training in Fort Wayne, Indiana',
   icons: {
    icon: '/logo.png',  // ✅ Path inside the public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}