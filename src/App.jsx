import React from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";

import "./scss/app.scss";
import ApplicationRoutes from "./config/routes";
import AuthProvider from "./providers/AuthProvider";

function App() {
 return (
  <AuthProvider>
   <Router>
    <Switch>
     <ApplicationRoutes />
    </Switch>
   </Router>
  </AuthProvider>
 );
}

export default App;
