import { useEffect, useState } from 'react'
import { sendTodo, getTodos } from './todoService.js'
import InputForm from './InputForm.js';
import TodoList from './TodoList.js';

const App = () => {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos().then(todos => setTodos(todos))
  }, [])

  return (
    <div>
      <InputForm sendTodo={sendTodo} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
