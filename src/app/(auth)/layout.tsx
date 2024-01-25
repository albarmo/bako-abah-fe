"use client";
import { Alumni_Sans } from "next/font/google";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main>{children}</main>;
}
