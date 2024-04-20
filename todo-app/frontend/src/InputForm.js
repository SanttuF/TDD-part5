

const InputForm = ({ sendTodo }) => {

    return (<form onSubmit={(event) => {
        event.preventDefault()
        console.log(event.target.textField.value)
        sendTodo(event.target.textField.value)
    }}
      >
        <input
          id='textField'
          type='text'
          name='textField'
          data-testid='inputField'
        />
        <button id='submitButton' type='submit' data-testid='submitButton'>submit</button>
      </form>)  
}

export default InputForm