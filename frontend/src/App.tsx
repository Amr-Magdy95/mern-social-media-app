import { Routes, Route } from "react-router-dom"
import Signup from "./features/auth/pages/Signup"
import Signin from "./features/auth/pages/Signin"
import AuthLayout from "./app/pages/AuthLayout"
import { store } from "./app/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>

        <Route path="/" element={<AuthLayout />}>
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Route>
      </Routes>
    </Provider>
  )
}

export default App