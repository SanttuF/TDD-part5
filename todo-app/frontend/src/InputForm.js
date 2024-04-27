import { useState } from "react"


const InputForm = ({ sendTodo, todos, setTodos }) => {

  const [text, setText] = useState('')

  const addTodo = (event) => {
    event.preventDefault()
    sendTodo({'todo': text})
    setTodos(todos.concat([{'todo': text}]))
    setText('')
  }

  return (
    <form onSubmit={addTodo}>
      <input
        id='textField'
        type='text'
        name='textField'
        data-testid='inputField'
        onChange={e => {setText(e.target.value)}}
      />
      <button id='submitButton' type='submit' data-testid='submitButton'>submit</button>
    </form>)  
}

export default InputForm