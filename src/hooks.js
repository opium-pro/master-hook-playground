import { MasterHook } from 'master-hook'
import * as actions from './actions'
import * as selectors from './selectors'

export const useNames = MasterHook({
  initialState: { firstName: undefined, lastName: undefined, punName: undefined },
  storage: 'names',
  actions,
  selectors,
  cache: {
    firstName: 0,
    lastName: 0,
  }
})