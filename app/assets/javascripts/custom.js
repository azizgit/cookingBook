(function ($) {
    "use strict";

    
    /*-----------------------------------------------------------------------------------*/
    /* home main slider variation three
     /*-----------------------------------------------------------------------------------*/
    if (jQuery().slick) {

        // Slider home variation one
        $('#sync1').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 7000,
            asNavFor: '#sync2',
            infinite: true,
            pauseOnHover : true,
            prevArrow: $('.left-arrow'),
            nextArrow: $('.right-arrow')
        });

        $('#sync2').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '#sync1',
            speed: 1000,
            arrows: false,
            fade: true,
            pauseOnHover: true
        });


        // Fluid slider home variation two
        $('.fluid-slider-var2').slick({
            autoplay: true,
            infinite: true,
            fade: true,
            pauseOnHover: false,
            dots: true
        });


        // Slider home variation three
        $('.box-slider-var3').slick({
            autoplay: true,
            infinite: true,
            fade: true,
            pauseOnHover: true,
            dots: true
        });


        // Recipe slider variation two
        $('.slider-detail2').slick({
            autoplay: true,
            infinite: true,
            pauseOnHover: true,
            prevArrow: $('.left-arrow'),
            nextArrow: $('.right-arrow')
        });


        // shortcode slider function
        $('#shortcode-slider1').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 7000,
            asNavFor: '#sync2',
            infinite: true,
            pauseOnHover : true,
            prevArrow: $('.sc-slider-left'),
            nextArrow: $('.sc-slider-right')
        });


        // Slick search recipe types carousel
        $('#search-carousel').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            touchThreshold: 50,
            arrows: false,
            autoplaySpeed: 1000,
            speed: 1000,
            pauseOnHover: false,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3

                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4

                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3

                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 2

                    }
                }
            ]
            //infinite: false
        });



        // post slider
        $('.post-slider').slick({
            autoplay: true,
            prevArrow: $('.left-arrow'),
            nextArrow: $('.right-arrow')

        });


        // latest news slider
        $('.latest-news-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            autoplay: false
        });

        // unslick on print

        $(".print-button").on('click', function(e){

            $(".steps-tabs").slick('unslick');
            $(".steps-detail").slick('unslick');
            window.print();
            e.preventDefault();
        } );
    }



    /*-----------------------------------------------------------------------------------*/
    /* Flex Slider functions
    /*-----------------------------------------------------------------------------------*/

    if (jQuery().flexslider) {

        // Recipe detail variation one thumbnail slider
        $('#recipe-carousel-flex').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 100,
            itemMargin: 19,
            // move: 1,
            asNavFor: '#single-slider-flex'
        });

        $('#single-slider-flex').flexslider({
            animation: "slide",
            directionNav: false,
            controlNav: false,
            animationLoop: false,
            slideshow: true,
            sync: "#recipe-carousel-flex"
        });

        $('.top-slider .custom-arrows span').on('click', function(){
            var direction = $(this).data('direction');
            $('#single-slider-flex').flexslider(direction);
            return false;
        });

        $('#recipe-slider-carousel .custom-arrows span').on('click', function(){
            var direction = $(this).data('direction');
            $('#recipe-carousel-flex').flexslider(direction);
            return false;
        });


        // Flex slider for shortcoded thumbnail slider
        $('#shortcode-slider-carousel').flexslider({
            animation: "slide",
            controlNav: false,
            directionNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 100,
            itemMargin: 19,
            // move: 1,
            asNavFor: '#shortcode-slider-top'
        });

        $('#shortcode-slider-top').flexslider({
            animation: "slide",
            directionNav: false,
            controlNav: false,
            animationLoop: false,
            slideshow: true,
            sync: "#shortcode-slider-carousel"
        });

        $('.wrapper-slider-detail .shortcode-arrows span').on('click', function(){
            var direction = $(this).data('direction');
            $('#shortcode-slider-top').flexslider(direction);
            return false;
        });

        $('.shortcode-slider-thumb .shortcode-arrows span').on('click', function(){
            var direction = $(this).data('direction');
            $('#shortcode-slider-carousel').flexslider(direction);
            return false;
        });

    }



    /*-----------------------------------------------------------------------------------*/
    /* Mean Menu
    /*-----------------------------------------------------------------------------------*/
    function menuDrop(target){
        var mainMenuItem = $(target);
        mainMenuItem.on( 'mouseenter',
            function () {
                $(this).children('ul').slideDown(200);
            });

        mainMenuItem.on( 'mouseleave',
            function () {
                $(this).children('ul').stop(true).slideUp(200);
            }
        );
    }

    menuDrop(".top-nav ul li");
    menuDrop(".nav-collapse ul li");


    if($(".header").hasClass("header-var1")){
        var navList = $(".main-menu.left").html();
        navList += $(".main-menu.right").html();


        $('.responsive-menu').html("<ul>" + navList + "</ul>");
    }

    if (jQuery().meanmenu) {
        $('.responsive-menu').meanmenu({
            meanScreenWidth: "991"
        });
    }



    /*-----------------------------------------------------------------------------------*/
    /*	Animation CSS integrated with wow.js Plugin
     /*----------------------------------------------------------------------------------*/

    new WOW().init({ });

    $(function (){
        if (!$(".footer").hasClass("animate-footer")) {
            $(".footer").find(".wow").addClass("disable-wow");
        }
    });


    /*----------------------------------------------------------------------------------*/
    /* Contact Form AJAX validation and submission
    /*---------------------------------------------------------------------------------- */
    if (jQuery().validate && jQuery().ajaxSubmit) {
        // Contact Form Handling
        var contact_options = {
            target: '#message-sent',
            beforeSubmit: function () {
                $('#contact-loader').fadeIn('fast');
                $('#message-sent').fadeOut('fast');
            },
            success: function () {
                $('#contact-loader').fadeOut('fast');
                $('#message-sent').fadeIn('fast');
                $('#contact-form').resetForm();
            }
        };

        $('#contact-form').validate({
            errorLabelContainer: $("div.error-container"),
            submitHandler: function (form) {
                   $(form).ajaxSubmit(contact_options);
            }
        });
    }


    

})(jQuery);


