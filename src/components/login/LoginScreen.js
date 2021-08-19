const LoginScreen = ({ history }) => {
  const handleClick = () => {
    history.replace("/");
    // history.push("/");
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
