import { apiClient } from './apiClient'

export const profileApi = {
  getProfile() {
    return apiClient.get('/profile')
  },
}
