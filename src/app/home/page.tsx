import CardComponents from "@/components/ui/Card/Card";
import MenuBar from "@/components/ui/Home/MenuBar/MenuBar";
import { User } from "@/types/user";
import { JSX } from "react";

export default async function Page(): Promise<JSX.Element> {
  const data = await getUsers();

  return (
    <div className="flex w-[75vw] flex-col gap-3 justify-center m-2">
      <MenuBar></MenuBar>
      <ul className="grid grid-cols-2 gap-3 p-2">
        {data.map((user: User) => {
          return <CardComponents user={user} key={user.username} />;
        })}
      </ul>
    </div>
  );
}

const getUsers = async () => {
  const res = await fetch("http://localhost:3000/api/users", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data.data);
  return data.data;
};
