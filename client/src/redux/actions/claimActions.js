import { ACTIONS } from "../constants/types";

export const setClaims =(claims) =>{
    return{
        type:ACTIONS.SET_CLAIMS,
        payload:claims,
    }
}

export const setClaim =(claim) =>{
    return{
        type:ACTIONS.SET_CLAIM,
        payload:claim,
    }
}