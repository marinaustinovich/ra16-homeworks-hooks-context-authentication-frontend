import { Fragment } from 'react';
import './App.css';
import AuthProvider from './components/AuthProvider/AuthProvider';
import LandingPage from './components/LandingPage/LandingPage';
import ToolbarFunctional from './components/ToolbarFunctional/ToolbarFunctional';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Fragment>
          <ToolbarFunctional></ToolbarFunctional>
        </Fragment>
      </AuthProvider> 
    </div>
  );
}

export default App;
