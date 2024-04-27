import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import TodoList from './TodoList'

test('TodoList lists all todos given to it', () => {
  const todos = [{'todo': 'test', 'id':0}, {'todo': 'test2', 'id':1}, {'todo': 'test3', 'id':2}]

  render(<TodoList todos={todos}/>)
  screen.getByText('test')
  screen.getByText('test2')
  screen.getByText('test3')
})