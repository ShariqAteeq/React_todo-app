import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Task from './components/Task';
import {ContextProvider} from './Context/GLobalState';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import './App.scss';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <ContextProvider>
     <Sidebar />
      <Switch>
        <Route path = "/">
          <div className = "App__tasks">
            <Header />
            <Task />
          </div>
          </Route>
      </Switch>
      </ContextProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
