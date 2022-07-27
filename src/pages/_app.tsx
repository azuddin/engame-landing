import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import { AppLayoutProps } from "@engame/types";
import { SSRProvider } from "@react-aria/ssr";
import { Toaster } from "react-hot-toast";
import * as gtag from "../lib/gtag";
import "../styles/globals.css";

interface AppContextValue {
  modalName: string;
  handleToggleModal: (modalName: string) => void;
}
export const AppContext = createContext<AppContextValue>({
  modalName: "",
  handleToggleModal: () => {},
});

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const router = useRouter();

  const [modalName, setModalName] = useState("");
  const handleToggleModal = (modal_name: string) => {
    setModalName(modal_name);
  };

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
      setTimeout(() => {
        document.getElementById("top")?.scrollIntoView();
      }, 5);
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
        <AppContext.Provider value={{ modalName, handleToggleModal }}>
          {Component.layout ? (
            <Component.layout>
              <Component {...pageProps} />
            </Component.layout>
          ) : (
            <Component {...pageProps} />
          )}
        </AppContext.Provider>
        <Toaster position="top-center" reverseOrder={false} />
      </SSRProvider>
    </>
  );
}

export default MyApp;
