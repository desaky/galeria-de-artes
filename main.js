$(document).ready(function() {
    $('.gallery-item img').on('click', function() {
        const src = $(this).attr('src');
        const title = $(this).siblings('.caption').text();
        
        $('#modal-image').attr('src', src);
        $('#caption').text(title);
        $('#modal').fadeIn();
    });

    $('.close').on('click', function() {
        $('#modal').fadeOut();
    });

    $(window).on('click', function(event) {
        if ($(event.target).is('#modal')) {
            $('#modal').fadeOut();
        }
    });
});