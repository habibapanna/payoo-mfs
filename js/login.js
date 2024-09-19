// console.log('button clicking file added')

// document.getElementBy('id).addEventListener('click', fun)

// search: form submit reloading the page
// step-1: set event handler
// document.getElementById('button-login')
// .addEventListener('click', function(event){
//     // step-2: prevent default behavior (prevent reloading browser)
//     event.preventDefault();
//     console.log('login button clicked');
//     // step-3: get the phone number
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber, pinNumber);
// // step-4: validate phone and pin
//     if(phoneNumber === '5' && pinNumber ==='1234'){
//         console.log('you are logged in');
//         // step-5: allow user to use the website
//     }
//     else{
//        alert('wrong phone number or pin') 
//     }
// })

document.getElementById('button-login').addEventListener('click',function(event){
    // console.log('button-clicked')
    event.preventDefault();

    // get phone number and pin
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);

    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('you are logged in')
        window.location.href = '/home.html';
    }
    else{
        alert('wrong phone number or pin')
    }
});
