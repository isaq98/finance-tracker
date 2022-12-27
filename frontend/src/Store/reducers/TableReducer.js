const initialState = {
    expenses: []
};

export function TableReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_ALL_EXPENSES':
            return {
                ...state,
                expenses: [...action.expenseArr]
            }
        default:
            return state;
    }
}