import { getFeaturedProjects, getProjectBySlug, getProjects } from '../services/projects.service.js'
import { validateProjectQuery } from '../validators/query.validator.js'
import { createError, sendSuccess } from '../utils/apiResponse.js'

export async function getProjectsHandler(req, res, next) {
  const validation = validateProjectQuery(req.query)

  if (!validation.isValid) {
    next(
      createError('Invalid project query parameters.', {
        statusCode: 400,
        code: 'VALIDATION_ERROR',
        errors: validation.errors,
      }),
    )
    return
  }

  try {
    return sendSuccess(res, {
      message: 'Projects retrieved.',
      data: await getProjects(req.query),
    })
  } catch (error) {
    next(error)
  }
}

export async function getFeaturedProjectsHandler(_req, res, next) {
  try {
    return sendSuccess(res, {
      message: 'Featured projects retrieved.',
      data: await getFeaturedProjects(),
    })
  } catch (error) {
    next(error)
  }
}

export async function getProjectBySlugHandler(req, res, next) {
  try {
    return sendSuccess(res, {
      message: 'Project retrieved.',
      data: await getProjectBySlug(req.params.slug),
    })
  } catch (error) {
    next(error)
  }
}
