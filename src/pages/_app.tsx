import { AppLayoutProps } from "@engame/types";
import { SSRProvider } from "@react-aria/ssr";
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
    </SSRProvider>
  );
}

export default MyApp;
