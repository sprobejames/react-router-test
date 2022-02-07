import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route
        exact
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
