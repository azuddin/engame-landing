import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Layout } from "@engame/components";
import { PaymentLayout } from "src/components/Layout/PaymentLayout";

export type PageLayoutProps = NextPage<AppProps> & {
  layout: typeof Layout | typeof PaymentLayout;
};

export type AppLayoutProps = {
  Component: PageLayoutProps;
  pageProps: any;
};
