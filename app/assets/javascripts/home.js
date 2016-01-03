(function ($) {
    "use strict";

    /*-----------------------------------------------------------------------------------*/
    /* Advance Search Select-ables
     /*-----------------------------------------------------------------------------------*/
    if (jQuery().selectric) {
        $( ".advance-selectable" ).selectric();
    }


    


    /*-----------------------------------------------------------------------------------*/
    /* add ingredients
    /*-----------------------------------------------------------------------------------*/
    if (jQuery().meanmenu) {
        var list_sortable = $(".list-sortable");
        list_sortable.parents("body").addClass("visible-overflow");
        //  sortable
        list_sortable.sortable({
            forcePlaceholderSize: true,
            placeholder: "detail-placeholder",
            handle: ".handler-list"
        });
    }


    $('.add-button.add-ing').on("click",function(event){

        var newMajesticItem= '<li style="display: none">' +
            '<div class="add-fields">' +
            ' <span class="handler-list"><i class="fa fa-arrows"></i></span>' +
            ' <input type="text" name="ingredients[]" id="ingredients"/>' +
            ' <span class="del-list"><i class="fa fa-trash"></i></span>' +
            '</div>'+
            '</li>';
        $( '.list-sortable.ingredients-list').append( newMajesticItem );
        $( '.list-sortable.ingredients-list').children("li").slideDown();
        bindMajesticItem();

        event.preventDefault();
    });



    $('.add-button.add-steps').on("click",function(event){
        event.preventDefault();
        var newMajesticItem = '<li style="display: none">' +
            '<div class="add-fields">' +
            ' <span class="handler-list"><i class="fa fa-arrows"></i></span>' +
            '<textarea class="short-text" name="steps" id="steps" cols="30" rows="10">    </textarea>' +
            ' <span class="del-list"><i class="fa fa-trash"></i></span>' +
            '</div>'+
            '</li>';


        $( '.list-sortable.steps').append( newMajesticItem);
        $('.list-sortable.steps').children("li").slideDown();
        bindMajesticItem();
    });

    function bindMajesticItem(){

        /* Bind click event to remove detail icon button */

        $('.del-list').on("click",function(event){
            event.preventDefault();
            var $this = $( this );
            $this.closest( 'li' ).slideUp(function() { $(this).remove(); });
        });
    }




    /*-----------------------------------------------------------------------------------*/
    /* advance search toggle
     /*-----------------------------------------------------------------------------------*/

    $('.advance-search .tag-inner').on("click",function(){
        if ($(".advance-search").hasClass("open")){
            $(".advance-search").removeClass("open");
            $(".outer-advance-search").slideUp();
        }
        else{
            $(".advance-search").addClass("open");
            $(".outer-advance-search").slideDown();
        }


    });

    /*-----------------------------------------------------------------------------------*/
    /* Listing list end grid buttons
    /*-----------------------------------------------------------------------------------*/

    $('.listing-buttons span').on("click",function(){
        $('.listing-buttons span').removeClass("current");
        if( $(this).hasClass("grid")){
            $(this).addClass("current");
            if($(".recipe-listing").hasClass("listing-list")){
                $(".recipe-listing").removeClass("listing-list").addClass("listing-grid");
            }

        }
        if( $(this).hasClass("list")){
            $(this).addClass("current");
            $(".recipe-listing").removeClass("listing-grid").addClass("listing-list");

        }
    });


    /*-----------------------------------------------------------------------------------*/
    /* Tabs
    /*-----------------------------------------------------------------------------------*/
    var $tabsNav = $('.tabs-nav'),
        $tabsNavLis = $tabsNav.children('li');

    $tabsNav.each(function () {
        var $this = $(this);
        $this.next().children('.tab-content').stop(true, true).hide()
            .first().show();
        $this.children('li').first().addClass('active').stop(true, true).show();
    });

    $tabsNavLis.on('click', function (e) {
        var $this = $(this);
        $this.siblings().removeClass('active').end()
            .addClass('active');
        var idx = $this.parent().children().index($this);
        $this.parent().next().children('.tab-content').stop(true, true).hide().eq(idx).fadeIn();
        e.preventDefault();
    });


    /*-----------------------------------------------------------------------------------*/
    /*	Accordion
    /*-----------------------------------------------------------------------------------*/
    $('dl.accordion dt').on("click",function(){
        $(this).siblings('dt').removeClass('current');
        $(this).addClass('current').next('dd').stop(true, true).slideDown(500).siblings('dd').stop(true, true).slideUp(500);
    });


    
    /*-----------------------------------------------------------------------------------*/
    /* swipebox
    /*-----------------------------------------------------------------------------------*/
    if (jQuery().swipebox) {
        $('.swipebox').swipebox();
    }



    /*-----------------------------------------------------------------------------------*/
    /* Alert close
     /*-----------------------------------------------------------------------------------*/
    $(".close-alert").on("click",function(){
        $(this).parent(".alert").slideUp();
    });

    
    $(window).load(function () {
        /*-----------------------------------------------------------------------------------*/
        /* page loader
         /*-----------------------------------------------------------------------------------*/
        $(".loadr").fadeOut();
        jQuery(".preloader").delay(200).fadeOut("slow").delay(200, function(){
            jQuery(this).remove();
        });

        /*-----------------------------------------------------------------------------------*/
        /* animation on page load
         /*-----------------------------------------------------------------------------------*/

        $('.fade-load-left').queue(function(){
            $(this).addClass("fadeInLeft");
        });

        $('.fade-load-right').queue(function(){
            $(this).addClass("fadeInRight");
        });
        $('.fade-load-up').queue(function(){
            $(this).addClass("fadeInUp");
        });
        $('.fade-load-down').queue(function(){
            $(this).addClass("fadeInDown");
        });
    });

})(jQuery);


