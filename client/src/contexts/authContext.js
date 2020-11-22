import React, { useState, useEffect } from "react";
import { auth } from "../firebase";

export const AuthContext = React.createContext({ user: null });

// export function useAuth() {
//   return useContext(AuthContext);
// }

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      setCurrentUser({ currentUser: userAuth });
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
