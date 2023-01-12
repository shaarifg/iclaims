import { combineReducers } from "redux";

import { setClaimsReducer } from "./setClaimsReducer";
import { setClaimReducer } from "./setClaimR";
import { setDeletedReducer } from "./setDelete";


export const reducers = combineReducers({
    allClaims:setClaimsReducer,
    claim:setClaimReducer,
    search:setDeletedReducer
})