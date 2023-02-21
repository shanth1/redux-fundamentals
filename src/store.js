import { configureStore } from "@reduxjs/toolkit";
import {
    includeMeaningOfLife,
    sayHiOnDispatch,
} from "./exampleAddons/enhancers";
import filtersReducer from "./features/filters/filtersSlice";
import todosReducer from "./features/todos/todosSlice";
import { asyncCustomMiddleware, print123 } from "./exampleAddons/middleware";

const store = configureStore({
    reducer: {
        todos: todosReducer,
        filters: filtersReducer,
    },
    middleware: [print123, asyncCustomMiddleware],
    enhancers: [sayHiOnDispatch, includeMeaningOfLife],
});

export default store;
