import { useState } from 'react'
import { sendHello } from './todoService.js'
import InputForm from './InputForm.js';
import TodoList from './TodoList.js';

const App = () => {

const [todos, setTodos] = React.useState([])

  return (
    <div>
      <InputForm sendTodo={sendHello} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
