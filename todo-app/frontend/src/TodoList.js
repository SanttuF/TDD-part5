const TodoList = ({ todos }) => {
  return (
    <div>
      <h2>Todos</h2>
      <ul>
      {todos
        .map((todo, i) => (
          <div key={i}>
            <li>{todo.todo}</li>
          </div>
        ))
      }
      </ul>
    </div>
  )
}

export default TodoList