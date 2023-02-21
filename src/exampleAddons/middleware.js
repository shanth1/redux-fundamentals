// storeAPI contains getState and dispatch function
export function exampleMiddleware(storeAPI) {
    // next is dispatch or newDispatch (from enhancer) function
    return function wrapDispatch(next) {
        return function handleAction(action) {
            // Do anything here: pass the action onwards with next(action),
            // or restart the pipeline with storeAPI.dispatch(action)
            // Can also use storeAPI.getState() here

            return next(action);
        };
    };
}

export const print123 = (storeAPI) => (next) => (action) => {
    console.log("123");
    return next(action);
};

export const asyncCustomMiddleware = (storeAPI) => (next) => (action) => {
    console.log("dispatching", action.type);
    if (action.type === "todos/todoAdded") {
        setTimeout(() => {
            console.log("Added a new todo: ", action.payload);
        }, 1000);
    }
    return next(action);
};
