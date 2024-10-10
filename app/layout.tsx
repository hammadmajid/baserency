import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider"
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import React from "react";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "baserency",
    description: "Compare one base currency with multiple others",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="flex justify-between flex-col min-h-screen">
                <Header/>
                {children}
                <Footer/>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
