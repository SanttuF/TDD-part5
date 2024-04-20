import { useState } from 'react'
import { sendHello } from './todoService.js'
import InputForm from './InputForm.js';

const App = () => {

  return (
    <div>
      <InputForm sendTodo={sendHello} />
    </div>
  );
}

export default App;
