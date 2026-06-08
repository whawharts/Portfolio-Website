import {
  findFeaturedProjects,
  findProjectBySlug,
  findProjects,
} from '../repositories/projects.repository.js'
import { createError } from '../utils/apiResponse.js'

function shapeProject(project) {
  return {
    title: project.title,
    slug: project.slug,
    summary: project.summary,
    description: project.description,
    category: project.category,
    status: project.status,
    isFeatured: project.isFeatured,
    thumbnailUrl: project.thumbnailUrl,
    liveUrl: project.liveUrl,
    githubUrl: project.githubUrl,
    caseStudyUrl: project.caseStudyUrl,
    startedAt: project.startedAt,
    completedAt: project.completedAt,
    images:
      project.images?.map(({ url, alt, sortOrder }) => ({
        url,
        alt,
        sortOrder,
      })) || [],
    techStack:
      project.techStack?.map(({ techStackItem }) => techStackItem.name) ||
      project.techStack ||
      [],
  }
}

export async function getProjects(query = {}) {
  const projects = await findProjects(query)
  return projects.map(shapeProject)
}

export async function getFeaturedProjects() {
  const projects = await findFeaturedProjects()
  return projects.map(shapeProject)
}

export async function getProjectBySlug(slug) {
  const project = await findProjectBySlug(slug)

  if (!project) {
    throw createError('Project not found.', {
      statusCode: 404,
      code: 'PROJECT_NOT_FOUND',
    })
  }

  return shapeProject(project)
}
