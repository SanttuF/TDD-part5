
const InputForm = () => {
    return (<form onSubmit={(event) => {}}
      >
        <input
          id='textField'
          type='text'
          name='textField'
          data-testid='inputField'
        />
        <button id='submitButton' type='submit'>submit</button>
      </form>)
}

export default InputForm