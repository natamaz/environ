
$(document).ready(function () {

    $( function() {
        $( ".accordion" ).accordion({
            active: false,
            collapsible: true

        });
    } );


    <!-- меню -->
    $("#navToggle").click(function() {
        $(this).toggleClass("active");
        $(".overlay").toggleClass("open");
        // this line ▼ prevents content scroll-behind
        $("body").toggleClass("locked");
        $(".text_anime").toggleClass("none");

    });
    <!-- конец мею -->

    $( function() {
        $( "#tabs" ).tabs();
    } );
    
    $('.slider-for' ).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: false,
        infinite:false,
        swipeToSlide:true,
        swipe:true,
        variableWidth:true,
        focusOnSelect: true
    });


});
