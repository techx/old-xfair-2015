
$(window).load(function() {
    $('.flexslider').flexslider();
});

$(document).ready(function(){

    $('#main .animated').animate({
        top: "+=20",
        opacity: 1
    }, 1500);

    var s = skrollr.init({
        forceHeight: false,
        constants: {
            foobar: function() {
                return $(window).height() - 80;
            }
        }
    });
    $('body').css('height','auto');
});


// // This function lags the page, look into more efficient ways
// function loadIn(DOMobj, off) {
//     $(document).ready(function(){
//         var offset = $(DOMobj).offset().top;
//         $(window).scroll( function(evt) {
//             var scroll = $(window).scrollTop();
//             var offHeight = $(window).height();
//             if (scroll + offHeight - off > offset) {
//                 $(DOMobj).animate({
//                     opacity:1
//                 },800);
//             }
//         });
//     });
// }

// loadIn("section.about #aboutcontent", 100);
// loadIn("section.about .img", 100);
// loadIn("section.employer .employercontent", 100);
// loadIn("section.employer .flexslider", 100);
// loadIn("section.exhibitor .exhibitorcontent", 100);
// loadIn("section.exhibitor .exhibits", 100);
// loadIn("section.info .title", 100);
// loadIn("section.info .faq", 100);
// loadIn("section.student .fadein", 100);
