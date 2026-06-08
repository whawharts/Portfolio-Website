import { findCertificates } from '../repositories/certificates.repository.js'

export async function getCertificates(query = {}) {
  const certificates = await findCertificates(query)

  return certificates.map(({ title, provider, category, issuedAt, credentialUrl, imageUrl, summary }) => ({
      title,
      provider,
      category,
      issuedAt,
      credentialUrl,
      imageUrl,
      summary,
    })
  )
}
