$(document).ready(function() {
    $(".Login").click(function() {
        $("#login-form").show();
        $("#form-signup").hide();
    });

    $(".Signup").click(function() {
        $("#login-form").hide();
        $("#form-signup").css("display", "block");
    });

});