import { createContext, useCallback } from "react";
import api from "../services/api";

interface AuthContextState {
  token: string;
  signIn({ username, password }: UserData): Promise<void>;
}
interface UserData {
  username: string;
  password: string;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ username, password }: UserData) => {
    const response = await api.post("/sessions", {
      username,
      password,
    });

    const { token } = response.data;
    localStorage.setItem("@PermissionYT:token", token);
  }, []);

  return (
    <AuthContext.Provider value={{ token: "2121312", signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
