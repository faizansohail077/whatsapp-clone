import axios from 'axios'

const instance = axios.create({
    baseURL:'https://whatsappcopy.herokuapp.com/'
})
export default instance