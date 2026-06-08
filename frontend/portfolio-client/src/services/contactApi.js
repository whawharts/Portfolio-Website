import { apiClient } from './apiClient'

export const contactApi = {
  sendMessage(payload) {
    return apiClient.post('/contact', payload)
  },
}
