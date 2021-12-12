import { SSRProvider } from "@react-aria/ssr";
import { AppLayoutProps } from "src/types";
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
