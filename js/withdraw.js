    // step1
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // step-2
    const balanceField =document.getElementById('balance-field');
    const balanceFieldString =balanceField.value;
    const withdrawBalance =parseFloat(balanceFieldString);
    // step-3
    const balanceTotal =document.getElementById('balance-total');
    const balanceTotalString =balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalString);
    // step-4
    const correntBlance = previousBalance - withdrawBalance;
    balanceTotal.innerText = correntBlance;
    // step-5
    const withdrawTotal =document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotal.innerText;
    const totalBalanceWithdraw =parseFloat(withdrawTotalString);
    // step-6
    const correntWithdraw = totalBalanceWithdraw + withdrawBalance;
    withdrawTotal.innerText =correntWithdraw;


    // clear field 
    balanceField.value ='';

});