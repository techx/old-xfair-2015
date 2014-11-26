$(document).ready(function ($) {

    $(window).scroll(function () {

        position = $(this).scrollTop()

        if (position > 0 && position < 480) {

            $(".ball").css({

                "display":"inline",
                "top":(56.5 + .08*position +"vh"),
                "left":(30 + .1*position + "vw")
            
            });
            
        } else if(position <= 0) {

            $(".ball").css({
                "display": "none",
            });

        } else if (position >= 480) {

                $(".ball").css({

                    "top":(56.5 + .08*position + "vh")
                
                });    
            }        
    });
});