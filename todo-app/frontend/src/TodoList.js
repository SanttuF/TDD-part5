const TodoList = ({ todos }) => {
  return (
    <div>
      <h2>Todos</h2>
      {todos
        .map((todo) => (
          <div key={todo.id}>
            <p>{todo.text}</p> <br />
          </div>
        ))
      }
    </div>
  )
}

export default TodoList