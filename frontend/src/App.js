import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";


import LoginFormPage from "./components/LoginFormModal";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import { Header } from "./components/Header/Header";
import HomePage from "./components/HomePage";
import LocationsInState from "./components/Location/LocationsInState";
import SingleLocation from "./components/Location/Singlelocation/Location";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    
  }, [dispatch]);

  
  return  isLoaded && (
    <div>
      <Header isLoaded={isLoaded} /> 
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <HomePage/>
          </Route>
          <Route exact path='/locations/:state/:id'>
            <SingleLocation isLoaded={isLoaded}/>
          </Route>
          <Route exact path='/locations/:state'>
            <LocationsInState isLoaded={isLoaded}/>
          </Route>
          
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
