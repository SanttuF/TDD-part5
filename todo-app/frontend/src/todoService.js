import axios from 'axios'

// const url = 'http://localhost:8000/api/'
const url = 'http://localhost:8080'

export const sendTodo = async todo => {
    const res = await axios.post(url, todo)
    return res.data.text
}

export const getTodos = async () => {
    const res = await axios.get(url)
    return res.data
}