import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ermias's portfolio",
  description: "Ermias Alehegn's personal portfolio website",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col items-center justify-center gap-[50px] py-[12px]  bg-white dark:bg-main`}
      >
        {children}
      </body>
    </html>
  );
}
