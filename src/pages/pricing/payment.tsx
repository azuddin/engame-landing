import { useState } from "react";
import Head from "next/head";
import { Section } from "@engame/components";
import { Option, PaymentLayout, Select } from "@engame/components";
import { countries, states } from "@engame/constants";
import { PageLayoutProps } from "@engame/types";
import { creditCardType } from "@engame/utils";
import { FiLock } from "react-icons/fi";

const Payment: PageLayoutProps = () => {
  const [cc, setCC] = useState("");
  const handleCCChange = (event: any) => {
    setCC(event.target.value);
  };
  return (
    <>
      <Head>
        <title>Payment - Engame</title>
        <meta
          name="Sell More With Tap Master"
          content="Sell More With Tap Master"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section padding="px-0 lg:px-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-5 py-5">
          <div className="flex flex-col space-y-16 px-4 lg:p-5">
            <div className="space-y-6">
              <p className="text-left font-montserrat font-bold text-3xl md:text-4xl">
                Basic Info
              </p>
              <div className="flex flex-col">
                <label htmlFor="name" className="font-lato text-xl mb-1">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  className="rounded-md border px-4 py-2 text-2xl"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="company_name"
                  className="font-lato text-xl mb-1"
                >
                  Company Name <span className="text-red-600">*</span>
                </label>
                <input
                  name="company_name"
                  id="company_name"
                  type="text"
                  className="rounded-md border px-4 py-2 text-2xl"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="font-lato text-xl mb-1">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  className="rounded-md border px-4 py-2 text-2xl"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="phone_number"
                  className="font-lato text-xl mb-1"
                >
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  name="phone_number"
                  id="phone_number"
                  type="tel"
                  className="rounded-md border px-4 py-2 text-2xl"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="category" className="font-lato text-xl mb-1">
                  Category <span className="text-red-600">*</span>
                </label>
                <Select
                  name="category"
                  aria-label="Category"
                  placeholder="Select a category"
                >
                  <Option key="category 1">Category 1</Option>
                  <Option key="category 2">Category 2</Option>
                  <Option key="category 3">Category 3</Option>
                </Select>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-left font-montserrat font-bold text-3xl md:text-4xl">
                Billing Address
              </p>
              <div className="flex flex-col">
                <label htmlFor="country" className="font-lato text-xl mb-1">
                  Country <span className="text-red-600">*</span>
                </label>
                <Select
                  name="country"
                  aria-label="Country"
                  placeholder="Select a country"
                >
                  {countries.map((country) => (
                    <Option key={country.toLowerCase().replace(/ /g, "_")}>
                      {country}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="address_1" className="font-lato text-xl mb-1">
                  Addres Line 1 <span className="text-red-600">*</span>
                </label>
                <input
                  name="address_1"
                  id="address_1"
                  type="text"
                  className="rounded-md border px-4 py-2 text-2xl"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="address_2" className="font-lato text-xl mb-1">
                  Addres Line 2 <span className="text-red-600">*</span>
                </label>
                <input
                  name="address_2"
                  id="address_2"
                  type="text"
                  className="rounded-md border px-4 py-2 text-2xl"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="state" className="font-lato text-xl mb-1">
                  State <span className="text-red-600">*</span>
                </label>
                <Select
                  name="state"
                  aria-label="state"
                  placeholder="Select a state"
                >
                  {states.map((state) => (
                    <Option key={state.toLowerCase().replace(/ /g, "_")}>
                      {state}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="city" className="font-lato text-xl mb-1">
                  City <span className="text-red-600">*</span>
                </label>
                <input
                  name="city"
                  id="city"
                  type="text"
                  className="rounded-md border px-4 py-2 text-2xl"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="postcode" className="font-lato text-xl mb-1">
                  Postal Code <span className="text-red-600">*</span>
                </label>
                <input
                  name="postcode"
                  id="postcode"
                  type="text"
                  className="rounded-md border px-4 py-2 text-2xl"
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-left font-montserrat font-bold text-3xl md:text-4xl">
                Payment Method
              </p>
              <div className="flex flex-col">
                <label
                  htmlFor="payment_method"
                  className="font-lato text-xl mb-1"
                >
                  Payment Method <span className="text-red-600">*</span>
                </label>
                <Select
                  name="payment_method"
                  aria-label="payment_method"
                  placeholder="Select a payment method"
                >
                  <Option key="credit_card">Credit Card</Option>
                  <Option key="credit_card">Grab Pay</Option>
                </Select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="name_on_card"
                  className="font-lato text-xl mb-1"
                >
                  Name On Card <span className="text-red-600">*</span>
                </label>
                <input
                  name="name_on_card"
                  id="name_on_card"
                  type="text"
                  className="rounded-md border px-4 py-2 text-2xl"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="card_number" className="font-lato text-xl mb-1">
                  Credit Card Number <span className="text-red-600">*</span>
                </label>
                <div className="flex items-center relative">
                  <input
                    name="card_number"
                    id="card_number"
                    type="text"
                    className="rounded-md border pl-4 pr-20 py-2 text-2xl w-full"
                    placeholder="0000 1234 5678 9000"
                    onChange={handleCCChange}
                  />
                  <div className="absolute right-2 flex flex-row">
                    <img
                      src="/assets/images/master.png"
                      width={30}
                      height={30}
                      className={
                        creditCardType(cc) === "MASTERCARD"
                          ? ""
                          : "filter grayscale"
                      }
                      alt="mastercard"
                    />
                    <img
                      src="/assets/images/visa.png"
                      width={30}
                      height={30}
                      className={
                        creditCardType(cc) === "VISA" ? "" : "filter grayscale"
                      }
                      alt="visa"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 lg:gap-10">
                <div className="flex flex-col">
                  <label
                    htmlFor="expiration_date"
                    className="font-lato text-xl mb-1"
                  >
                    Expiration Date <span className="text-red-600">*</span>
                  </label>
                  <input
                    name="expiration_date"
                    id="expiration_date"
                    type="text"
                    className="rounded-md border px-4 py-2 text-2xl"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="cvc" className="font-lato text-xl mb-1">
                    CVC <span className="text-red-600">*</span>
                  </label>
                  <input
                    name="cvc"
                    id="cvc"
                    type="password"
                    className="rounded-md border px-4 py-2 text-2xl"
                    placeholder="***"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div
              style={{
                backgroundImage: `url('/assets/images/EG---bg.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="flex-shrink flex flex-col relative p-4 md:p-5 md:rounded-xl overflow-hidden"
            >
              <p className="text-left font-montserrat font-bold text-3xl md:text-4xl mb-5 md:mb-14 z-10">
                Order Summary
              </p>
              <div className="flex flex-col p-6 rounded-lg space-y-6 z-10 bg-white">
                <div className="flex flex-col">
                  <p className="font-montserrat font-bold text-xl">
                    365-days subscription,
                  </p>
                  <p className="font-montserrat font-bold text-xl">
                    Business Plan
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-montserrat text-md">
                      1 year unlimited plan
                    </p>
                    <p className="font-montserrat font-bold text-lg">
                      RM299.00
                    </p>
                  </div>
                </div>
                <div className="border-t"></div>
                <div className="flex justify-between items-center">
                  <p className="font-montserrat text-md">Subtotal</p>
                  <p className="font-montserrat font-bold text-lg">RM299.00</p>
                </div>
                <div className="flex flex-col relative justify-center">
                  <input
                    name="voucher_code"
                    id="voucher_code"
                    type="text"
                    className="rounded-md border pl-4 py-2 text-2xl font-light pr-20"
                    placeholder="Enter valid code"
                  />
                  <span className="absolute right-3 font-montserrat font-bold text-lg">
                    Apply
                  </span>
                </div>
                <div className="border-t"></div>
                <div className="flex justify-between items-center">
                  <p className="font-montserrat text-md">Total</p>
                  <p className="font-montserrat font-bold text-lg">RM299.00</p>
                </div>
                <button className="w-full px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold hover:opacity-90 hover:shadow-lg">
                  Complete Checkout
                </button>
                <div className="flex flex-row justify-center items-start space-x-2">
                  <div className="">
                    <FiLock size={14} />
                  </div>
                  <p className="font-lato text-xs">
                    <span className="font-bold">Secure checkout.</span> For your
                    convenience Engame will store your encrypted payment
                    information for future orders. Manage your payment
                    information in your Account Details.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </Section>
    </>
  );
};

Payment.layout = PaymentLayout;

export default Payment;
