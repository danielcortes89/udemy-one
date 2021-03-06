import { GET_REPOS, SEARCH_USERS, SET_LOADING, GET_USER, CLEAR_USERS } from '../types'

export default (state, action) => {
    const { payload } = action
    switch(action.type){
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case SEARCH_USERS:
            return {
                ...state,
                users: payload,
                loading: false
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                user: payload,
                loading: false
            } 
        case GET_REPOS: 
            return {
                ...state,
                repos: payload,
                loading: false
            }      
        default:
            return state
    }
}