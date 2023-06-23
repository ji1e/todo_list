import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "redux/modules/todos";

const rootReducer = combineReducers({
  todos: todos,
});
const store = createStore(rootReducer);

export default store;
