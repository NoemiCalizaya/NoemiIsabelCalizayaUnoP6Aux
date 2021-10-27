import { actions } from "../actions/actions";

export const AppReducer = (state, action) => {
    switch (action.type) {
        case actions.SEARCH_P: {
            const { payload } = action;
            return {...state, data: payload};
        }
        default: {
            return state;
        }
    }    
};