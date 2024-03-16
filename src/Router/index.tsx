import { Routes, Route } from "react-router-dom";
import RegisterPage from "../Pages/RegisterPage";
import HomePage from "../Pages/HomePage";
import Todo from "../Pages/Todo";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/todo" element={<Todo />}></Route>
    </Routes>
  );
};
export default Router;
