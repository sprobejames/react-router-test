import { Navigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUserProfile } from "../store/auth";

export default function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(true);
  const [referrer, setReferrer] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    // setTimeout(() => setLoading(false), 100);
    // console.log(`${window.location.host + location.path}`);
    // console.log(location);
    // setReferrer(
    //   encodeURI(
    //     `${window.location.protocol}//${
    //       window.location.host + location.pathname
    //     }`
    //   )
    // );
    dispatch(fetchUserProfile())
      .then(() => setLoading(false))
      .catch(() => {});
  }, [loading, location, dispatch]);

  return (
    !loading &&
    (user ? children : <Navigate to={`/login?redirectTo=${referrer}`} />)
  );
}
