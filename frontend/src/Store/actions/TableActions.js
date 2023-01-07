export function getExpenses(expenseArr) {
    return { type: 'GET_ALL_EXPENSES', expenseArr };
}

export function setSheetDate(date) {
    return { type: 'SET_SHEET_DATE', date };
}