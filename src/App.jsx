import React, { Component } from 'react';
import './App.css';
import Info from './Info'

class TaskInput extends Component {
  render() {
    return (
      <form>
        <input  className="input" placeholder="Enter task..." type ="text"  />
      </form>
    );
  }
}

class Timer extends Component {
  render() {
    return (
      <div>
        <div className="circle flex-container">
          <i className="material-icons">arrow_drop_up</i>
          <p>25:00:00</p> {/*Timer placeholder*/}
          <i className="material-icons">arrow_drop_down</i>
        </div>
        <i className="material-icons play-arrow">play_arrow</i>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <button className="material-icons topleft"><i>info_outline</i></button>
        <button className="material-icons topright"><i>history</i></button>
        <div className="flex-container">
          <TaskInput />
          <Timer />
        </div>
      </div>
    );
  }
}

export default App;
