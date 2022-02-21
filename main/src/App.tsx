import * as React from "react";
import { Suspense } from "react";

import "./global.css";

import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";

// @ts-ignore
//const Navbar = React.lazy(() => import("ui/App"));
const Navbar = React.lazy(() => import("ui/Navbar"));

import routes from './routes';

const App = () => {
  return (
    <HashRouter>
      <Suspense fallback="loading...">
          <Navbar />
        </Suspense>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          )
        })}
      </Routes>
    </HashRouter>
  );
}

export default App;
