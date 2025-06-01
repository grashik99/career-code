import { use } from "react";
import { AuthContext } from "../Authentication/AuthContext";
import { useNavigate } from "react-router";

const Private = ({ children }) => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  if (user && user.email) {
    return children;
  } else {
    navigate("/login");
  }
};
export default Private;
