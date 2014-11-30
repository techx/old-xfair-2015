$(document).ready(function ($) {

    $(window).scroll(function () {

        position = $(window).scrollTop();

        ballpos = $(".ball").position();

        console.log(position);

        if (position > 0 && position < 480) {

            $(".ball").css({

                "display":"block",
                "top":(56.6 + .08*position +"vh"),
                "left":(30.1 + .100*position + "vw")
            
            });

        } else if (position >= 480 && position < 928) {

                $(".ball").css({

                    "top":(56.6 + .08*position + "vh"),
                    "left":"77.95vw"
                
                });      

        } else if (position >= 928) {

                $(".ball").css({

                    "top":"130.84vh",
                    "left":"77.95vw"
                
                });            

        } 

    });

});