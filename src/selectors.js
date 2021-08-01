import { useStorage, createSelector } from 'master-hook'

export const fullName = createSelector(
  () => useStorage('names').firstName,
  () => useStorage('names').lastName,

  (firstName, lastName) => {
    return `${firstName || 'Noone'}, the worthy member of ${lastName || 'Noone'}s`
  })