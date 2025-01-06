import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";
import AboutUs from "./pages/AboutUs";

export function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}
