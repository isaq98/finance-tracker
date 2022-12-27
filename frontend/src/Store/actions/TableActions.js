export function getExpenses(expenseArr) {
    return { type: 'GET_ALL_EXPENSES', expenseArr };
}