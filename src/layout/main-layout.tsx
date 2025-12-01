import { Navigate, Outlet } from "react-router-dom"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from './navbar.jsx';
import Cookies from "js-cookie";

export const MainLayout = () => {
  const token = Cookies.get("token")
  const role = Cookies.get("role")
  if (!role || !token) {
    return <Navigate replace to={"/"} />
  }
  return (

    <SidebarProvider>
      {/* @ts-ignore */}
      <AppSidebar role={role} />
      <main className="grow">
        <div className="p-3">
          <SidebarTrigger className="cursor-pointer"/>
        </div>

       <div className="px-8 py-[18px] ">
        <Outlet />
       </div>
      </main>
    </SidebarProvider>

  )
}