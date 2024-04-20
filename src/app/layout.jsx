import "./globals.css";
import "@/app/styles/all.css";

import Navbar from "@/components/navbar";


export const metadata = {
  title: "Satsconf",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
