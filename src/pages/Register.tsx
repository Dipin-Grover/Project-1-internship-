import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="main-wrapper">
      <h1>Create your PopX account</h1>
      <input type="text" placeholder="Full Name" />
      <input type="text" placeholder="Phone Number" />
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <input type="text" placeholder="Company Name" />
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
        onClick={() => navigate("/")}
      >
        Create Account
      </button>
    </div>
  );
};

export default Register;
