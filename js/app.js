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
const nextBtns2 = document.querySelectorAll(".btn-next2");
const prevBtns2 = document.querySelectorAll(".btn-prev2");
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

nextBtns2.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum++;
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

prevBtns2.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum--;
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

// 
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
// drafted list
function openCity2(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active2", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active2";
}
document.getElementById("defaultOpen2").click();
// 

// $(".gallery__cards  ").addClass("portfolio__projects grid");

// let btn = $('.state__list');

// btn.click(function (e) {
//     $('.state__list button').removeClass("active-port");
//     e.target.classList.add("active-port");

//     let selector = $(e.target).attr('data-filter');
//     $('.portfolio .grid').isotope({
//         filter: selector
//     });
//     return false;
// });
// $('.gallery__cards').isotope({ layoutMode: 'vertical' })
// var $grid = $('.gallery__cards').isotope({
//     // main isotope options
//     itemSelector: '.gallery__cards-item',
//     // set layoutMode
//     layoutMode: 'vertical'
//   })