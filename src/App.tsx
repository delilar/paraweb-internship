import { BrowserRouter, Routes, Route } from "react-router";
import PublicLayout from "@layouts/PublicLayout";
import PrivateLayout from "@layouts/PrivateLayout";
import Home from "@views/Home";
import TextContent from "@views/TextContent";
import Login from "@views/Login";
import Admin from "@views/Admin";
import NotFound from "@views/NotFound";

import "@style/reset.scss";

import RequireAuth from "@views/RequireAuth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="text-content" element={<TextContent />} />
        </Route>

        <Route path="/admin" element={
          <RequireAuth>
            <PrivateLayout />
          </RequireAuth>
        }>
          <Route index element={<Admin />} />
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App