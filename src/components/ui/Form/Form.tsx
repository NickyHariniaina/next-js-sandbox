"use client";
import { UserPlus } from "lucide-react";
import { Button } from "../button";
import { Input } from "../input";
import { useForm } from "react-hook-form";

type FormValue = {
  email: string;
  username: string;
  password: string;
};

function Form() {
  const { register, handleSubmit } = useForm<FormValue>();

  const onSubmit = async (data: FormValue) => {
    const res = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (res.status == 200) {
      console.log("User created");
    }
  };

  return (
    <form
      className="bg-white rounded-2xl flex flex-col gap-3 p-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input type="email" placeholder="Email" {...register("email")} />
      <Input type="text" placeholder="Username" {...register("username")} />
      <Input type="password" placeholder="Password" {...register("password")} />
      <Button type="submit">
        <UserPlus />
        Create
      </Button>
    </form>
  );
}

export default Form;
