import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";


const jetbrains = JetBrains_Mono({

  variable: "--font-mono",

  subsets:["latin"],

});


export const metadata: Metadata = {

  title: "Salim Momin | ASCII.OS",

  description:
  "Full Stack Developer & AI Engineer building modern software systems.",

};


export default function RootLayout({

children,

}: Readonly<{

children: React.ReactNode;

}>) {


return (

<html lang="en">

<body

className={`${jetbrains.variable} antialiased`}

>

{children}

</body>

</html>

);

}