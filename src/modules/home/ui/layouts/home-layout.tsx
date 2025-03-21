import { SidebarProvider } from "@/components/ui/sidebar"
import Homenavbar from "../components/home-navbar"
import { Homesidebar } from "../components/home-sidebar"

interface Props {
    children: React.ReactNode
}

const Homelayout = ({children}: Props) => {
    return (
        <SidebarProvider>
            <div className="">
                <Homenavbar />
                <div className="flex min-h-screen pt-[4rem]">
                    <Homesidebar />
                    <main className="flex-1 overflow-y-auto">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}

export default Homelayout