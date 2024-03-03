import { Routes, Route } from "react-router-dom";
import RegisterPage from "../Pages/RegisterPage";
import HomePage from "../Pages/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
    </Routes>
  );
};
export default Router;
