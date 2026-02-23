import { applyMiddleware, createStore } from "redux";
import CreateReducerMovie from "./movieReducer"
import {thunk} from "redux-thunk"

const mystore=createStore(CreateReducerMovie,applyMiddleware(thunk))

export default mystore