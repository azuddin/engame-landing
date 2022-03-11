import Head from "next/head";
import { Input, Layout, Option, Section, Select } from "@engame/components";
import { dashboardBaseUrl } from "@engame/constants";
import { PageLayoutProps } from "@engame/types";
import axios from "axios";
import toast from "react-hot-toast";

const ContactUs: PageLayoutProps = () => {
  const inputContactUs = {
    contactPerson: "",
    email: "",
    password: "",
    contactNumber: "",
    companyName: "",
    industry: "Others",
    message: "",
  };
  const signup = () => {
    const formData = new FormData();
    for (const key in inputContactUs) {
      //@ts-ignore
      formData.set(key, inputContactUs[key]);
    }
    axios
      .post(`${dashboardBaseUrl}/BackEnd/Vendor/signup.php`, formData)
      .then((response) => {
        toast.success(
          "Registration successful! Please check your email for your verification email to continue"
        );
      })
      .catch(
        ({
          response: {
            data: { message },
          },
        }) => {
          // handle error here
        }
      );
  };

  return (
    <>
      <Head>
        <title>Contact Us - Engame</title>
        <meta
          name="description"
          content="Sunt ullamco do adipisicing dolore occaecat qui eiusmod ut irure."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
          <div className="flex flex-col-reverse md:flex-col items-center">
            <div className="flex flex-col space-y-8">
              <p className="text-center md:text-left font-montserrat font-extrabold text-4xl">
                Who You Gonna Call?
              </p>
              <p className="font-lato text-xl">
                Looking to make a media inquiry ? Any feedback or suggestions
                about one of our games? Fill out the form and we&apos;ll get
                back to you !
              </p>
            </div>
            <div className="flex max-w-md">
              <img
                src="/assets/images/01 Home/EG---Landing-home_feedback(D).png"
                width={800}
                height={800}
                alt="home-1"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-6">
            <Input
              name="name"
              id="name"
              type="text"
              label="Name"
              isRequired
              onChange={(e) => (inputContactUs.contactPerson = e.target.value)}
            />
            <Input
              name="company_name"
              id="company_name"
              type="text"
              label="Company Name"
              isRequired
              onChange={(e) => (inputContactUs.companyName = e.target.value)}
            />
            <Input
              name="email"
              id="email"
              type="email"
              label="Email"
              isRequired
              onChange={(e) => (inputContactUs.email = e.target.value)}
            />
            <Input
              name="phone_number"
              id="phone_number"
              type="tel"
              label="Phone Number"
              isRequired
              onChange={(e) => (inputContactUs.contactNumber = e.target.value)}
            />
            <div className="flex flex-col">
              <label htmlFor="category" className="font-lato text-md mb-1">
                Industry <span className="text-red-600">*</span>
              </label>
              <Select
                name="industry"
                aria-label="Industry"
                placeholder="Select an industry"
                onSelectionChange={(e) =>
                  (inputContactUs.industry = e as string)
                }
              >
                <Option key="food and beverages">Food and Beverages</Option>
                <Option key="retail">Retail</Option>
                <Option key="fast moving consumer goods">
                  Fast Moving Consumer Goods
                </Option>
                <Option key="fashion">Fashion</Option>
                <Option key="cosmetics">Cosmetics</Option>
                <Option key="services">Services</Option>
              </Select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="font-lato text-md mb-1">
                Enter Your Message <span className="text-red-600">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="rounded-md border px-4 py-2 text-md"
                onChange={(e) => (inputContactUs.message = e.target.value)}
              ></textarea>
            </div>
            <button
              onClick={() => {
                signup();
                toast.success(
                  "Submission Successful! Thank you for your interest and we'll get in touch with you shortly!"
                );
              }}
              type="button"
              className="w-full px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold hover:opacity-90 hover:shadow-lg"
            >
              Submit Enquiry
            </button>
          </div>
        </div>
      </Section>
    </>
  );
};

ContactUs.layout = Layout;

export default ContactUs;
