"use client";
import { Alumni_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "@/components/navigation/Footer";
import { QueryClient, QueryClientProvider } from 'react-query';

const alumniSans = Alumni_Sans({
    subsets: ["latin"],
    variable: "--font-alumni-sans",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const queryClient = new QueryClient();

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
            <body
                className={alumniSans.className}
                style={{ overflowX: "hidden" }}
            >
                <QueryClientProvider client={queryClient}>
                    <NextUIProvider>
                        <Navbar />
                        {children}
                        <Footer />
                    </NextUIProvider>
                </QueryClientProvider>
            </body>
        </html>
    );
}
