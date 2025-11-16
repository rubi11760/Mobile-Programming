$(document).ready(function(){

    $("#menuBtn").click(function(){
        $("#menu").toggle();
    });

    $(".menu a").click(function(){
        $("#menu").hide();
    });

    $("#serviceBtn").click(function(){
        $("#output").text("You selected beauty services! Now choose from haircut, makeup or facial.");
        $("#serviceBtn").text("Service Selected");
    });

});
