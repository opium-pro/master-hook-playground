import { useStorage, createAction } from 'master-hook'

export const makePunName = createAction(async () => {
  const { setPunName, firstName } = useStorage('names')
  const punName = firstName + ' Shm' + firstName?.slice(1)
  setPunName(punName)
})


export const makePunNameWithDelay = createAction(() => {
  return new Promise((res) => {
    setTimeout(() => {
      makePunName()
      res()
    }, 2000)
  })
}, ['names'])