import { useContext } from "react";
 
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }
  return navigate("/login");
};

export default PrivateRoute;
