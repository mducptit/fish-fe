import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/*  eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="./node_modules/preline/dist/preline.js"></script>
    </html>
  );
}
