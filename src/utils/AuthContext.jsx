import { onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import React, { createContext, useContext, useEffect, useState } from "react";
import auth from "../Firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signinWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    const logout = () => signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // just creating object so that we can pass directly there is no convension.
  const value = {
    currentUser,
    setCurrentUser,
    signinWithGoogle,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
