import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import LoginFormPage from "./components/Forms/LoginFormModal/index.js";
import SignupFormPage from "./components/Forms/SignupFormPage";
import * as sessionActions from "./store/session";
import { Header } from "./components/Header/Header";
import HomePage from "./components/HomePage";
import LocationsInState from "./components/Location/LocationsInState";
import SingleLocation from "./components/Location/Singlelocation/Location";
import AllLocations from "./components/Location/AllLocations";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    isLoaded && (
      <div>
        <Header isLoaded={isLoaded} />
        {isLoaded && (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/locations" element={<AllLocations />} />
            <Route
              path="/locations/:stateName/:id"
              element={<SingleLocation />}
            />
            <Route
              path="/locations/:stateName"
              element={<LocationsInState isLoaded={isLoaded} />}
            />
            <Route path="/signup" element={<SignupFormPage />} />
            <Route path="/login" element={<LoginFormPage />} />
          </Routes>
        )}
      </div>
    )
  );
}

export default App;
