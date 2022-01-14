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
function copyText() {
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



// In your Javascript (external .js resource or <script> tag)
$(document).ready(function () {
    $('.form-select').each(function () {
        $(this).select2()
    });
    $('#textInput').val($('#range').val() + "$");
    $('#textInput1').val($('#range1').val() + "$");
});


// With JQuery slider

function updateTextInput(val) {
    document.getElementById('textInput').value = val + "$";
}
function updateTextInputt(val) {
    document.getElementById('textInput1').value = val + "$";
}




// multisteps
const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".step-forms");
const progressSteps = document.querySelectorAll(".progress-step");


let formStepsNum = 0;

nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum++;
        updateFormSteps();
        // updateProgressbar();

    });
});

prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum--;
        updateFormSteps();
        // updateProgressbar();

    });
});

function updateFormSteps() {
    formSteps.forEach((formStep) => {
        formStep.classList.contains("step-forms-active") &&
            formStep.classList.remove("step-forms-active");
    });

    formSteps[formStepsNum].classList.add("step-forms-active");
}

// function updateProgressbar() {
//     progressSteps.forEach((progressStep, idx) => {
//         if (idx < formStepsNum + 1) { 
//             progressStep.classList.add("progress-step-active"); 
//         } 
//         else { 
//             progressStep.classList.remove("progress-step-active"); 
//         }
//     }); 
//     progressSteps.forEach((progressStep, idx) => {
//         if (idx < formStepsNum) {
//          progressStep.classList.add("progress-step-check"); 
//         } else { 
//         progressStep.classList.remove("progress-step-check"); }
//     }); 
//     const progressActive = document.querySelectorAll(".progress-step-active"); 
//     progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
// }
//  document.getElementById("submit-form").addEventListener("click", function () {
//     progressSteps.forEach((progressStep, idx) => {
//         if (idx <= formStepsNum) { 
//             progressStep.classList.add("progress-step-check"); 
//         } else { 
//             progressStep.classList.remove("progress-step-check");
//         }
//     });
//      var forms = document.getElementById("forms"); forms.classList.remove("form"); forms.innerHTML = '<div class="welcome"><div class="content"><svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg><h2>Thanks for signup!</h2><span>We will contact you soon!</span><div></div>';
// });