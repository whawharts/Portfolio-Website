import { apiClient } from './apiClient'

export const resumeApi = {
  getResume() {
    return apiClient.get('/resume')
  },
}
