import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormModal";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";

import { Header } from "./components/Header/Header";

import Navigation from "./components/Navigation";
import BigImage from "./components/HomePage/BigImage/BigImage";
import LocationTiles from "./components/HomePage/LocationTiles";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  
  return  isLoaded && (
    <div>
      <Navigation isLoaded={isLoaded} />
      <Header isLoaded={isLoaded}/>
      <BigImage/>
      <LocationTiles/>
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
