'use client'

import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { History, ListVideoIcon, ThumbsUpIcon } from "lucide-react"
import Link from "next/link"

const menus = [
    {title: "History", url: "/playlists/history", icon: History, auth: true},
    {title: "Liked video", url: "/playlists/liked", icon: ThumbsUpIcon, auth: true},
    {title: "All playlists", url: "/playlists", icon: ListVideoIcon, auth: true},
]

export const Personalsection = () => {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>You</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {menus.map(menu => (
                        <SidebarMenuItem key={menu.title}>
                            <SidebarMenuButton
                                tooltip={menu.title}
                                asChild
                                isActive={false}
                                onClick={() => {}}
                            >
                                <Link href={menu.url} className="flex items-center gap-4">
                                    <menu.icon />
                                    <span className="text-sm">{menu.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}