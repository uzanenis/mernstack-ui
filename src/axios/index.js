import axios from 'axios'

const HTTP = axios.create({
    baseURL: 'http://localhost:5050'
})

export const login = async (formData) => await HTTP.post('/users/signin', formData)
export const signup = async (formData) => await HTTP.post('/users/signup', formData)