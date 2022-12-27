export async function getAllBills() {
    const billData = await fetch('/bills');
    const billDataJSON = await billData.json();
    return billDataJSON;
}

export async function postNewBill(expenseObj) {
    if(expenseObj) {
        const {category, cost, date, description} = expenseObj;
        const postResponse = await fetch('/bills', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            category: category,
            cost: Number.parseInt(cost),
            date: date,
            description: description
        })
    });
        const responseJSON = postResponse.json();
        return responseJSON;
    }
}