import { prisma } from "@/lib/prisma";
import { User } from "@/types/user";
import { NextRequest, NextResponse } from "next/server";

export const GEThandler = async (req: NextRequest) => {
  const data: User[] = await prisma.user.findMany();
  return NextResponse.json({
    data: data,
  });
};

export const POSThandler = async (req: NextRequest) => {
  const user: User = await req.json();
  const newUser = await prisma.user.create({
    data: {
      email: user.email,
      username: user.username,
      password: user.password,
      age: 23,
    },
  });
  return NextResponse.json({
    message: "Data added successfully",
  });
};
