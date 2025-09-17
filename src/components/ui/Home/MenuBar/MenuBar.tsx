import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { CircleUser, Plus } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../../popover";

export default function MenuBar() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Menu</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <div className="flex flex-row gap-2">
              <CircleUser />
              <p>User profil</p>
            </div>
          </MenubarItem>
          <Popover>
            <PopoverTrigger>
              <div className="flex flex-row gap-2">
                <Plus />
                <p>Add User</p>
              </div>
            </PopoverTrigger>
            <PopoverContent>Hello</PopoverContent>
          </Popover>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
