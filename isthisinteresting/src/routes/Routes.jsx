// contains all routing logic for application
// using https://www.youtube.com/watch?v=xMYo9jaMah8&ab_channel=CBTNuggets
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import FavoriteResources from "../pages/FavoriteResources";
import FirstPost from "../pages/posts/FirstPost";
import NotFoundPage from "../pages/NotFoundPage";





// import React from 'react'

// function Routes() {
//   return (
//     <div>Routes</div>
//   )
// }

// export default Routes


function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/">
          <FavoriteResources />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
        <Route path="/posts/:postId">
          <FirstPost />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
