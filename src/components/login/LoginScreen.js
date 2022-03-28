import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../../types/types";
import { useNavigate } from "react-router";

const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleClick = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    dispatch({
      type: types.login,
      payload: {
        name: "Yoan",
      },
    });
    navigate(lastPath);
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>

      <button className="btn btn-primary" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
