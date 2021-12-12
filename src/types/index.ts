import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Layout, PaymentLayout } from "@engame/components";

export type PageLayoutProps = NextPage<AppProps> & {
  layout: typeof Layout | typeof PaymentLayout;
};

export type AppLayoutProps = {
  Component: PageLayoutProps;
  pageProps: any;
};
