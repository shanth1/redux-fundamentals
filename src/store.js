import { configureStore } from "@reduxjs/toolkit";
import {
    includeMeaningOfLife,
    sayHiOnDispatch,
} from "./exampleAddons/enhancers";
import filtersReducer from "./features/filters/filtersSlice";
import todosReducer from "./features/todos/todosSlice";
import { print1, print2, print3 } from "./exampleAddons/midleware";

const store = configureStore({
    reducer: {
        todos: todosReducer,
        filters: filtersReducer,
    },
    middleware: [print1, print2, print3],
    enhancers: [sayHiOnDispatch, includeMeaningOfLife],
});

export default store;
