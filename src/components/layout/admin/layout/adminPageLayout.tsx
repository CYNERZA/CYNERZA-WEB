import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../admin-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="bg-white dark:bg-gray-950">
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        {/* <div className="w-full"> */}
        {children}
        {/* </div> */}
      </main>
    </SidebarProvider>
  )
}