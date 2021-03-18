import { combineReducers } from "redux"

import allProfiles from "./allProfiles"

export default combineReducers({
  profiles: allProfiles,
})
