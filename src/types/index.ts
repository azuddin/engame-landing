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

/**
 * SignUp
 * https://selfservice-tapmaster.engame.tech/BackEnd/Vendor/signup.php
 */
export interface SignupForm {
  companyName: string;
  contactPerson: string;
  contactNumber: string;
  email: string;
  password: string;
  industry: string;
}

/**
 * Forgot Password
 * https://selfservice-tapmaster.engame.tech/BackEnd/Vendor/forgotpassword.php
 */
export interface ForgotPasswordForm {
  email: string;
}

/**
 * Login
 * https://selfservice-tapmaster.engame.tech/BackEnd/Vendor/login.php
 */
export interface LoginForm {
  email: string;
  password: string;
}

/**
 * Enquiry
 * https://engame.tech/web_backend/enquiry.php
 */
export interface EnquiryForm {
  name: string;
  email: string;
  company_name: string;
  phone_number: string;
  category: string;
  message: string;
}

export enum MediaTypeProps {
  image = "image",
  video = "video",
}
