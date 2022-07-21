import { useState } from "react";
import { createContext } from "react";
import { auth } from "../Hooks/firebase";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const authContextValue = { isAuth, setIsAuth, auth };
  return (
    <>
      <AuthContext.Provider value={authContextValue}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
