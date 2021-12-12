import "../styles/globals.css";
import { AppLayoutProps } from "src/types";
import { SSRProvider } from "@react-aria/ssr";

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
