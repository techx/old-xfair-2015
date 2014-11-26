$(document).ready(function ($) {

    $(window).scroll(function () {

        if ($(this).scrollTop() > 0) {
            $(".ball").css({
                "display":"inline",
            });

        } else if($(this).scrollTop() <= 0) {
            $(".ball").css({
                "display": "none",
            });
        }
    });
});