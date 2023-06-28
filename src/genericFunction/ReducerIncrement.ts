type actionsOptionsType = {
    INCREMENT: string,
    DECREMENT: string,
}

type initialStateType = {
    count: number
}

type ReducerCountState = {
    count: number;
};
  
type ReducerCountAction = {
    type: string;
    payload: number;
};

type ReducerCountType = {
    initialState: initialStateType,
    actionsOptions: actionsOptionsType,
    reducer: (
        state: ReducerCountState,
        action: ReducerCountAction
    ) => ReducerCountState;
};

export const ReducerCount:ReducerCountType = {
    initialState: {
        count: 0
    },

    actionsOptions: {
        INCREMENT: 'INCREMENT',
        DECREMENT: 'DECREMENT',
    },

    reducer: function(state, action) {
        let position = state.count
        switch (action.type) {
            case ReducerCount.actionsOptions.INCREMENT:
                position = state.count + 1;
                if (position === action.payload) {
                    position = 0
                }
                break
            case ReducerCount.actionsOptions.DECREMENT:
                position = state.count - 1;
                if(position < 0) {
                    position = action.payload - 1
                }
                break
            default:
                throw new Error(`Unsupported action type: ${action.type}`);
        }
        return {count: position}
    }
};