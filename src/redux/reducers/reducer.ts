import {API_TOKEN} from "./tokenApi";

export const appReducer = (state={},action: { type: string })=> {
    switch (action.type) {
        case API_TOKEN:
            return {...state, loading: true};
        default:
            return state;
    }
}

