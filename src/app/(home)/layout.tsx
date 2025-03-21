import Homelayout from "../../modules/home/ui/layouts/home-layout"


interface Props {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
    return (
        <Homelayout>
            {children}
        </Homelayout>
    )
}

export default Layout