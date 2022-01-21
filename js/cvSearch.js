// Cv Contents 
function openCitycv(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent-cv");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks-cv");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active-cv", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active-cv";
  }
  document.getElementById("defaultOpencv").click();
// make column fixed
  $(window).scroll(function (e) {
    var $el = $('.fixed-cv');
    var $nonFixed = $('.non-fixed-cv');
    var $table = $('.states__table');
    var $state = $('.tab-cv');
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() >= 215 && !isPositionFixed && $(window).width() > 991) {
        $el.css({ 'position': 'fixed', 'top': '80px' });
        $table.css({ 'padding': '0px 0px' });
        $state.css({'position':'fixed','top':'83px','z-index':'20' });
        $table.css({ 'overflow': 'hidden' });
        // $el.css({ 'width': '24.233333% ' });
        $nonFixed.css({ 'margin-left': 'auto' });

    }
    if ($(this).scrollTop() <= 215 && isPositionFixed) {
        $el.css({ 'position': 'static', 'top': '0px' });
        $table.css({ 'padding': '0px 0px' });
        $nonFixed.css({ 'margin-left': 'auto' });
        $state.css({ 'position': 'static', 'top': '0px' });
        // $el.css({ 'width': 'unset' });
    }

});