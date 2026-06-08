import { saveContactMessage } from '../repositories/contact.repository.js'
import { validateContactPayload } from '../validators/contact.validator.js'

export async function createContactMessage(payload) {
  const validation = validateContactPayload(payload)

  if (!validation.isValid) {
    return {
      isValid: false,
      errors: validation.errors,
    }
  }

  const message = await saveContactMessage(validation.value)

  return {
    isValid: true,
    data: { id: message.id },
  }
}
