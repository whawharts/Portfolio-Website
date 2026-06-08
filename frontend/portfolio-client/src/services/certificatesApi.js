import { apiClient } from './apiClient'

export const certificatesApi = {
  getCertificates(query) {
    return apiClient.get('/certificates', { query })
  },
}
