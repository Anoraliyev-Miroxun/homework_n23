import { Outlet } from "react-router-dom"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {AppSidebar} from './navbar.jsx';

export const  MainLayout = () => {
const role = "teacher"
    return (
        
         <SidebarProvider>
      <AppSidebar role={role}/>
      <main>
        <SidebarTrigger />

        <Outlet/>
      </main>
    </SidebarProvider>
     
    )
}