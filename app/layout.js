import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Top from "@/components/top";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Purdy Nartural Herbal And Research Centre",
  icons: {
    icon: '/purdy.jpg', // /public path
  },
  description:
    "Purdy Nartural Herbal And Research Centre is a healthcare facility committed to providing comprehensive medical services with a focus on herbal remedies and modern diagnostics.Established with the vision of promoting natural healing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Header />
        {children}
        <Top className=' w-1/2'/>
        <Footer />
      </body>
    </html>
  );
}
