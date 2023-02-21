import { configureStore } from "@reduxjs/toolkit";
import {
    includeMeaningOfLife,
    sayHiOnDispatch,
} from "./exampleAddons/enhancers";
import filtersReducer from "./features/filters/filtersSlice";
import todosReducer from "./features/todos/todosSlice";

const store = configureStore({
    reducer: {
        todos: todosReducer,
        filters: filtersReducer,
    },
    enhancers: [sayHiOnDispatch, includeMeaningOfLife],
});

export default store;
