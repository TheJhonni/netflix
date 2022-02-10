import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";

function App() {
  const user = null;
  const dispatch = useDispatch();

  useEffect =
    (() => {
      const unsubscribe = auth.onAuthStateChanged((userAuth) => {
        if (userAuth) {
          //logged in!
          console.log(userAuth);
          dispatch(login({ uid: userAuth.uid, email: userAuth.email }));
        } else {
          //logged out!

          dispatch(logout);
        }
      });
      return unsubscribe;
    },
    []);

  return (
    <BrowserRouter>
      <div className="app">
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
