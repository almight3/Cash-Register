const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button")
const message = document.querySelector("#error-message");
const numberOfNotes = document.querySelectorAll(".number-of-notes")
const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateAmount() {
    message.style.display = "none";
    clearTables();
    if (billAmount.value > 0) {
          

            if(parseInt(cashGiven.value) > billAmount.value) {
            console.log("end")

            const amountToReturn = cashGiven.value - billAmount.value;
            calculateAmountToReturn(amountToReturn);
            }
            else if (cashGiven.value === billAmount.value) {
            showMessage("No Amount to be Return")

              }
            else {
            showMessage("Amount should be equal or greater than Bill amount");
           
            
        }
    } else {
        showMessage("Enter Valid Amount");
    }


});

function calculateAmountToReturn(amountToReturn) {
    for (let i = 0; i < availableNotes.length; i++) {
        const noOfNotes = Math.trunc(amountToReturn / availableNotes[i])
        amountToReturn %= availableNotes[i];
        numberOfNotes[i].innerText = noOfNotes;

    }
};


function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

function clearTables(){
    for(let i = 0; i<availableNotes.length; i++){
        numberOfNotes[i].innerText = 0; 
    }

}