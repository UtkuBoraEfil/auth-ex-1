import Sidebar from '@/app/components/sidebar';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import prisma from "@/app/lib/prisma";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="min-h-screen max-w-full flex antialiased">
            <Sidebar />
            <div className="w-full">{children}</div>
        </div>
    );
  }


