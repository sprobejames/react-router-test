import { useDispatch } from "react-redux";
import { setUser } from "../store/auth";

export default function Login() {
  const dispatch = useDispatch();
  const handleLogin = async () => {
    await dispatch(setUser({ name: "John Doe" }));
  };

  return (
    <>
      Login page <button onClick={() => handleLogin()}>Login</button>
    </>
  );
}
