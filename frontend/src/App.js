import {Route, Switch} from 'react-router-dom';

import { Header } from "./components/Header";
import LoginFormPage from "./components/LoginFormPage";

function App() {
  return (
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
