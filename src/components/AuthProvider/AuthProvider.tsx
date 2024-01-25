import { ReactNode, useState } from "react";
import useStorage from "../../hooks/useStorage";
import AuthContext from "../../contexts/AuthContext";
import { Profile } from "../Logout";

type Props = {
  children: ReactNode;
};

export const AuthProvider = (props: Props) => {
  const [token, setToken] = useStorage<string>(localStorage, "token");
  const [profile, setProfile] = useStorage<Profile | null>(
    localStorage,
    "profile",
    true
  );

  const [error, setError] = useState(null);

  const handleLogin = async (
    login: string,
    password: string
  ): Promise<{ success: boolean }> => {
    try {
      const response = await fetch(`${process.env.REACT_APP_AUTH_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ login, password }),
      });

      if (!response.ok) {
        if (response.status === 401 || response.status === 500) {
          const errorMessage = await response.json();
          setError(errorMessage);
          console.log("error", errorMessage);
        }
        throw new Error("Auth failed");
      }
      const { token } = await response.json();
      setToken(token);
      setError(null);
      return { success: true };
    } catch (e) {
      console.error(e);
      return { success: false };
    }
  };

  const handleLogout = () => {
    setToken(null);
    setProfile(null);
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{ handleLogin, handleLogout, token, profile, error }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
