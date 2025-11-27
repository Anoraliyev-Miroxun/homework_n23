import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"


import {links} from './layout-data.ts';
import { Link, Links } from "react-router-dom";
import { it } from "zod/v4/locales";
import { ActivLink } from "@/components/activ-link.tsx";




export function AppSidebar({role}:{role:"admin" | "teacher"}) {
    
    return (
        <Sidebar>
            <SidebarHeader className="p-3">
                <Link to={`/app/${role}`}>AMALIYOT</Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroupContent className="p-0">
                    <SidebarMenu>
                        {links[role].map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <ActivLink  to={item.url}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </ActivLink>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}