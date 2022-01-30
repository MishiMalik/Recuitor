// copy text to toolpit

function myCopyFunction() {
    var copyText = document.querySelector(".code-input");
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(copyText.value);
    var copyText = document.querySelector(".code-input");
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied " ;
}

// copy to clipboard
function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

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



// dropdowns with seach inputs
$(document).ready(function () {
    $('.form-select').each(function () {
        $(this).select2()
    });
    $('#textInput').val($('#range').val() + "$");
    $('#textInput1').val($('#range1').val() + "$");
});


// For Range Slider

function updateTextInput(val) {
    document.getElementById('textInput').value = val + "$";
}
function updateTextInputt(val) {
    document.getElementById('textInput1').value = val + "$";
}




// Progress buttons on Add job screen /// multisteps
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


//For Filter Input autocomplete

$(function () {
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "ActionScript",
        "BOption",
        "COption",
        "DOption",
        "EOption",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];


    $('.tags').each(function () {
        $(this).autocomplete({
            source: availableTags,
            select: function (event, ui) {
                event.preventDefault()
                var listChild = $('<li class="d-flex justify-content-between"><p class="mb-0">' + ui.item.value + '</p><span class="close"> x </span></li>')
                // $(".selected").prepend(listChild)
                let ul = $(this).parent().parent().find('.selected')
                ul.prepend(listChild)
                $(this).val("")
                // $(".modal-input").value="";
            }

        });
    })


    $('.selected').each(function () {
        $(this).on('click', '.close', function () {
            $(this.parentElement).remove();
        });
    })

    $('.selected-label p').each(function () {
        $(this).on('click', function () {
            $(this).parent().next().empty()
        })
    })

// change stars colors
    $('.stars').each(function () {
        $(this).on('click', function () {
            let star = $(this).find('svg')
            if (star.attr('fill') == 'none') {
                $(this).find('svg').attr('fill', '#157BFB')
            } else {
                $(this).find('svg').attr('fill', 'none')
            }
            // $(this).find('svg').toggleClass('star-color')
        })
    })



    $('.target-select').each(function () {
        $(this).on('select2:select', function (e) {
            // e.preventDefault()
            // console.log($(this).parent().next().find('ul'))
            let ul = $(this).parent().parent().find('ul')
            ul.append('<li class="select-item">' + $(this).val() + '<span class="cross">x</span></li>')
        });
    })
 
    // close selected tags

    $('.my-select').each(function () {
        $(this).on('click', '.cross', function () {
            // alert()
            $(this).parent().remove();
        })
    })



    // slect radio buttons on card click
    $('#method-card').on('click', function () {
        $('#credit-radio').prop('checked', true)
        $('.credit-detail').show()
    })

    $('#method-paypal').on('click', function () {
        $('#paypal-radio').prop('checked', true)
        $('.credit-detail').hide()
    })

    $('#credit-pay').on('click', function () {
        $(this).find('input[type="radio"]').prop('checked', true)
    })

    $('#paypal-pay').on('click', function () {
        $(this).find('input[type="radio"]').prop('checked', true)
    })

    $('.monthly__spends').each(function () {
        $(this).on('click', function () {
            $(this).find('input[type="radio"]').prop('checked', true)
        })
    })





});


// make column dixed
$(window).scroll(function (e) {
    var $el = $('.fixed-col');
    var $nonFixed = $('.non-fixed');
    var $table = $('.table-div');
    var $state__table = $('.states__table');
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() >= 140 && !isPositionFixed && $(window).width() > 991) {
        $el.css({ 'position': 'fixed', 'top': '120px' });
        $table.css({ 'padding': '18px 10px' });
        $state__table.css({ 'padding-right': '0px', 'overflow': 'hidden' });
        $table.css({ 'overflow': 'hidden' });
        $el.css({ 'width': '32.233333% ' });
        $nonFixed.css({ 'margin-left': 'auto' });

    }
    if ($(this).scrollTop() <= 140 && isPositionFixed) {
        $el.css({ 'position': 'static', 'top': '0px' });
        $table.css({ 'padding': '0px 0px' });
        $nonFixed.css({ 'margin-left': 'auto' });
        $el.css({ 'width': '33.333333%' });
    }

});
// make column dixed
$(window).scroll(function (e) {
    var $fixed_row = $('.fixed-row')
    var isPositionFixed = ($fixed_row.css('position') == 'fixed');
    if ($(this).scrollTop() >= 140 && !isPositionFixed && $(window).width() > 991) {
        $fixed_row.css({ 'position': 'fixed', 'top': '60px', 'left': '0px' });
        $fixed_row.css({ 'margin-top': '0px' });
    }
    if ($(this).scrollTop() <= 140 && isPositionFixed) {
        $fixed_row.css({ 'position': 'static', 'top': '0px' });
    }

});


// pay modal show hide divs
$('#pay-btn').on('click', function() {
    // alert()
    $('#staticBackdrop-check-out').modal('hide')
})

$('#candidate-research').hide()

let count = 0;
$('#no-thanks').on('click', function() {
    $('#exective-requirments').hide()
    if(count == 1) {
        $('#staticBackdrop-payment').modal('hide')
        $('#exective-requirments').show()
        $('#candidate-research').hide()
        
        count = 0;
    }else{
        $('#candidate-research').show()
        count++;
    }
    // $('#candidate-research').show()
})



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