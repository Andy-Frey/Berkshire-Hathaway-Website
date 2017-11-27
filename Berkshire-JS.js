$(() => {

 // Fade with scrolling

 $(window).scroll(function () {

     $('.fadeIn').each(function () {

        var top_of_div       = $(this).offset().top;
        var bottom_of_div    = $(this).offset().top; + $(this).height();
        var top_of_window       = $(window).scrollTop();
        var bottom_of_window    = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > 1.05*top_of_div ){

            $(this).animate({'opacity':'1'},1400);

        }

    });

});


// Smooth scroll after clicking navbar items

$("#scrollButton").click(function () {
    $('html,body').animate({
        scrollTop: $("#news").offset().top},'slow');
});

// General notation --> will need to be adjusted to a for loop
$("#menuItem").click(function () {
    $('html,body').animate({
        scrollTop: $("#topDiv").offset().top},'slow');
});



//  Close navbar on click (first has to open though)

$(function(){
     var navMain = $(".navbar-collapse");
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 });

// end script

});
