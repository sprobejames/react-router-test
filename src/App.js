import "./styles.css";
import api from "./utils/api";
import Router from "./routes";
import { Link } from "react-router-dom";

export default function App() {
  console.log(api.defaults.headers.common);

  return (
    <>
      <Link to="/" style={{ marginRight: "10px" }}>
        Home
      </Link>
      <Link to="/profile" style={{ marginRight: "10px" }}>
        Profile
      </Link>
      <Link to="/login">Login</Link>

      <br />
      <Router />
    </>
  );
}
