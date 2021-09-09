import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../../types/types";

const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleClick = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    dispatch({
      type: types.login,
      payload: {
        name: "Yoan",
      },
    });
    history.replace(lastPath);
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
