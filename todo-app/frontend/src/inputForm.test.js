import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InputForm from './InputForm'

test('site has an inputbox and a submit button', () => {
    render(<InputForm />)
    screen.getByTestId('submitButton')
    screen.getByTestId('inputField')
})

test('site sends the inputbox data with the function provided to it', async () => {
    const sendTodo = jest.fn()
    const todos = []
    const setTodos = jest.fn()
    const fakeUser = userEvent.setup()

    const { container } = render(<InputForm sendTodo={sendTodo} todos={todos} setTodos={setTodos}/>)

    const input = container.querySelector('#textField')
    const submit = container.querySelector('#submitButton')

    await act(async () => {
        await fakeUser.type(input, 'test123')
        await fakeUser.click(submit)
        expect(sendTodo.mock.calls[0][0].text).toBe('test123')
    })

})

test('inputbox updates todos', async () => {
    const sendTodo = jest.fn()
    const todos = []
    const setTodos = jest.fn()
    const fakeUser = userEvent.setup()

    const { container } = render(<InputForm sendTodo={sendTodo} todos={todos} setTodos={setTodos}/>)
    const input = container.querySelector('#textField')
    const submit = container.querySelector('#submitButton')

    await act(async () => {
        await fakeUser.type(input, 'test123')     
        await fakeUser.click(submit)
        expect(setTodos.mock.calls[0][0].length).toEqual(1)
    })
})


test('inputbox appends todos', async () => {
    const sendTodo = jest.fn()
    const todos = ['abc']
    const setTodos = jest.fn()
    const fakeUser = userEvent.setup()

    const { container } = render(<InputForm sendTodo={sendTodo} todos={todos} setTodos={setTodos}/>)
    const input = container.querySelector('#textField')
    const submit = container.querySelector('#submitButton')

    await act(async () => {
        await fakeUser.type(input, 'test123')     
        await fakeUser.click(submit)
        expect(setTodos.mock.calls[0][0].length).toEqual(2)
    })
})