import {ACTIONS} from '../constants/types'

const initialState = {
    claim:[]
}


export const setClaimReducer =( state = initialState, {type, payload})=>{
    // console.log(type)
    switch(type){
        case ACTIONS.SET_CLAIM:
            return{
                ...state,
                claim:payload
            }
        default:
            return state;
    }
}