import React from "react";
import { Route, Routes } from "react-router-dom";
import { auth } from "./firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { setISLoading } from "./features/loaderSlice";

// components
import UserLayout from "./layout/UserLayout";
import GestLayout from "./layout/GestLayout";
import FullScreenLoader from "./components/FullScreenLoader";


const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.userSlice.currentUser);
  const isLoading = useSelector(state => state.loaderSlice.isLoading);

  onAuthStateChanged(auth, () => {
    if (isLoading) dispatch(setISLoading(false));
  })

  return (
    <>
      <FullScreenLoader />
      {currentUser ? (
        <UserLayout />
      ) : (
        <GestLayout />
      )}
    </>
  );
};

export default App;
