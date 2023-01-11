import { combineReducers } from "redux";

import { setClaimsReducer } from "./setClaimsReducer";
import { setClaimReducer } from "./setClaimR";


export const reducers = combineReducers({
    allClaims:setClaimsReducer,
    claim:setClaimReducer
})