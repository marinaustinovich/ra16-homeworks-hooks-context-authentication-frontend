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
  handleLogin: (login: string, password: string) => Promise<{ success: boolean }> | undefined; 

};

const AuthContext = React.createContext<AuthContextType>({
  token: null,
  profile: null,
  error: null,
  handleLogout: () => {},
  handleLogin: async (login: string, password: string) => {
    return { success: false };
  },
});

export default AuthContext;
