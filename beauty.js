$(document).ready(function() {

    // HAMBURGER MENU TOGGLE
    $('#hamburger').click(function() {
        $('#menu').toggleClass('active');
        $(this).toggleClass('active');
    });

    // CLOSE MENU ON LINK CLICK
    $('.menu a').click(function() {
        $('#menu').removeClass('active');
        $('#hamburger').removeClass('active');
    });

    // BUTTON CLICK – SHOW MESSAGE
    $('#serviceBtn').click(function() {
        $('#output').text("You selected beauty services! Now choose from haircut, makeup or facial.");
        $(this).text("Service Selected");
    });

});
