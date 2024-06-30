function submitCardDetails() {
    // Retrieve form input values
    let cardNo = document.querySelector("#cardNumber").value;
    let cardName = document.querySelector("#cardName").value;
    let expiryMonth = document.querySelector("#expiryMonth").value;
    let cvv = document.querySelector("#cvv").value;

    // Update card details displayed
    document.querySelector("#displayCardNo").textContent = cardNo;
    document.querySelector("#displayCardName").textContent=cardName;
    document.querySelector("#displayMonth").textContent=expiryMonth;
    document.querySelector("#displayCVV").textContent=cvv;

    return false;


}