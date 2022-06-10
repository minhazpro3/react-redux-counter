import { createStore } from "redux";
import counterReducers from "./component/services/reducers/counterReducers";

const store = createStore(counterReducers)
export default store