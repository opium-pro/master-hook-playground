import { useStorage, createAction } from 'master-hook'
import { random } from './utils/random'
import { adverbs, adjectives, nouns } from './utils/words'


export const makePunName = createAction((prefix) => {
  const { setPunName } = useStorage('names')
  const punName = `${prefix ? prefix+' ' : ''}${adverbs[random(0, adverbs.length-1)]} ${adjectives[random(0, adjectives.length-1)]} ${nouns[random(0, nouns.length-1)]}`
  setPunName(punName)
})


export const makePunNameWithDelay = createAction(async () => {
  return new Promise((res) => {
    setTimeout(() => {
      makePunName()
      res()
    }, 2000)
  })
}, 10000, 'names')