import SideBar from "@/components/ui/Home/SideBar/SideBar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <SideBar />
      <main>{children}</main>
    </SidebarProvider>
  );
}
