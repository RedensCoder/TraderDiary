import {Auth} from "./pages/Auth.jsx";
import {Routes, Route} from "react-router-dom";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Auth />} />
      </Routes>
    </>
  )
}
