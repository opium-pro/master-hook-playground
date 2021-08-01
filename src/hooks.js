import MasterHook from 'master-hook'
import { makePunName } from './actions'
import { fullName } from './selectors'

export const useNames = MasterHook({
  initialState: { firstName: undefined, lastName: undefined, punName: undefined },
  storage: 'names',
  actions: { makePunName },
  selectors: { fullName },
})