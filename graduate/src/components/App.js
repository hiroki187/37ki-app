import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Chatapp from "./Chatapp";
import Recommend from "./Recommend";
import Profile from "./Profile";
import Todo from "./Todo";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Chatapp} />
            <Route path="/graduate/recommend" exact component={Recommend} />
            <Route path="/graduate/todo" exact component={Todo} />
            <Route path="/graduate/profile" exact component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
