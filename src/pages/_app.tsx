import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import { AppLayoutProps } from "@engame/types";
import { SSRProvider } from "@react-aria/ssr";
import { Toaster } from "react-hot-toast";
import * as gtag from "../lib/gtag";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="ga-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

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
    </>
  );
}

export default MyApp;
