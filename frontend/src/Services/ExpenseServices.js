export async function getAllBills() {
    let billData = await fetch('/bills');
    let billDataJSON = await billData.json();
    return billDataJSON;
}