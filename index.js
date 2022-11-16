const billAmount = document.querySelector("#bill-amount");
const cashReceived = document.querySelector("#cash-received");
const cashButton = document.querySelector(".cash-button");
const numNote = document.querySelectorAll(".num-note");
const message = document.querySelector(".message");

console.log(message.innerText);

function getMessage(text) {
    message.style.display = "block";
    message.innerText = text;
};

function checkBill(billValue) {
    if (billValue => 0) {
        return true
    } else {
        getMessage("The Bill Amount can not be negative or empty.")
    }
};

function checkCashReceived(billValue, cashReceived) {
    if (cashReceived > 0 & billValue > 0) {
        if (cashReceived > billValue) {
            refreshTable()
            pickCashNote(billValue, cashReceived);
            getMessage("");
        } else if (cashReceived === billValue) {
            refreshTable();
            getMessage("No cash to return");
        } else {
            refreshTable();
            getMessage("You are short on cash");
        }
    } else {
        refreshTable();
        getMessage("Please enter a valid amount");
    }
};

function refreshTable() {
    for (var i=0; i < numNote.length; i++) {
        numNote[i].innerText = "";
    }
}
function pickCashNote (billValue, cashReceived) {
    var moneyGive = cashReceived - billValue;
    // console.log("moneyGive", moneyGive)
    var currency = [2000, 500, 200, 100, 50, 20, 10, 1];
    for (var i=0; i < numNote.length; i++) {
        if (moneyGive < currency[i]) {
            continue;
        } else {
            var quotient = Math.floor(moneyGive/currency[i]);
            var remainder =  moneyGive%currency[i];
            numNote[i].innerText = quotient;
            console.log(quotient, remainder, currency[i])
            moneyGive = remainder;
 
        }
    }
}

function buttonCashHandler() {
    if (checkBill(Number(billAmount.value))) {
        checkCashReceived(Number(billAmount.value), Number(cashReceived.value));
    }
}


cashButton.addEventListener("click", buttonCashHandler);