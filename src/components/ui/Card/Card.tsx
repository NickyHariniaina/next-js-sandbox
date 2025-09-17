import { User } from "@/types/user";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card";
import { Button } from "../button";
import { Pen, Trash } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../sheet";
import Modify from "../Form/Modify";

type CardProps = {
  user: User;
};

const CardComponents = (props: CardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.user.username}</CardTitle>
        <CardDescription>This is a card for any users</CardDescription>
        <CardAction className="flex flex-row gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Pen />
                Modify
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Modify an user here</SheetTitle>
                <SheetDescription>Oh here should have a desc</SheetDescription>
              </SheetHeader>
              <Modify />
            </SheetContent>
          </Sheet>
          <Button variant="destructive">
            <Trash />
            Remove
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="p-3 flex flex-col gap-3 m-3">
          <p className="flex flex-row gap-2">{props.user.email}</p>
          <p>{props.user.age}</p>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default CardComponents;
