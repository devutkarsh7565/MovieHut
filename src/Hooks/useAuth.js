import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useAuth = () => {
  const auths = useContext(AuthContext);
  return { auths };
};
export default useAuth;
