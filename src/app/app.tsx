import type { AppProps } from "next/app";
import { AppProvider } from "./app-providers";
import { Inter } from "next/font/google";

export function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
