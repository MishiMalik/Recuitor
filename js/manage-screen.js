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

// promoted list
function openCity3(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent4");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active4", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active4";
}
document.getElementById("defaultOpenT").click();



$('#promote-stats-btn').hide()

$('#promote-job-btn').on('click', function() {
    $('#promote-stats-btn').show()
    $('#promote-stats-btn').addClass('active')
    $('.detail__job-div .main-heading').text('Add Jobs Promotion')
})

$('.tablinks').each(function() {
    $(this).on('click', function() {
        if($(this).hasClass('active') && $(this)[0].id !== "promote-stats-btn") {
            $('#promote-stats-btn').hide()
            $('.detail__job-div .main-heading').text('Detail of Jobs')
        }
    })
})