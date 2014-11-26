$(document).ready(function ($) {

    $(window).scroll(function () {

        position = $(window).scrollTop();

        console.log(position);

        ballpos = $(".ball").position();

        if (position > 0 && position < 480) {

            $(".ball").css({

                "display":"inline",
                "top":(56.5 + .08*position +"vh"),
                "left":(30 + .100*position + "vw")
            
            });
            
        } else if(position <= 0) {

            $(".ball").css({
                "display": "none",
            });

        } else if (position >= 480) {

                $(".ball").css({

                    "top":(56.5 + .08*position + "vh"),
                    "left": (ballpos.left*100/$(window).width() + "vw")
                
                });    
            }        
    });
});