import React, { useState } from "react";
import './App.css';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  const addTask = () => {
    if (toDo.trim() !== '') {
      setToDos([...toDos, { id: Date.now(), text: toDo, status: 'todo' }]);
      setToDo('');
    }
  };

  const deleteTask = (id) => {
    setToDos(toDos.filter(obj => obj.id !== id));
  };

  const changeStatus = (id, newStatus) => {
    setToDos(toDos.map(task =>
      task.id === id ? { ...task, status: newStatus } : task
    ));
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕</h2>
      </div>

      <div className="addTask">
        <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={addTask} className="fas fa-plus"></i>
      </div>
      </div>

      <div className="parts">
        {/* To Do Section */}
        <div className="column">
          <h4>To Do</h4>
          {
            toDos.filter(task => task.status === 'todo').map(task => (
              <div className="todos" key={task.id}>
                <div className="todo">
                  <div className="left">
                    <p>{task.text}</p>
                    <span>{}</span>
                  </div>
                  <div className="right">
                    <button onClick={() => changeStatus(task.id, 'inprogress')}>Start</button>
                    <i onClick={() => deleteTask(task.id)} className="fas fa-times"></i>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        {/* In Progress Section */}
        <div className="column">
          <h4>In Progress</h4>
          {
            toDos.filter(task => task.status === 'inprogress').map(task => (
              <div className="todos" key={task.id}>
                <div className="todo">
                  <div className="left">
                    <p>{task.text}</p>
                  </div>
                  <div className="right">
                    <button onClick={() => changeStatus(task.id, 'completed')}>Complete</button>
                    <i onClick={() => deleteTask(task.id)} className="fas fa-times"></i>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        {/* Completed Section */}
        <div className="column">
          <h4>Completed</h4>
          {
            toDos.filter(task => task.status === 'completed').map(task => (
              <div className="todos" key={task.id}>
                <div className="todo">
                  <div className="left">
                    <p>{task.text}</p>
                  </div>
                  <div className="right">
                    <i onClick={() => deleteTask(task.id)} className="fas fa-times"></i>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
