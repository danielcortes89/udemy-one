import { SET_ALERT, REMOVE_ALERT } from '../types'

export default (state, action) => {
    const { payload } = action
    switch(action.type){
        case SET_ALERT:
            return payload
        case REMOVE_ALERT:
            return null
        default:
            return state
    }
}