import { GEThandler, POSThandler } from "@/server/handler/users";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  return GEThandler(req);
};

export const POST = async (req: NextRequest) => {
  return POSThandler(req);
};
