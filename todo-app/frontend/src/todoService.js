import axios from 'axios'

export const sendHello = async msg => {
    const res = await axios.post('http://localhost:8000/api/', {msg})
    return res.data.text
}