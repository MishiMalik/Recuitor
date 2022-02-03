$('.slider-cb').on('click', function () {
    if ($(this).prop('checked')) {
        $(this).parent().parent().find('.primary-text').css('color', '#157BFB');
        $(this).parent().parent().find('.primary-text').css( 'border','1px solid #157BFB');

        $(this).parent().parent().find('.primary-text').text('Primary');
    }

    if ($(this).prop('checked') == false) {
        $(this).parent().parent().find('.primary-text').css('color', '#BBBBBB');
        $(this).parent().parent().find('.primary-text').css( 'border','1px solid #BBBBBB');
        $(this).parent().parent().find('.primary-text').text('none');
    }
});
$('.remove').on('click', function () {
    $(this).closest('.tr').remove();
});