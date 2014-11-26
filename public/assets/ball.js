$(window).scroll(function () {

    var windowtop = $(this).scrollTop();

    if (windowtop > 0) {

        $('.ball').css({
	 		'color': 'black';
	 		'float': 'left'
	        'font-size': '50pt';
	        'font-weight': 'bold';
	        'text-align': 'right';
	        'position': 'relative';
            'z-index':'9'
        });
    } else {
      //else revert '#move' position back to fixed
        $('.ball').css({
            'display': 'none';
	        'float':'left';
	        'font-size': '0pt';
	        'text-align': 'right';
	        'position': 'relative';
            'z-index': '-9'
        });
    }
});