import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(user);

  const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Logout = () => {
    return signOut(auth);
  };

  const loginExistUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateName = (information) => {
    return updateProfile(auth.currentUser, information);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const info = {
    createUserWithEmail,
    user,
    loading,
    Logout,
    loginExistUser,
    updateName,
  };
  return <AuthContext value={info}>{children}</AuthContext>;
};
export default AuthProvider;
