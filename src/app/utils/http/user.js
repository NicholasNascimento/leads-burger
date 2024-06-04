import api from '../../../services/api'

export async function loginUser(username, password) {
  return await api.post('login', {
    username,
    password
  })
}

export async function registerUser(username, password) {
  return await api.post('register', {
    username,
    password
  })
}
