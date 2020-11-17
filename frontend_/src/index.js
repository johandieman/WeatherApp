import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
reportWebVitals(console.log);
