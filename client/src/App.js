import React from "react";
import { BrowserRouter as Router, Route /* Switch */ } from "react-router-dom";
import CreateUserPage from "./components/CreateUserPage";
import UserPage from "./components/UserPage";
function App() {
  return (
    <Router>
      <Route exact path="/" component={CreateUserPage} />
      <Route exact path="/:name" render={(e) => <UserPage e={e} />} />
    </Router>
  );
}

export default App;
