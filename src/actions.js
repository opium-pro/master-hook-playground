import { useStorage } from 'master-hook'

export const makePunName = () => (dispatch, getState) => {
  const { setPunName, firstName, lastName } = useStorage('names')
  const punName = 'Shm' + firstName.slice(1) + '-Shm' + lastName.slice(1)
  setPunName(punName)
}