import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { email, PASSWORD, firstName, lastName } = req.body;
    const password = await bcrypt.hash(PASSWORD, 12);
    const user = prisma.user.create({
      data: {
        email,
        password,
        firstName,
        lastName,
      },
    });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}