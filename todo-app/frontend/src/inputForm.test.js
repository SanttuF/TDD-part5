import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InputForm from './InputForm'

test('site has an inputbox and a submit button', () => {
    render(<InputForm />)
    screen.getByTestId('submitButton')
    screen.getByTestId('inputField')
})

test('site sends the inputbox data with the function provided to it', () => {
    const mockfn = jest.fn()
    const fakeUser = userEvent.setup()

    render(<InputForm sendTodo={mockfn}/>)
    const submit = screen.getByTestId('submitButton')
    const input = screen.getByTestId('inputField')

    fakeUser.type(input, 'test123')
    .then(() => {
        fakeUser.click(submit)
    })
    .then(() => {
        console.log(mockfn.mock.calls)

        expect(mockfn.mock.calls[0][0].toEqual({input}))
    })
})