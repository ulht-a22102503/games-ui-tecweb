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
                <SidebarGroupLabel>Stores</SidebarGroupLabel>

                <SidebarMenuButton asChild>
                    <a href="/deisi/shop">
                        <Store />
                        <span>DEISI Shop</span>
                    </a>
                </SidebarMenuButton>

                <SidebarMenuSub>
                    <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                            <a href="/deisi/shop#products">
                                <span>Produtos</span>
                            </a>
                        </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                            <a href="/deisi/shop#cart">
                                <span>Cesto</span>
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
