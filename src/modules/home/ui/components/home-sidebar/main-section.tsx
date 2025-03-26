'use client'

import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { useClerk, useAuth } from "@clerk/nextjs"
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react"
import Link from "next/link"

const menus = [
    {title: "Home", url: "/", icon: HomeIcon},
    {title: "Subscription", url: "/feed/subscriptions", icon: PlaySquareIcon, auth: true},
    {title: "Trending", url: "/feed/trending", icon: FlameIcon},
]

export const Mainsection = () => {
    const clerk = useClerk()
    const {isSignedIn} = useAuth()
    
    return (
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    {menus.map(menu => (
                        <SidebarMenuItem key={menu.title}>
                            <SidebarMenuButton
                                tooltip={menu.title}
                                asChild
                                isActive={false}
                                onClick={(e) => {
                                    if(!isSignedIn && menu.auth) {
                                        e.preventDefault()
                                        return clerk.openSignIn()
                                    }
                                }}
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