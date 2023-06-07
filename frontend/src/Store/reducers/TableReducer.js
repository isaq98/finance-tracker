const initialState = {
    sheet_date: '',
    expenses: [],
    section_title: 'Home'
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
        case 'SET_SECTION_TITLE':
            return {
                ...state,
                section_title: action.title
            }
        default:
            return state;
    }
}