import React from "react";
import { Profile } from "../components";

export type ErrorType = {
  message: string;
};

type AuthContextType = {
  token: string | null;
  profile: Profile | null;
  error: ErrorType | null;
  handleLogout: () => void;
  handleLogin: (login: string, password: string) => void;
};

const AuthContext = React.createContext<AuthContextType>({
  token: null,
  profile: null,
  error: null,
  handleLogout: () => {},
  handleLogin: () => {},
});

export default AuthContext;
