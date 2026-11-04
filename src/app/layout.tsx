import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import BootSequence 
from "@/components/terminal/BootSequence";

const geist = Geist({
  variable: "--font-geist",
  subsets:["latin"],
});


const mono = JetBrains_Mono({
  variable:"--font-mono",
  subsets:["latin"],
});


export const metadata: Metadata = {
 title:"Salim Momin | Full Stack Developer",
 description:"ASCII.OS Developer Portfolio",
};


export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {

return (

<html lang="en">

<body
className={`${geist.variable} ${mono.variable}`}
>

<BootSequence/>

{children}

</body>

</html>

);

}