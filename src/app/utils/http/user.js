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

export async function createMenuItem(itemData) {
  return await api.post('menu_items', itemData)
}

export async function getMenuItems() {
  return await api.get('menu_items')
}

export async function deleteMenuItem(id) {
  return await api.delete(`menu_items/${id}`)
}
