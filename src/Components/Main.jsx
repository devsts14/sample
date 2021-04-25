import React from "react";
import { Switch, Route } from "react-router-dom";
import Fetch from "./Fetch";
import Create from "./Create";
import Upload from "./Upload";
import Project from "./Project";
import { useHistory, useLocation } from "react-router-dom";
const Main = () => {
  const history = useHistory();
  const location = useLocation();

  const fetch = (di) => {
    history.push(di);
  };
  const active = (loc) => {
    console.log(location.pathname, loc);
    if (location.pathname === loc) {
      return {
        backgroundColor: "#cccccc",
        color: "#0061a8",
      };
    }
  };
  return (
    <div className="main">
      <div className="main-1">
        <span onClick={() => fetch("/fetch")} style={active("/fetch")}>
          <i class="fas fa-file-download"></i> Fetch
        </span>
        <span onClick={() => fetch("/create")} style={active("/create")}>
          <i class="far fa-plus-square"></i> Create
        </span>
        <span onClick={() => fetch("/upload")} style={active("/upload")}>
          <i class="fas fa-file-upload"></i> Upload
        </span>
      </div>
      <div>
        <Switch>
          <Route exact path="/fetch" component={Fetch} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/fetch/project" component={Project} />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
