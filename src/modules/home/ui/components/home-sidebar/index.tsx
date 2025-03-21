import { Sidebar, SidebarContent } from "@/components/ui/sidebar"
import { Mainsection } from "./main-section"
import { Separator } from "@/components/ui/separator"
import { Personalsection } from "./personal-section"

export const Homesidebar = () => {
    return (
        <Sidebar className="pt-16 z-40 border-none" collapsible="icon">
            <SidebarContent className="bg-background" >
                <Mainsection />
                <Separator />
                <Personalsection />
            </SidebarContent>
        </Sidebar>
    )
}