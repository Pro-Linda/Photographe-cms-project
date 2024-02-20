import { Yaldevi } from "next/font/google";
import "@/app/globals.css"
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";


const yaldevi_init = Yaldevi({ 
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-yaldevi', 
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={yaldevi_init.variable}>
        <div className="container"> 
        <Navbar />
        {children}
        <Footer /> 
        </div>
        </body>
    </html>
  );
}
