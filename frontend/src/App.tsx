import { Routes, Route } from "react-router-dom"
import Signup from "./features/users/pages/Signup"
import Signin from "./features/users/pages/Signin"
import Layout from "./app/pages/Layout"
import { store } from "./app/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="register" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Route>
      </Routes>
    </Provider>
  )
}

export default App