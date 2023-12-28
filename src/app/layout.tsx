"use client";
import type { Metadata } from "next";
import { Londrina_Solid, Londrina_Shadow } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import { NextUIProvider } from "@nextui-org/react";

const lodrinaSolid = Londrina_Solid({
    subsets: ["latin"],
    weight: ["100", "300", "400", "900"],
    variable: "--font-lodrina",
});
const lodrinaShaddow = Londrina_Shadow({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-lodrina-shaddow",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <title>Tembakau Abah</title>
                <meta charSet="utf-8" />
                <meta name="google" content="notranslate" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
            </head>
            <body className={lodrinaSolid.className}>
                <NextUIProvider>
                    <Navbar />
                    {children}
                </NextUIProvider>
            </body>
        </html>
    );
}
