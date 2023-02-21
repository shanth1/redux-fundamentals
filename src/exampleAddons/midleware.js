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

export const print1 = (storeAPI) => (next) => (action) => {
    console.log("1");
    return next(action);
};

export const print2 = (storeAPI) => (next) => (action) => {
    console.log("2");
    return next(action);
};

export const print3 = (storeAPI) => (next) => (action) => {
    console.log("3");
    return next(action);
};
