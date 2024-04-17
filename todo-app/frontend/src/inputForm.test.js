import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import InputForm from './InputForm'

test('site has an inputbox and a submit button', () => {
    render(<InputForm />)
    screen.getByText('submit')
    screen.getByTestId('inputField')
})