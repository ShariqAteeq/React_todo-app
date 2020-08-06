import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Task from './components/Task';
import './App.scss';

function App() {
  return (
    <div className="App">
        <Sidebar />
        <div className = "App__tasks">
            <Header />
            <Task />
        </div>
    </div>
  );
}

export default App;
