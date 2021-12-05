import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Layout } from "@engame/components";

export type PageLayoutProps = NextPage<AppProps> & {
  layout: typeof Layout;
};

export type AppLayoutProps = {
  Component: PageLayoutProps;
  pageProps: any;
};
