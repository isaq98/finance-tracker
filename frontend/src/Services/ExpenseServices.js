export async function getAllBills() {
    const billData = await fetch('/bills');
    const billDataJSON = await billData.json();
    return billDataJSON;
}

export async function postNewBill(expenseObj) {
    console.log('data passed into async function: ', expenseObj);
    // const postResponse = await fetch({
    //     method: 'POST',
    //     body: JSON.stringify({
    //         category: expenseObj?.category,
    //         cost: expenseObj?.cost,
    //         date: expenseObj?.date,
    //         description: expenseObj?.description
    //     }),
    //     headers: {
    //         'Content-Type': 'application-json'
    //     }
    // });
    // const responseJSON = await postResponse.json();
    // return responseJSON;
}