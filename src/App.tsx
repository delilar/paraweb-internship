import "./style/global/base.scss"

import { BrowserRouter, Routes, Route } from "react-router";
import PublicLayout from "./layouts/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout";
import Home from "./views/Home";
import Login from "./views/Login";
import Admin from "./views/Admin";
import NotFound from "./views/NotFound";
import "./style/global/base.scss";
import "./style/global/typography.scss"
import "./style/global/colors.scss"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<PrivateLayout />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
