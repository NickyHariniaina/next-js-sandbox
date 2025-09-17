"use client";
import { useSearchParams } from "next/navigation";
import { JSX } from "react";

const Page = (): JSX.Element => {
  const query = useSearchParams();
  console.log(query.get("hello"));
  return <div></div>;
};

export default Page;
