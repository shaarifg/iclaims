import {ACTIONS} from '../constants/types'
const initialState = {
  search:false
}


export const setDeletedReducer =( state = initialState, {type, payload})=>{
    console.log(state)
    // console.log(type)
    switch(type){
        case ACTIONS.SET_SEARCH:
            return {
                ...state,
                search:!state.search
            }
        default:
            return state;
    }
}