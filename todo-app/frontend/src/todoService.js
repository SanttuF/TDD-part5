import axios from 'axios'

export const sendTodo = async msg => {
    const res = await axios.post('http://localhost:8000/api/', {msg})
    return res.data.text
}

export const getTodos = async () => {
    const res = await axios.get('http://localhost:8000/api/')
    return res.data
}