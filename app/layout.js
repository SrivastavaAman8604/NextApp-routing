import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My First Next App",
  description: "Build awsome stuffs with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className='px-8 py-20 max-w-6xl mx-auto'>
          {children}
        </main>
      </body>
    </html>
  );
}
