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
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [account_type, setAccount_type] = useState(null);

  // console.log(user);
  // console.log(account_type);

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
      axios
        .get(`http://localhost:3000/users/${currentUser.email}`)
        .then(function (response) {
          // handle success
          setAccount_type(response.data.account_type);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
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
    account_type,
  };
  return <AuthContext value={info}>{children}</AuthContext>;
};
export default AuthProvider;
