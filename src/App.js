import { Fragment } from "react";
import "./App.css";
import { AuthProvider, ToolbarFunctional } from "./components";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Fragment>
          <ToolbarFunctional />
        </Fragment>
      </AuthProvider>
    </div>
  );
}

export default App;
