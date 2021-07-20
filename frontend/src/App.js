import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";

import { Header } from "./components/Header";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  
  return  isLoaded && (
    <div>
      <Header />
      <Switch>
        <Route path="/login">
          <LoginFormPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
