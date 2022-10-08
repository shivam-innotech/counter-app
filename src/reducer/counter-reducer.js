export const counterReducer = (state, action) => {
    const { groupId } = action.payload;
    const counterGroup = state[groupId];
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, [groupId]: handleCounterGroupState(counterGroup, action.type, action.payload) };
        case 'DECREMENT':
            return { ...state, [groupId]: handleCounterGroupState(counterGroup, action.type, action.payload) };
        case 'ADD_GROUP':
            state[groupId] = action.payload.newGroup;
            return { ...state };
        default:
            return state;
    }
};

const handleCounterState = (actionType, payload, counterState) => {
    if (actionType === 'INCREMENT') {
        return { ...counterState, value: counterState.value + payload.incrementBy };
    }
    if (actionType === 'DECREMENT') {
        return { ...counterState, value: counterState.value - payload.incrementBy };
    }
};

const handleCounterGroupState = (group, actionType, payload) => {
    const previousCounterState = group.counters[payload.id];
    const newCounterState = handleCounterState(actionType, payload, previousCounterState);
    return {
        ...group,
        counters: {
            ...group.counters,
            [payload.id]: newCounterState
        }
    };
};