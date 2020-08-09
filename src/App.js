import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Task from './components/Task';
import Travel from './components/Travel';
import Work from './components/Work';
import Groceries from './components/Groceries';
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
      <Route exact path = "/">
          <div className = "App__tasks">
            <Header title = "My Day"/>
            <Task />
          </div>
          </Route>
          <Route path = "/groceries">
          <div className = "App__tasks">
            <Header title = "Groceries" />
            <Groceries />
          </div>
          </Route>
          <Route path = "/work" >
          <div className = "App__tasks">
            <Header title = "Work"/>
            <Work />
          </div>
          </Route>
          <Route path = "/travel">
          <div className = "App__tasks">
            <Header title = "Travel" />
            <Travel />
          </div>
          </Route>
      </Switch>
      </ContextProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
