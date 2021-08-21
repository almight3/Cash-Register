const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button")
const message = document.querySelector("#error-message");
const numberOfNotes = document.querySelectorAll(".number-of-notes")
const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];    

checkButton.addEventListener("click" ,function validateAmount(){
       message.style.display = "none"; 
       if(billAmount.value>0){
           if(cashGiven.value > billAmount.value){
             const amountToReturn = cashGiven.value - billAmount.value;
             calculateAmountToReturn(amountToReturn);         
            }
           else if(cashGiven.value === billAmount.value){
               showMessage("No Amount to be return")
           }

           else{
               showMessage("amount should be equal or greater than Bill amount");
               console.log(cashGiven.value)
               console.log(billAmount.value)
            }  
        }
       else{
           showMessage("Enter Valid Amount");
       }

       
});

 function  calculateAmountToReturn(amountToReturn){
     for(let i=0; i < availableNotes.length; i++){
         const noOfNotes = Math.trunc(amountToReturn/availableNotes[i])
         amountToReturn %= availableNotes[i];
         numberOfNotes[i].innerText = noOfNotes;
    
    }
};


function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}


