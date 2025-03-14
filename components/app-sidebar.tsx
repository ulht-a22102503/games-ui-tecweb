import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenuButton,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"

import { Store } from 'lucide-react';


export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroupLabel>Welcome!</SidebarGroupLabel>

                <SidebarMenuButton asChild>
                    <a href="/deisi/games">
                        <Store />
                        <span>Games Library</span>
                    </a>
                </SidebarMenuButton>

                <SidebarMenuSub>
                    <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                            <a href="/deisi/games">
                                <span>Games</span>
                            </a>
                        </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                </SidebarMenuSub>
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
