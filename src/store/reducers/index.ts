import {AnyAction, combineReducers} from "redux";
import app from './app'
import {HYDRATE} from "next-redux-wrapper";

const rootReducer = combineReducers({
    app
})

export const reducer = (state: RootState, action: AnyAction) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        }
        return nextState
    } else {
        return rootReducer(state, action)
    }
}

export type RootState = ReturnType<typeof rootReducer>