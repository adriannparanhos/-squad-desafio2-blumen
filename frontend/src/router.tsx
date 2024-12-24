import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";

export function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
