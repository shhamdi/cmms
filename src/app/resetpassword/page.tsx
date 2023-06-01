"use client";
import Button from "@/components/common/Button";
import Logo from "@/components/common/Logo";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Forget() {
  const [email, setEmail] = useState("");
  const [captchadone, setcaptchadone] = useState(false);
  function onChange() {
    setcaptchadone(true);
  }
  return (
    <div className=" bg-gray-50">
      <section>
        <div className="  bg-cover	w-screen bg-[url('https://i.imgur.com/SUiNozy.jpeg')] flex flex-col items-center justify-center  mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <Logo />
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Reset Your Password
              </h1>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  try {
                    await axios.post("api/forget", {
                      email,
                    });
                  } catch (error) {
                    console.log(error);
                  }
                }}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <h2>Please enter the email address you use to sign in</h2>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-800 dark:text-white"
                  ></label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                </div>
                <center>
                  <div onChange={onChange}>
                    <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" />
                  </div>
                </center>

                <Button type="submit" width="full">
                  Request reset password
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
