import { Outlet } from "react-router-dom"
import Toast from "../../features/toast/components/Toast"

const AuthLayout = () => {
    return (
        <main>
            <Toast />
            <Outlet />
        </main>
    )
}

export default AuthLayout