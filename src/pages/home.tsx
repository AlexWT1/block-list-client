import Image from "next/image";
import localFont from "next/font/local";
import {
  authControllerGetSessionInfo,
  authControllerSignIn,
  authControllerSignUp,
} from "@/shared/api/generated";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const geistSans = localFont({
  src: "../../pages/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../pages/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function HomePage() {
  const {data} = useQuery({
    queryKey: ['session'],
    queryFn: () => authControllerGetSessionInfo(),
  });
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       {data?.email}
      </main>
      
    </div>
  );
}
