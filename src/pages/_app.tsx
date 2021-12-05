import "../styles/globals.css";
import { AppLayoutProps } from "src/types";

function MyApp({ Component, pageProps }: AppLayoutProps) {
  return (
    <>
      {Component.layout ? (
        <Component.layout>
          <Component {...pageProps} />
        </Component.layout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
