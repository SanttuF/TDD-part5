import { useState } from 'react'
import { sendHello } from './todoService.js'
const App = () => {

  const [text, setText] = useState('')

  return (
    <div>
      <form onSubmit={async (event) => {
        event.preventDefault()
        const data = await sendHello(event.target.textField.value)
        setText(data)
      }}
      >
        <input
          id='textField'
          type='text'
          name='textField'
        />
        <button id='submitButton' type='submit'>submit</button>
      </form>
      {text}
    </div>
  );
}

export default App;
