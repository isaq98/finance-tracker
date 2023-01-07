const initialState = {
    sheet_date: '',
    expenses: []
};

export function TableReducer(state = initialState, action) {
    switch(action.type) {
        case 'SET_SHEET_DATE':
            return {
                ...state,
                sheet_date: action.date
            }
        case 'SET_ALL_EXPENSES':
            return {
                ...state,
                expenses: [...action.expenseArr]
            }
        default:
            return state;
    }
}