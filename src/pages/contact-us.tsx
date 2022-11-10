import Head from "next/head";
import { Input, Layout, Option, Section, Select } from "@engame/components";
import { enquiryEndpoint, headers } from "@engame/constants";
import { EnquiryForm, PageLayoutProps } from "@engame/types";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactUs: PageLayoutProps = () => {
  const {
    handleSubmit: handleSubmitContactUs,
    control: controlContactUs,
    reset: resetContactUs,
  } = useForm<EnquiryForm>({
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      company_name: "",
      category: "Others",
      message: "",
    },
  });
  const contactUs = async (data: any) => {
    const formData = new FormData();
    for (const key in data) {
      formData.set(key, data[key]);
    }

    await fetch(enquiryEndpoint, {
      method: "POST",
      body: formData,
      headers: headers,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.code !== 200) {
          toast.error(result.message);
          return;
        }
        toast.success(
          "Message sent successfully! Thank you for your interest and we'll get in touch with you shortly!"
        );
      })
      .catch((err) => {
        console.error("CONTACT US ERROR=>", err);
      });
  };

  return (
    <>
      <Head>
        <title>Contact Us - Engame</title>
        <meta
          name="Sell More With Tap Master"
          content="Sell More With Tap Master"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
          <div className="flex flex-col-reverse md:flex-col items-center">
            <div className="flex flex-col space-y-2">
              <p className="text-center md:text-left font-montserrat font-extrabold text-4xl">
                Let&apos;s Talk!
              </p>
              <p className="font-lato text-xl">
                At Engame, our clients are our partners! If you have any
                inquiries about the subscription plans, pricing or bespoke
                solutions, please do not hesitate to reach out and our team will
                be happy to help!
              </p>
            </div>
            <div className="flex max-w-md py-10">
              <img
                src="/assets/images/01 Home/EG---Landing-home_feedback(D).png"
                width={800}
                height={800}
                alt="home-1"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <form
              onSubmit={handleSubmitContactUs(contactUs)}
              className="space-y-6"
            >
              <Controller
                name="name"
                control={controlContactUs}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    id="name"
                    type="text"
                    label="Name"
                    isRequired
                    {...field}
                  />
                )}
              />
              <Controller
                name="company_name"
                control={controlContactUs}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    id="company_name"
                    type="text"
                    label="Company Name"
                    isRequired
                    {...field}
                  />
                )}
              />
              <Controller
                name="email"
                control={controlContactUs}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    id="email"
                    type="email"
                    label="Email"
                    isRequired
                    {...field}
                  />
                )}
              />
              <Controller
                name="phone_number"
                control={controlContactUs}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    id="phone_number"
                    type="tel"
                    label="Phone Number"
                    isRequired
                    {...field}
                  />
                )}
              />
              <div className="flex flex-col">
                <label htmlFor="category" className="font-lato text-md mb-1">
                  Industry <span className="text-red-600">*</span>
                </label>
                <Controller
                  name="category"
                  control={controlContactUs}
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <Select
                      id="category"
                      aria-label="Industry"
                      placeholder="Select a category"
                      onSelectionChange={onChange}
                    >
                      <Option
                        key="Food and Beverage"
                        textValue="Food and Beverage"
                      >
                        Food and Beverage
                      </Option>
                      <Option key="Retail" textValue="Retail">
                        Retail
                      </Option>
                      <Option
                        key="Fast Moving Consumer Goods"
                        textValue="Fast Moving Consumer Goods"
                      >
                        Fast Moving Consumer Goods
                      </Option>
                      <Option key="Fashion" textValue="Fashion">
                        Fashion
                      </Option>
                      <Option key="Cosmetics" textValue="Cosmetics">
                        Cosmetics
                      </Option>
                      <Option key="Services" textValue="Services">
                        Services
                      </Option>
                      <Option key="Others" textValue="Others">
                        Others
                      </Option>
                    </Select>
                  )}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="font-lato text-md mb-1">
                  Enter Your Message <span className="text-red-600">*</span>
                </label>
                <Controller
                  name="message"
                  control={controlContactUs}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <textarea
                      id="message"
                      rows={4}
                      className="rounded-md border px-4 py-2 text-md"
                      {...field}
                    ></textarea>
                  )}
                />
              </div>
              <button
                type="submit"
                className="w-full px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold hover:opacity-90 hover:shadow-lg"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};

ContactUs.layout = Layout;

export default ContactUs;
