import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import todosRecucer from "../redux/reducers/todosReducer";

const store = createStore(todosRecucer, applyMiddleware(thunk));

export default store;