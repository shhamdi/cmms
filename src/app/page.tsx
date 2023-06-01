import Button from "@/components/common/Button";
import Logo from "@/components/common/Logo";
import Image from "next/image";
import Link from "next/link";

import { signIn } from "next-auth/react";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { LoginForm } from "./(auth)/login/form";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1>Server Session</h1>
      <pre>{JSON.stringify(session)}</pre>
      <LoginForm/>
    </div>
  );
}
