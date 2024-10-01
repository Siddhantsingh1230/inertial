import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ERROR_STATUS, PENDING_STATUS } from "../lib/constants";

const Protected = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  const status = useSelector((state)=>state.auth.status);
  if(status === PENDING_STATUS){
    return <div>loading...</div>
  }if(status === ERROR_STATUS){
    return (
      <Navigate to="/start" />
    )
  }
  return(
    <>
      {children}
    </>
  )
};

export default Protected;
