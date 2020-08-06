import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Task from './components/Task';
import {ContextProvider} from './Context/GLobalState';
import './App.scss';

function App() {
  return (
    <ContextProvider>
        <div className="App">
        <Sidebar />
        <div className = "App__tasks">
            <Header />
            <Task />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
