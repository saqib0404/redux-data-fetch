import { GET_TODO_FAILED, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "../constants/Constants";

const initialState = {
    isLoading: false,
    todos: [],
    error: null
}

const todosRecucer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case GET_TODO_SUCCESS:
            return {
                isLoading: false,
                todos: action.payload,
                error: null
            };
        case GET_TODO_FAILED:
            return {
                todos: [],
                isLoading: false,
                error: action.payload
            };

        default:
            return state;
    }
}
export default todosRecucer;