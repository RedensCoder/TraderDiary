import {Auth} from "./pages/Auth.jsx";
import {Registration} from "./pages/Registration.jsx";

import {Routes, Route} from "react-router-dom";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Auth />} />
        <Route path="/signup" element={<Registration />} />
      </Routes>
    </>
  )
}
