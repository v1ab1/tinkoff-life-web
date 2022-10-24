import axios from 'axios';

axios.defaults.baseURL = 'https://6356b5852712d01e14fae15e.mockapi.io/'


export const AuthService = {
    async login(email: string, password: string) {
        return axios.post('auth/login', {email, password})
    },
    async register(email: string, password: string) {
        return axios.post('auth/login', {email, password})
    } 
}