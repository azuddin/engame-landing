import { AppLayoutProps } from "@engame/types";
import { SSRProvider } from "@react-aria/ssr";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppLayoutProps) {
  return (
    <SSRProvider>
      {Component.layout ? (
        <Component.layout>
          <Component {...pageProps} />
        </Component.layout>
      ) : (
        <Component {...pageProps} />
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </SSRProvider>
  );
}

export default MyApp;
