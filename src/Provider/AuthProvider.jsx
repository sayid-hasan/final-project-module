import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ONAUTH STATE CHANGE
  useEffect(() => {
    const unsubscrube = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current User ", currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscrube();
    };
  }, []);

  // create User

  const createUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  // login user
  const logIn = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  // update user
  const updateUser = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  // logout user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = { user, loading, createUser, logIn, logOut, updateUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
