import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

const login = (data) => {
  axios.post('users/login', { user: data })
}

export default { login }
