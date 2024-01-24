import { Routes, Route } from "react-router-dom"
import Signup from "./features/users/pages/Signup"
import Layout from "./app/pages/Layout"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Signup />} />
      </Route>
    </Routes>
  )
}

export default App