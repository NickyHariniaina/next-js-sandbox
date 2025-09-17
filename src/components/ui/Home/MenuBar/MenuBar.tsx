import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { CircleUser } from "lucide-react";

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
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
