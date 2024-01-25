import { Fragment } from "react";
import {
  AuthProvider,
  Card,
  Error404,
  Logout,
  News,
  ToolbarFunctional,
} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path="/error404" element={<Error404 />} />
            <Route path="/news/:id" element={<Card />} />
            <Route path="/" element={<ToolbarFunctional />}>
            <Route
              path="/news"
              element={
                <Fragment>
                  <Logout />
                  <News />
                </Fragment>
              }
            />
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
