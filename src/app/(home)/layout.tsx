"use client";
import { Alumni_Sans } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "@/components/navigation/Footer";
import { QueryClient, QueryClientProvider } from "react-query";

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
        <main
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
        </main>
    );
}
