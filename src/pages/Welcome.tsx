import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="main-wrapper">
      <h1>Welcome Page</h1>
      <button className="btn" onClick={() => navigate("/login")}>
        Login
      </button>
      <button className="btn" onClick={() => navigate("/register")}>
        Create Account
      </button>
    </div>
  );
};

export default Welcome;
