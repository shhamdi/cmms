"use client";

import Button from "@/components/common/Button";
import Logo from "@/components/common/Logo";
import Image from "next/image";
import Link from "next/link";

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 ">
        <div className=" w-screen bg-cover	 bg-[url('https://i.imgur.com/SUiNozy.jpeg')] flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <Logo />
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="space-y-4 md:space-y-6">
                <Button action={signIn} width="full">
                  Sign in
                </Button>
                <Link href="/register">
                  <Button width="full">Register</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
