import {ACTIONS} from '../constants/types'

const initialState = {
    claims:[]
}

export const setClaimsReducer =( state = initialState, {type, payload})=>{
    console.log(type)
    switch(type){
        case ACTIONS.SET_CLAIMS:
            return{
                ...state,
                claims:payload
            }
        default:
            return state;
    }
}
// export const setClaimReducer =( state = initialState, {type, payload})=>{
//     console.log(type)
//     switch(type){
//         case ACTIONS.SET_CLAIM:
//             return{
//                 ...state,
//                 claim:payload
//             }
//         default:
//             return state;
//     }
// }