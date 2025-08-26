import type { Metadata } from "next";
import { Comic_Relief } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const comicRelief = Comic_Relief({
  weight: ["400", "700"],
  variable: "--comic-relief",
})

const myFont = localFont({
  src: './vcr_osd.woff2',
})

export const metadata: Metadata = {
  title: "Free Ultrakill",
  description: "free ultrakill!!!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comicRelief.className}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
