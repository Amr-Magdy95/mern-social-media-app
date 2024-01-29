import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Toast from "../../features/toast/components/Toast"

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Toast />
            <main className="flex-1 flex">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout