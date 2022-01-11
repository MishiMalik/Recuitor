// const togglePassword = document.querySelector('#togglePassword');
// const password = document.querySelector('#password');

// togglePassword.addEventListener('click', function (e) {
//     // toggle the type attribute
//     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//     password.setAttribute('type', type);
//     // toggle the eye / eye slash icon
//     this.classList.toggle('bi-eye');
// });



// =======================copy text=======================
// function copyFunction() {
//     /* Get the text field */
//     var copyText = document.getElementById("myInput");
  
//     /* Select the text field */
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
//      /* Copy the text inside the text field */
//     navigator.clipboard.writeText(copyText.value);
  
//     /* Alert the copied text */
//     alert("Copied the text: " + copyText.value);
//   }
//   $(function () {
//     $('[data-toggle="tooltip"]').tooltip()
//   });

// function myCopyFunction() {
//     var copyText = document.querySelector(".code-input");
//             copyText.select();
//             copyText.setSelectionRange(0, 99999);
//             navigator.clipboard.writeText(copyText.value);
//     var copyText = document.querySelector(".code-input");
//     var tooltip = document.getElementById("myTooltip");
//     tooltip.innerHTML = "Copied " ;
// }

// function outFunc() {
//     var tooltip = document.getElementById("myTooltip");
//     tooltip.innerHTML = "Copy to clipboard";
// }
function copyText () {
    let buttons = document.querySelectorAll('.copy-btn');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let copyText = button.parentElement.nextElementSibling;
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(copyText.value);

            button.previousElementSibling.innerHTML = "Copied";
        })

        button.addEventListener('mouseout', () => {
            button.previousElementSibling.innerHTML = "Copy to Clipboard";
        })
    })
}

copyText();
