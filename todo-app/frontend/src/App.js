import { useState } from 'react'
import { sendHello } from './todoService.js'
const App = () => {

  const [text, setText] = useState('')

  return (
    <div>
      {text}
    </div>
  );
}

export default App;
