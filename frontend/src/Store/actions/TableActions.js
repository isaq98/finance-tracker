export function setExpenses(expenseArr) {
    return { type: 'SET_ALL_EXPENSES', expenseArr };
}

export function setSheetDate(date) {
    return { type: 'SET_SHEET_DATE', date };
}