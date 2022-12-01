import { createStore } from "redux";
import reducers from "./rootReducers";

export const store = createStore(reducers);


