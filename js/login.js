document.getElementById('submit-btn').addEventListener('click', function(){
    const userEmail =document.getElementById('user-email')
    const email =userEmail.value;
    const userPassword =document.getElementById('user-password')
    const password =userPassword.value;
   

    // Danger: oboidate
    if(email === 'nijam@gmail.com' && password === '123456'){
        window.location.href ='bank.html'
    }
    else{
        alert('Your password is incorrect')
    }
})