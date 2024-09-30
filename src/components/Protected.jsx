import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = ({ Component }) => {
  const user = useSelector((state) => state.auth.user);
  return user ? (
    <>
      <Component />
    </>
  ) : (
    <Navigate to="/start" />
  );
};

export default Protected;
