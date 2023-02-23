    // step-1
document.getElementById('deposit-btn').addEventListener('click', function(){
    // step-2
   const depositField =document.getElementById('deposit-field');
   const depositAmountString =depositField.value;
   const newDepositAmount =parseFloat(depositAmountString);

// step-3
    const depositTotal =document.getElementById('deposit-total');
    const depositTotalString =depositTotal.innerText;
    const previousDepositAmount =parseFloat(depositTotalString);
    // step-4: add number to set the total deposit 
    const correntAmount = previousDepositAmount + newDepositAmount;
    depositTotal.innerText  =correntAmount;

    // step-5
    const balanceTotal =document.getElementById('balance-total');
    const balanceTotalString =balanceTotal.innerText;
    const newBalanceTotal =parseFloat(balanceTotalString);

    //step-5
    const correntBalance =newBalanceTotal + newDepositAmount;
    balanceTotal.innerText =correntBalance;
    // clear field 
    depositField.value ='';

})
