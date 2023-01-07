export async function getAllBills() {
    const billData = await fetch('/bills');
    const billDataJSON = await billData.json();
    return billDataJSON;
}

export async function getAllSheets() {
    const sheetData = await fetch('/sheets');
    const sheetJSON = await sheetData.json();
    return sheetJSON;
}

export async function getIndividualSheet(id) {
    const sheetData = await fetch(`/sheets/${id}`);
    const sheetJSON = await sheetData.json();
    return sheetJSON;
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

export async function postNewSheet(date) {
    if(date) {
        const response = await fetch('/sheets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                month: date
            })
        });
        const responseJSON = response.json();
        return responseJSON;
    }
}