$(document).ready(function() {

    $('#fullpage').fullpage({
        anchors:['home', 'about', 'work','contact']
    });

    $('.slider').slick({ 
    	dots: true,
    	arrows : false,
    });

    $(".btn-toggle-menu").click(function() {
    	$(".main_menu").toggleClass("hide-menu");
    });
});