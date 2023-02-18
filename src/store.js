import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./features/filters/filtersSlice";
import todosReducer from "./features/todos/todosSlice";

const store = configureStore({
    reducer: {
        todos: todosReducer,
        filters: filtersReducer,
    },
});

export default store;
