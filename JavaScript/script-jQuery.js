        
//        -------------------------- NAVIGATION MENU
        
$(document).ready(function(){

    $('.hamburger-menu').click(function(){
        $('.navigation-menu-panel').toggleClass('active');
        $('.navigation-menu-layer').fadeToggle(200);
    })
    $('.exit-cross img').click(function(){
        $('.navigation-menu-panel').toggleClass('active');
        $('.navigation-menu-layer').fadeToggle(200);
    })




//            ---------------------- STRATEGY-SECTION-ANIMATIONS
    $('#define-box').click(function(){
        $(this).toggleClass('active');
        $('#define-text').toggleClass('active');
        $('#define-dots').toggle();
//                --------------------------                
        $('#design-box').removeClass('active');
        $('#design-text').removeClass('active');
        $('#design-dots').show();

        $('#build-box').removeClass('active');
        $('#build-text').removeClass('active');
        $('#build-dots').show();

        $('#launch-box').removeClass('active');
        $('#launch-text').removeClass('active');
        $('#launch-dots').show();
    })

    $('#design-box').click(function(){
        $(this).toggleClass('active');
        $('#design-text').toggleClass('active');
        $('#design-dots').toggle();
//                --------------------------
        $('#define-box').removeClass('active');
        $('#define-text').removeClass('active');
        $('#define-dots').show();

        $('#build-box').removeClass('active');
        $('#build-text').removeClass('active');
        $('#build-dots').show();

        $('#launch-box').removeClass('active');
        $('#launch-text').removeClass('active');
        $('#launch-dots').show();
    })

    $('#build-box').click(function(){
        $(this).toggleClass('active');
        $('#build-text').toggleClass('active');
        $('#build-dots').toggle();
//                --------------------------               
        $('#design-box').removeClass('active');
        $('#design-text').removeClass('active');
        $('#design-dots').show();     

        $('#define-box').removeClass('active');
        $('#define-text').removeClass('active');
        $('#define-dots').show();

        $('#launch-box').removeClass('active');
        $('#launch-text').removeClass('active');
        $('#launch-dots').show();
    })

    $('#launch-box').click(function(){
        $(this).toggleClass('active');
        $('#launch-text').toggleClass('active');
        $('#launch-dots').toggle();
//                --------------------------
        $('#design-box').removeClass('active');
        $('#design-text').removeClass('active');
        $('#design-dots').show();               

        $('#define-box').removeClass('active');
        $('#define-text').removeClass('active');
        $('#define-dots').show();

        $('#build-box').removeClass('active');
        $('#build-text').removeClass('active');
        $('#build-dots').show();                
    })



//            ----------------------- PROJECTS-SECTION ANIMATION
    $('#project1').click(function(){
        $('#project1-overlay').fadeToggle();
        $('#project1-open').fadeToggle();

        $('').fadeOut();
    })
    $('#project2').click(function(){
        $('#project2-overlay').fadeToggle();
        $('#project2-open').fadeToggle();

        $('').fadeOut();
    })
    $('#project3').click(function(){
        $('#project3-overlay').fadeToggle();
        $('#project3-open').fadeToggle();

        $('').fadeOut();
    })
    $('#project4').click(function(){
        $('#project4-overlay').fadeToggle();
        $('#project4-open').fadeToggle();

        $('').fadeOut();
    })
    $('#project5').click(function(){
        $('#project5-overlay').fadeToggle();
        $('#project5-open').fadeToggle();

        $('').fadeOut();
    })
    $('#project6').click(function(){
        $('#project6-overlay').fadeToggle();
        $('#project6-open').fadeToggle();

        $('').fadeOut();
    })

})