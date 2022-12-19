import axios from "axios"
import { GET_TODO_FAILED, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "../constants/Constants"

export const getAllTodos = () => async (dispatch) => {
    dispatch({ type: GET_TODO_REQUEST })
    try {
        const res = await axios.get("");
        dispatch({
            type: GET_TODO_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_TODO_FAILED,
            payload: error.message
        })
    }
}