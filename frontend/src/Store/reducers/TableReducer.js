const initialState = {
    expenses: []
};

export function TableReducer(state = initialState, action) {
    switch(action.type) {
        case 'SET_ALL_EXPENSES':
            return {
                ...state,
                expenses: [...action.expenseArr]
            }
        default:
            return state;
    }
}