import { User } from "@/types/user";
import { NextRequest, NextResponse } from "next/server";

const mockData: (User | null)[] = [
  {
    username: "NickyHariniaina",
    firstname: "Nicky",
    lastname: "Hariniaina",
    age: 18,
    birthday: "2024-04-12",
    student: true,
    status: true,
  },
  {
    username: "TokioSan",
    firstname: "Tokio",
    lastname: "Nalt",
    age: 20,
    birthday: "2024-04-12",
    student: true,
    status: false,
  },
];

export const GEThandler = (req: NextRequest) => {
  return NextResponse.json({
    data: mockData,
  });
};

export const POSThandler = async (req: NextRequest) => {
  const user: User | null = await req.json();
  mockData.push(user);
  return NextResponse.json({
    message: "Data added successfully",
  });
};
