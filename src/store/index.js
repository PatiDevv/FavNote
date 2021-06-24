import { createStore } from "redux";
import notesApp from "../reducers/index";

const store = createStore(notesApp /* preloadedState, */, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
