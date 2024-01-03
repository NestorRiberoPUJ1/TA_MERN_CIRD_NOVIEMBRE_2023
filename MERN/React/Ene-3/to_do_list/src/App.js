
import './App.css';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import { useState } from 'react';

const App = () => {

  const [tasks, setTasks] = useState([]);


  return (
    <div className="App">
      <TodoForm setTasks={setTasks} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
