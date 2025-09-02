import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="main-wrapper">
      <h1>Signin to your PopX account</h1>
      <input 
        type="email" 
        placeholder="Email Address"
        style={{
          display: "block",
          margin: "16px auto",
          padding: "16px",
          width: "320px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          fontSize: "1rem"
        }}
      />
      <input 
        type="password" 
        placeholder="Password"
        style={{
          display: "block",
          margin: "16px auto",
          padding: "16px",
          width: "320px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          fontSize: "1rem"
        }}
      />
      <button
        style={{
          display: "block",
          margin: "32px auto",
          padding: "24px 0",
          width: "350px",
          background: "#7c3aed",
          color: "white",
          fontWeight: "bold",
          fontSize: "2rem",
          borderRadius: "32px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => navigate("/profile")}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
