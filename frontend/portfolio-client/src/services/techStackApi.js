import { apiClient } from './apiClient'

export const techStackApi = {
  getTechStack() {
    return apiClient.get('/tech-stack')
  },
}
