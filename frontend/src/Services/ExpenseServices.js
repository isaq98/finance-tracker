export function getAllBills() {
    let billData = fetch('/bills');
    let billDataJSON = billData.json();
        // .then(res => res.json())
        // .then((data => returnData = data ));
    console.log('returnData: ', billDataJSON);
}