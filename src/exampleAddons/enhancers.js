export const sayHiOnDispatch = (configureStore) => {
    return (reducer, preloadedState, enhancers) => {
        const store = configureStore(reducer, preloadedState, enhancers);

        function newDispatch(action) {
            const result = store.dispatch(action);
            console.log("Hi!!");
            return result;
        }

        return { ...store, dispatch: newDispatch };
    };
};

export const includeMeaningOfLife = (configureStore) => {
    return (reducer, preloadedState, enhancers) => {
        const store = configureStore(reducer, preloadedState, enhancers);

        function newGetState() {
            return {
                ...store.getState(),
                meaningOfLife: 42,
            };
        }

        return { ...store, getState: newGetState };
    };
};
