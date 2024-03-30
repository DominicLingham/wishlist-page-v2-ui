import { Guid } from 'js-guid'

export const getCurrentDateTime = () => {
  const now = new Date()
  return now.toISOString()
}

export const createId = () => {
  return Guid.newGuid().toString()
}
