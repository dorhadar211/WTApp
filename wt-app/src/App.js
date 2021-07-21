import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <span>YOYO</span>
      </Route>
      <Route path="/track">
        <span>Train/Food</span>
      </Route>
      <Route path="/edit">
        <span>edit</span>
      </Route>

    </Switch>
  );
}

export default App;
