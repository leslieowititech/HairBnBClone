import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormModal";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
//needs to disapper
import LoginSignup from "./components/Header/LoginSignup";


import { Header } from "./components/Header/Header";

import Navigation from "./components/Navigation";
import BigImage from "./components/HomePage/BigImage/BigImage";
import LocationTiles from "./components/HomePage/LocationTiles";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    // dispatch(locationActions.findPlaces())
  }, [dispatch]);

  
  return  isLoaded && (
    <div>
      <Header isLoaded={isLoaded}/>
      <LoginSignup/>
      <BigImage/>
      <Navigation isLoaded={isLoaded} />
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
