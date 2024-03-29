import { ChangeEvent, FormEvent, useContext, useState } from "react";

import "./LandingPage.css";
import AuthContext from "../../contexts/AuthContext";
import Error from "../Error/Error";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [form, setForm] = useState({
    login: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const { handleLogin, error: authError } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { login, password } = form;

    if (login && password) {
      try {
        const result = await handleLogin(login, password);
        
        if (result?.success) {
          setForm({ login: "", password: "" });
          navigate('/news')
        }
      } catch (e) {
        console.log("error", e);
      }
    } else {
      setError("Invalid input format");
    }
  };

  const onFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
    setError("");
  };

  return (
    <div className="landing-page">
      <h1>Welcome to our website!</h1>
      <p>Please login to continue.</p>
      <div className="form-wrapper">
        <p>Neto Social</p>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="login"
            onChange={onFieldChange}
            value={form.login}
            placeholder="Username"
            autoComplete="true"
          />
          <input
            type="password"
            name="password"
            onChange={onFieldChange}
            value={form.password}
            placeholder="Password"
            autoComplete="true"
          />
          <button type="submit">Login</button>
        </form>
      </div>

      <div className="banner">
        <h2>Neto Social</h2>
        <p>Facebook and VK killer</p>
      </div>
      {error && <Error error={error} />}
      {authError && <Error error={authError.message} />}
    </div>
  );
}

export default LandingPage;
