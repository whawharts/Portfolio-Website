import { findProfile } from '../repositories/profile.repository.js'
import { createError } from '../utils/apiResponse.js'

export async function getProfile() {
  const profile = await findProfile()

  if (!profile) {
    throw createError('Profile not found.', {
      statusCode: 404,
      code: 'PROFILE_NOT_FOUND',
    })
  }

  return {
    name: profile.name,
    slug: profile.slug,
    title: profile.title,
    headline: profile.headline,
    shortBio: profile.shortBio,
    longBio: profile.longBio,
    location: profile.location,
    availability: profile.availability,
    email: profile.email,
    avatarUrl: profile.avatarUrl,
    resumeUrl: profile.resumeUrl,
    socialLinks: profile.socialLinks
      .filter((socialLink) => socialLink.isVisible)
      .map(({ platform, label, url, sortOrder, isVisible }) => ({
        platform,
        label,
        url,
        sortOrder,
        isVisible,
      })),
  }
}
