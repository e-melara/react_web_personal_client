import React from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";

import "./scss/app.scss";
import ApplicationRoutes from "./config/routes";

function App() {
 return (
  <Router>
   <Switch>
    <ApplicationRoutes />
   </Switch>
  </Router>
 );
}

export default App;
