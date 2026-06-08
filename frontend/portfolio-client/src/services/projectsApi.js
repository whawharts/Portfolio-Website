import { apiClient } from './apiClient'

export const projectsApi = {
  getProjects(query) {
    return apiClient.get('/projects', { query })
  },
  getFeaturedProjects() {
    return apiClient.get('/projects/featured')
  },
}
