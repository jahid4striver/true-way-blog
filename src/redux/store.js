import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import blogReducer from "./reducers/blogReducer";

const { createStore, applyMiddleware } = require("redux");


const store= createStore(blogReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;